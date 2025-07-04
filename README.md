<!-- README_START -->
# Developer Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and TypeScript, showcasing projects, skills, work experience, and client testimonials. Features a clean design with Tailwind CSS and dynamic content management through Cosmic CMS.

![Portfolio Homepage](https://imgix.cosmicjs.com/0df96030-5909-11f0-a051-23c10f41277a-photo-1486312338219-ce68d2c6f44d-1751655586843.jpg?w=1200&h=600&fit=crop&auto=format,compress)

## ✨ Features

- **Modern Design**: Clean, professional layout with responsive design
- **Dynamic Content**: All content managed through Cosmic CMS
- **Project Showcase**: Featured projects with detailed case studies
- **Skills Matrix**: Organized by category with proficiency levels
- **Work Experience**: Timeline view of professional experience
- **Client Testimonials**: Social proof with ratings and client photos
- **Performance Optimized**: Next.js App Router with server-side rendering
- **TypeScript**: Full type safety throughout the application
- **SEO Ready**: Optimized meta tags and structured data

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=portfolio-website-production)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials. Skills include React, TypeScript, Next.js, Astro, MongoDb, Postgres, API, AI"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: "staging" in the cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Content Management**: Cosmic CMS
- **Deployment**: Vercel
- **Package Manager**: Bun

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the portfolio content model

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd developer-portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📡 Cosmic SDK Examples

### Fetching Projects
```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const projects = response.objects
```

### Fetching Skills by Category
```typescript
const response = await cosmic.objects
  .find({ 
    type: 'skills',
    'metadata.category': 'frontend' 
  })
  .props(['id', 'title', 'metadata'])

const frontendSkills = response.objects
```

### Getting Work Experience
```typescript
const response = await cosmic.objects
  .find({ type: 'work-experience' })
  .props(['id', 'title', 'metadata'])
  .depth(1)
  .sort('metadata.start_date')

const workExperience = response.objects
```

## 🎨 Cosmic CMS Integration

This portfolio is fully integrated with [Cosmic](https://www.cosmicjs.com) for content management. The following object types are supported:

- **Projects**: Showcase your work with descriptions, technologies, and images
- **Skills**: Organize your technical skills by category and proficiency level
- **Work Experience**: Display your professional timeline
- **Testimonials**: Feature client feedback and ratings

All content is fetched server-side for optimal performance and SEO. Visit the [Cosmic docs](https://www.cosmicjs.com/docs) for more information on content management.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Environment Variables
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`

<!-- README_END -->