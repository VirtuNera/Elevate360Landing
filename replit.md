# Elevate360 Landing Page

## Overview

This is a modern landing page application for Elevate360, a professional development ecosystem by Virtù Nera. The application is built as a full-stack web application with a React frontend and Express backend, featuring a professional landing page with contact forms, newsletter subscriptions, and user data management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with a custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (Active)
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Storage**: DatabaseStorage class implementing IStorage interface
- **API Design**: RESTful endpoints for contact forms and newsletter subscriptions
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Hot module replacement with Vite integration

## Key Components

### Landing Page Sections
1. **Hero Section**: Main value proposition with call-to-action buttons
2. **What is Elevate360**: Overview of the platform's core concept
3. **Key Features**: Six main features with icons and descriptions
4. **How It Works**: 5-step Growth & Trust Cycle process
5. **Who Should Use**: Target audience segments with benefits
6. **Highlights**: Technical differentiators and unique selling points
7. **About Us**: Team information and company mission
8. **FAQ**: Expandable frequently asked questions
9. **CTA**: Newsletter subscription with email capture
10. **Contact**: Contact form with validation
11. **Footer**: Links and social media

### UI Component System
- **Design System**: Custom Elevate360 branding with blue, green, and purple color scheme
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Animation**: Scroll-triggered animations and hover effects
- **Glass Morphism**: Modern UI effects with backdrop blur

## Data Flow

### Contact Form Flow
1. User fills out contact form (name, email, organization, message)
2. Form data validated client-side with Zod schema
3. POST request to `/api/contact` endpoint
4. Server validates data and stores in database
5. Success/error feedback displayed to user

### Newsletter Subscription Flow
1. User enters email in newsletter form
2. Email validated client-side
3. POST request to `/api/newsletter` endpoint
4. Server validates and stores email subscription
5. Success/error toast notification shown

### Data Storage
- **Contact submissions**: Stored with timestamp in `contacts` table
- **Newsletter subscriptions**: Stored with unique email constraint in `newsletters` table
- **User management**: Basic user schema prepared for future authentication

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Library**: Radix UI components, shadcn/ui
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Animation**: Framer Motion, embla-carousel
- **Form Handling**: React Hook Form, hookform/resolvers
- **Date Utilities**: date-fns
- **Icons**: Lucide React

### Backend Dependencies
- **Web Framework**: Express.js
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod, drizzle-zod
- **Session Management**: express-session, connect-pg-simple
- **Development**: tsx, esbuild

### Development Tools
- **TypeScript**: Full type safety across the stack
- **Vite**: Fast development server and build tool
- **ESLint/Prettier**: Code quality and formatting
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
3. **Database**: Drizzle handles schema migrations and deployments

### Production Setup
- **Environment Variables**: `DATABASE_URL` required for database connection
- **Static Files**: Express serves built frontend from `dist/public`
- **API Routes**: Express handles API endpoints under `/api` prefix
- **Database**: PostgreSQL hosted on Neon (serverless)

