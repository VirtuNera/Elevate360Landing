#!/usr/bin/env node

import { execSync } from 'child_process';
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Building for Netlify...');

// Build the frontend
console.log('Building frontend...');
execSync('npm run build:netlify', { stdio: 'inherit' });

// Create netlify functions directory if it doesn't exist
const functionsDir = join(__dirname, 'netlify', 'functions');
if (!existsSync(functionsDir)) {
  mkdirSync(functionsDir, { recursive: true });
}

// Copy necessary files for serverless function
console.log('Copying serverless function files...');

// Copy server files
const serverFiles = [
  'server/storage.js',
  'shared/schema.js',
  'server/db.js'
];

serverFiles.forEach(file => {
  const srcPath = join(__dirname, file);
  const destPath = join(functionsDir, file);
  
  // Create directory if it doesn't exist
  const destDir = dirname(destPath);
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }
  
  if (existsSync(srcPath)) {
    copyFileSync(srcPath, destPath);
  }
});

console.log('Netlify build complete!');