# Deployment Guide

This document explains how to deploy the BlackBridge Growth Plan website.

## Quick Start: Vercel (Recommended)

Vercel is the recommended deployment platform for this project.

### Prerequisites
- GitHub account with this repository pushed
- Vercel account (free at https://vercel.com)

### Steps

1. **Push to GitHub** (if not already done)
   ```bash
   cd /Users/jasonstephens/Coding\ Projects/2026-Growth_Strategy-BBL
   git init
   git add .
   git commit -m "Initial commit: BlackBridge Growth Plan website"
   git remote add origin https://github.com/YOUR_USERNAME/blackbridge-growth-plan.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Leave default settings (should auto-detect Next.js/Vite)
   - Click "Deploy"

3. **That's it!** Your site will be live at `blackbridge-growth-plan.vercel.app`

### Custom Domain (Optional)
- In Vercel dashboard, go to Settings → Domains
- Add your custom domain (e.g., `growth-plan.blackbridgelogistics.com`)
- Update DNS records as instructed

## Alternative: Netlify

1. **Connect Repository**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Select GitHub repository
   - Leave build settings as default
   - Click "Deploy site"

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

## Alternative: Static Hosting (AWS S3 + CloudFront)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   # Create S3 bucket
   aws s3 mb s3://blackbridge-growth-plan

   # Upload files
   aws s3 sync dist/ s3://blackbridge-growth-plan/
   ```

3. **Set up CloudFront** (for caching and HTTPS)
   - Create distribution pointing to S3 bucket
   - Configure custom domain
   - Set SSL certificate

## Local Development

For local testing before deployment:

```bash
# Start development server
npm run dev

# Visit http://localhost:5173
```

## Production Build

To create a production-ready build:

```bash
npm run build
```

Output will be in the `dist/` directory.

## Environment Variables

This project doesn't require any environment variables for basic deployment. All content is static and embedded in the build.

## Performance Tips

The bundle size is ~735 KB (213 KB gzipped). To optimize further:

1. **Enable compression** on your hosting (gzip already enabled on Vercel/Netlify)
2. **Use a CDN** (automatic on Vercel/Netlify)
3. **Cache headers** (automatic on Vercel/Netlify)

## Updating Content

After deployment, to update content:

1. Make changes to source files in `src/`
2. Push to GitHub: `git push`
3. **Vercel/Netlify** will automatically deploy the new version

## Monitoring

### Vercel Analytics
- Dashboard shows deployments, performance metrics
- Automatic monitoring of Core Web Vitals

### Error Tracking
- Check browser console for errors (F12)
- Vercel logs available in dashboard

## Troubleshooting

### Build fails
- Check `npm run build` locally first
- Ensure all TypeScript types are correct
- Check for missing dependencies

### Site looks broken
- Clear browser cache (Ctrl+Shift+Del)
- Check mobile responsive design (open DevTools, toggle device toolbar)
- Verify charts are loading (check Network tab)

### Performance is slow
- Check Network tab for large file downloads
- Verify gzip compression is enabled
- Consider code-splitting charts (see vite.config.ts)

## Security

- No sensitive data in the codebase
- Static site = minimal attack surface
- HTTPS enforced automatically on Vercel/Netlify
- No database or API calls required

## Maintenance

### Monthly checks
- Verify all links work
- Test on different browsers
- Check performance metrics
- Review analytics

### Updating content
Simply edit source files and push to GitHub. Deployment is automatic.

## Support

For deployment issues:
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com
- React docs: https://react.dev
- Vite docs: https://vitejs.dev

---

**Deployment created:** January 2026
**Last updated:** January 2026
