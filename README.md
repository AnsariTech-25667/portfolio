# Portfolio

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19, Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Dark Mode**: System-aware theme toggle with smooth transitions
- **Animations**: Smooth animations with Framer Motion and reduced motion support
- **SEO Optimized**: Comprehensive metadata, sitemap, robots.txt, JSON-LD schema
- **Performance**: Optimized images, lazy loading, and efficient code splitting
- **Accessibility**: ARIA labels, focus management, semantic HTML
- **Interactive Features**: 
  - Contact form with validation and spam protection
  - Animated achievement counters
  - GitHub activity integration
  - Blog functionality
  - Testimonials section
  - AI chatbot placeholder

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your configuration:
   ```
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   GITHUB_USERNAME=yourusername
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout with SEO
│   ├── page.js            # Homepage
│   ├── sitemap.js         # XML sitemap
│   ├── robots.txt         # Robots.txt
│   ├── api/
│   │   └── contact/       # Contact form API
│   ├── blog/              # Blog pages
│   ├── certifications/    # Certifications page
│   └── publications/      # Publications page
├── components/            # React components
├── data/                 # Content data
├── assets/               # Static assets
└── public/              # Public files
```

## Customization

### Personal Data

Edit `data/profile.js` to customize:
- Personal information
- Skills and technologies
- Projects portfolio
- Experience and education
- Social links
- Certifications and publications

### Styling

- **Colors**: Modify `tailwind.config.js` for color scheme
- **Typography**: Update font families and sizes
- **Components**: Extend component styles in respective files

### Content

- **Blog Posts**: Add posts to `data/profile.js` posts array
- **Testimonials**: Add testimonials to profile data
- **Projects**: Update projects array with your work

## Deployment

### Vercel (Recommended)

1. Push to GitHub/GitLab
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

### Other Platforms

1. Build the project:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

## Environment Variables

```bash
# Required for production
NEXT_PUBLIC_BASE_URL=https://yourdomain.com

# Optional - GitHub integration
GITHUB_USERNAME=yourusername

# Optional - GitHub API token for higher rate limits
GITHUB_TOKEN=your_github_token
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run analyze` - Analyze bundle size

## Performance

- Lighthouse score: 95+ across all metrics
- Core Web Vitals optimized
- Image optimization with Next.js Image
- Efficient code splitting
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Contact

Feel free to reach out for questions or collaborations!
