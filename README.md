# Developer Portfolio Website

![Portfolio Preview](https://imgix.cosmicjs.com/a94c10b0-6493-11f0-a051-23c10f41277a-photo-1556742049-0cfed4f6a45d-1752924578371.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional developer portfolio website built with Next.js 15 and powered by Cosmic CMS. Showcase your projects, skills, work experience, and testimonials with a beautiful, responsive design.

## ✨ Features

- **Dynamic Project Gallery** - Showcase projects with detailed descriptions, technology stacks, and demo links
- **Skills Matrix** - Organized skill categories with proficiency levels and experience indicators  
- **Professional Timeline** - Work experience with company logos, achievements, and technology usage
- **Client Testimonials** - Star ratings and testimonials with client photos and project connections
- **Responsive Design** - Mobile-first approach for optimal viewing on all devices
- **SEO Optimized** - Built-in meta tags and structured data for search visibility
- **Modern UI/UX** - Clean design with Inter font family and smooth interactions

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=687b80fd54968488c301904f&clone_repository=687bad7554968488c3019076)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Cosmic CMS with staging environment
- **Language**: TypeScript for type safety
- **Font**: Inter for modern typography
- **Icons**: Lucide React for consistent iconography
- **Deployment**: Vercel/Netlify ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Bun package manager
- Cosmic CMS account

### Installation

1. **Clone and install dependencies**
   ```bash
   bun install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

3. **Run the development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📚 Cosmic SDK Examples

### Fetch Projects
```typescript
import { cosmic } from '@/lib/cosmic'

const projects = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetch Skills by Category
```typescript
const frontendSkills = await cosmic.objects
  .find({ 
    type: 'skills',
    'metadata.category': 'frontend'
  })
  .props(['title', 'metadata'])
```

### Get Work Experience
```typescript
const experience = await cosmic.objects
  .find({ type: 'work-experience' })
  .props(['title', 'metadata'])
  .sort('metadata.start_date')
```

## 🎨 Cosmic CMS Integration

This portfolio leverages four main content types from your Cosmic bucket:

- **Projects**: Showcase your development work with descriptions, technologies, and gallery images
- **Skills**: Organize technical skills by category with proficiency levels
- **Work Experience**: Professional timeline with company details and achievements  
- **Testimonials**: Client feedback with ratings and related project connections

All content is fetched dynamically using the Cosmic SDK with staging environment configuration for safe content updates.

## 🚀 Deployment Options

### Vercel (Recommended for Next.js)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify or connect your Git repository
```

### Environment Variables for Production
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`

The staging environment ensures you can safely update content without affecting production until ready.
<!-- README_END -->