### Development Workflow
- **Dev Server**: `npm run dev` starts both frontend and backend
- **Database**: `npm run db:push` applies schema changes
- **Type Checking**: `npm run check` validates TypeScript

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **July 03, 2025**: Complete Elevate360 landing page implementation
  - Replaced logo with custom Virtù Nera branding throughout navigation and footer
  - Removed "Watch Demo" button from hero section as requested
  - Updated all "Register Now" buttons to link to Google Form (https://forms.gle/M3P62bvmxqno7c436) opening in new tab
  - Modified highlights section: changed "Gamified Experience" to "Rooted in Psychology" with detailed explanation of behavioral science and habit-forming learning loops
  - Expanded About Us section with comprehensive team showcase including:
    - Leadership team (CEO, CFO/COO, CMO) with individual profiles
    - Extended team members (6 additional roles: Product Designer, Full-Stack Developer, AI/ML Research Lead, Data Analytics Specialist, Community Growth Manager, DevOps Engineer)
    - Group photo placeholder section for team unity showcase
  - Implemented blue and white color scheme with complementary accents
  - Fixed TypeScript error in storage.ts for contact form handling
  - Maintained all original functionality including contact forms, newsletter subscription, and responsive design

- **July 03, 2025**: User experience improvements and navigation updates
  - Changed hero "Register Now" button to "Explore Now" with smooth scroll to "What is Elevate360" section
  - Transformed key features "Learn More" buttons to expandable "Show More/Show Less" functionality with detailed descriptions and examples
  - Removed "See it in Action" button from Growth & Trust Cycle section
  - Removed "Partner with Virtù Nera" button from CTA section, keeping only "Start Now" button
  - Updated contact information:
    - Replaced website and social media with LinkedIn company link (https://www.linkedin.com/company/virt%C3%B9-nera/)
    - Updated email addresses to: fadhli.abdulmateen@gmail.com and virtunera.nads@gmail.com
  - Changed founder's message from CMO to CEO (Zul-Fadhli Abdul Mateen) with updated content

- **July 07, 2025**: Replaced placeholder team photos with actual leadership images
  - Added real photos of leadership team in About Us section:
    - Zul-Fadhli Abdul Mateen (CEO & Founder) - sir_fad image
    - Hafiiz Ramlee (CFO & COO) - sir_hafiz image  
    - Azmi Sabtu (CMO) - sir_spax image
  - Fixed name spelling for Hafiiz Ramlee
  - Implemented proper asset importing for JPG files through file copying with lowercase extensions

- **July 07, 2025**: Added PostgreSQL database integration
  - Created PostgreSQL database with Neon Database provider
  - Implemented `DatabaseStorage` class replacing in-memory storage
  - Added `server/db.ts` with Drizzle ORM configuration
  - Successfully pushed database schema with tables for users, contacts, and newsletters
  - All contact form submissions and newsletter subscriptions now persist in database

- **July 07, 2025**: Website theme and navigation updates
  - Changed "Elevate360" text in hero to be all white instead of white/yellow mixture
  - Updated entire color theme to match Virtù Nera logo (cyan and dark blue colors):
    - Created new CSS variables: --virtu-cyan, --virtu-dark-blue, --virtu-light-blue, --virtu-accent
    - Updated hero gradient and button colors to use Virtù Nera theme
    - Updated About Us section background to use new color scheme
  - Removed "Our Extended Team" section while keeping team photo placeholder
  - Replaced burger menu with always-visible navigation labels:
    - Added "What is Elevate360" navigation link
    - Navigation now shows: Home, What is Elevate360, Features, How It Works, About Us, Contact
    - Removed mobile hamburger menu - all navigation visible on all screen sizes
    - Updated navigation colors to match cyan theme

- **July 07, 2025**: Enhanced navigation and UX improvements
  - Shortened "Rooted in Psychology" description to be more concise while maintaining message impact
  - Refined color scheme to reduce clashing while maintaining complementary Virtù Nera colors
  - Implemented new navigation design:
    - Moved Virtù Nera logo to top center position
    - Added smaller navigation bar below logo with active section highlighting
    - Created transparent section indicator in bottom right corner showing current section
    - Added smooth scroll-based section detection for both navigation and indicator
  - Updated hero section padding to accommodate new navigation structure

- **July 07, 2025**: Color optimization and navigation transparency improvements
  - Optimized color palette for better blending and visual harmony:
    - Reduced saturation on all Virtù Nera theme colors for softer appearance
    - Added new color variables: --virtu-soft-cyan and --virtu-deep-blue
    - Enhanced hero gradient with 4-stop progression for smoother transitions
    - Updated rotating border animations with refined color scheme
  - Improved navigation bar visibility:
    - Increased opacity of top navigation bar background for better readability
    - Added gradient backgrounds to logo container and navigation bar
    - Enhanced active section highlighting with gradient effects and shadows
    - Applied consistent styling to section indicator with matching gradients
  - Adjusted home page background colors to reduce clashing with navigation bar while maintaining visual appeal

- **July 07, 2025**: Content cleanup and footer simplification
  - Removed unnecessary footer sections (Platform, Community, Support links)
  - Removed social media icons (Instagram, Facebook, Twitter, LinkedIn icons)
  - Removed team photo placeholder section from About Us
  - Simplified footer to focus on essential contact information:
    - Centralized layout with Virtù Nera logo and mission statement
    - Direct email contacts and LinkedIn company page link
    - Clean copyright notice

- **July 07, 2025**: Cloud hosting deployment preparation
  - Updated server configuration for flexible port handling (supports PORT environment variable)
  - Added comprehensive deployment configurations for multiple cloud platforms:
    - Dockerfile for containerized deployment
    - render.yaml for Render hosting
    - vercel.json for Vercel deployment
    - netlify.toml for Netlify hosting
  - Created .env.example for environment variable template
  - Added comprehensive README.md with deployment instructions
  - Maintained all existing functionality and visual design during deployment preparation

- **July 07, 2025**: Netlify optimization and serverless functions
  - Created optimized serverless functions for Netlify deployment:
    - Individual functions for contact form and newsletter subscription
    - Simplified validation and logging for serverless environment
    - Proper CORS headers and error handling
  - Updated netlify.toml with specific function routing
  - Added security headers configuration
  - Removed database dependency for Netlify functions (uses logging instead)
  - Maintained full website functionality with optimized serverless architecture

## Changelog

- July 03, 2025. Initial setup and complete landing page customization