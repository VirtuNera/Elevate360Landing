# Elevate360 Landing Page

A professional landing page for Elevate360 by Virtù Nera - a comprehensive professional development ecosystem.

## Features

- Modern React frontend with TypeScript
- Express.js backend with PostgreSQL database
- Responsive design with Tailwind CSS
- Contact form and newsletter subscription
- Smooth animations and professional UI

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

3. Push database schema:
```bash
npm run db:push
```

4. Start development server:
```bash
npm run dev
```

## Production Deployment

### Build the application:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

## Cloud Hosting Options

### Render
- Use the included `render.yaml` configuration
- Connect your repository and deploy automatically

### Vercel
- Use the included `vercel.json` configuration
- Connect your repository for automatic deployments

### Netlify
- Use the included `netlify.toml` configuration
- Connect your repository for automatic deployments

### Docker
- Use the included `Dockerfile` for containerized deployment
- Build: `docker build -t elevate360 .`
- Run: `docker run -p 5000:5000 elevate360`

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to 'production' for production builds
- `PORT`: Port number (defaults to 5000)

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Build**: Vite, esbuild