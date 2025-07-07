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
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
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

## Changelog

- July 03, 2025. Initial setup and complete landing page customization