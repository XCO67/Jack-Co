# Jack & Co - Event Management Website

A modern, production-ready event management website built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with glassmorphic effects
- 🖼️ Image-based service and portfolio showcases
- 🎭 Smooth animations and transitions
- 📱 Fully responsive across all devices
- ♿ Accessible and SEO optimized
- 🚀 Production-ready with optimized performance
- 📧 Functional contact form with email delivery

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── contact-us/        # Contact page with form
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API endpoint
│   └── layout.tsx         # Root layout with metadata
├── components/            # Reusable components
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Site footer
│   └── ui/                # UI component library
├── lib/                   # Utilities and configuration
│   ├── config.ts          # Site configuration (easy to update)
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Helper functions
└── public/                # Static assets
    ├── services/          # Service images
    ├── portfolio/         # Portfolio images
    └── company-logos/     # Company logo images
```

## Configuration

All site content is centralized in `lib/config.ts` for easy updates:

- **Site Information**: Company name, description, contact details
- **Navigation**: Menu items
- **Services**: Service listings with images and descriptions
- **Portfolio**: Event portfolio items
- **Company Logos**: Partner/client logos
- **Social Links**: Instagram, Facebook links

### Adding New Content

1. **New Service**: Add to `services` array in `lib/config.ts`
2. **New Portfolio Item**: Add to `portfolioEvents` array in `lib/config.ts`
3. **New Company Logo**: Add image to `public/company-logos/` and update `companyLogos` array
4. **Update Contact Info**: Modify `siteConfig.contact` in `lib/config.ts`

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
RESEND_API_KEY=your_resend_api_key_here
```

### Setting Up Email (Contact Form)

The contact form uses Resend API for email delivery. To enable email functionality:

1. Sign up for a free account at [Resend.com](https://resend.com)
2. Get your API key from the Resend dashboard
3. Add it to your `.env.local` file as `RESEND_API_KEY`
4. Verify your domain in Resend (or use the default `onboarding@resend.dev` for testing)

**Note**: Without `RESEND_API_KEY`, form submissions will be logged to the console in development mode. For production, you must set up the API key.

## Tech Stack

- **Framework**: Next.js 16
- **React**: 19
- **Styling**: Tailwind CSS 4
- **TypeScript**: Full type safety
- **Fonts**: Rajdhani, Inter (Google Fonts)
- **Email**: Resend API

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for non-critical images
- CSS animations for smooth transitions
- Optimized font loading with `display: swap`

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Alt text for all images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved
