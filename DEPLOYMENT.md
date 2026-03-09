# Deployment Guide

Complete guide to deploy your SEO-optimized GPA Calculator website to production.

## Quick Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is the official platform for Next.js and provides:
- Zero-config deployment
- Automatic optimizations
- Built-in CDN
- Free SSL/TLS
- Preview deployments
- Analytics

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure**
   - Select your project
   - Set production domain
   - Configure environment variables

4. **Verify**
   - Check sitemap: `yourdomain.com/sitemap.xml`
   - Check robots.txt: `yourdomain.com/robots.txt`
   - Test in Google Search Console

#### Domain Setup:
```
1. Go to Vercel Dashboard
2. Project Settings > Domains
3. Add custom domain
4. Update DNS records
5. Wait for verification (5-15 mins)
```

### 2. Netlify (Easy Alternative)

#### Steps:

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

3. **Or Connect GitHub**
   - Push to GitHub
   - Connect repo in Netlify
   - Auto-deploy on push

#### Domain Setup:
```
1. Site Settings > Domain Management
2. Add custom domain
3. Update DNS records at registrar
```

### 3. Cloudflare Pages

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to Cloudflare
   - Pages > Create project
   - Select GitHub repo
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Confirm and deploy
   - Wait for build (2-5 minutes)

### 4. Self-Hosted (AWS, DigitalOcean, etc)

#### AWS EC2:
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone <your-repo>
cd GPA\ Calculator

# Install & build
npm install
npm run build

# Start with PM2
npm i -g pm2
pm2 start "npm start" --name "gpa-calculator"
pm2 startup
pm2 save

# Configure Nginx as proxy
# ... (see nginx config below)
```

#### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name gpacalculator.com www.gpacalculator.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Caching
    location /_next/static {
        alias /var/www/gpa-calculator/.next/static;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Pre-Deployment Checklist

### Code Quality
- [ ] Run `npm run lint`
- [ ] Check for TypeScript errors
- [ ] Test calculator functionality
- [ ] Verify all 50 calculator pages
- [ ] Check blog pages load correctly

### SEO Verification
- [ ] Sitemap.xml is generated and valid
- [ ] Robots.txt is in place
- [ ] Meta tags are present
- [ ] Schema markup is valid
- [ ] Breadcrumbs working
- [ ] Internal links functional

### Performance
- [ ] Build succeeds: `npm run build`
- [ ] No console errors/warnings
- [ ] Page load time < 2 seconds
- [ ] Mobile responsive verified
- [ ] Images optimized

### Content
- [ ] All calculator titles present
- [ ] Blog posts have content
- [ ] No typos in main pages
- [ ] Links not broken
- [ ] Help text is clear

## Post-Deployment Steps

### 1. Google Search Console
```
1. Go to Google Search Console
2. Add your domain as property
3. Verify ownership (DNS or HTML file)
4. Submit sitemap.xml
5. Request indexing for key pages
6. Monitor Search Performance
```

### 2. Google Analytics
```
1. Create GA4 property
2. Add measurement ID to env
3. Verify tracking in browser
4. Set up goals (calculator usage)
5. Monitor traffic sources
```

### 3. Google AdSense
```
1. Apply at google.com/adsense
2. Wait for approval (1-3 weeks)
3. Generate ad units
4. Add code to pages
5. Monitor earnings
```

### 4. Backlink Building
```
Submit to:
- Education directories
- Student resource sites
- Educational blogs
- GPA-related forums
- Q&A sites (Quora)

Target Keywords:
- "free gpa calculator"
- "college gpa calculator"
- "gpa calculator online"
- "calculate my gpa"
```

### 5. Monitoring

#### Essential Metrics:
```
- Page Speed Insights score
- Core Web Vitals
- Organic traffic growth
- Keyword rankings
- Click-through rate (CTR)
- Bounce rate
- Time on page
- AdSense revenue
```

#### Tools:
- Google Search Console (free)
- Google Analytics (free)
- Google PageSpeed Insights (free)
- SEMrush (paid)
- Ahrefs (paid)
- Moz (paid)

## Performance Optimization

### Cache Headers
```
# .vercel/functions/.headers file or nginx config
/* {
  Cache-Control: public, max-age=3600
}

/_next/static/* {
  Cache-Control: public, max-age=31536000, immutable
}
```

### CDN Optimization
- Vercel CDN: Automatic
- Cloudflare: Automatic
- Enable compression
- Minify assets
- Optimize images

## Maintenance

### Regular Tasks
- Monitor performance monthly
- Check for broken links
- Update content
- Build backlinks
- Monitor rankings
- Review analytics

### Security
- Keep dependencies updated: `npm update`
- Enable HTTPS (auto with Vercel)
- Configure security headers
- Monitor for vulnerabilities
- Use .env for sensitive data

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Pages Not Indexed
- Check robots.txt allows indexing
- Verify sitemap.xml
- Request indexing in Search Console
- Check for noindex meta tags

### Slow Performance
- Check Core Web Vitals in PageSpeed Insights
- Reduce image sizes
- Enable caching
- Minimize JavaScript
- Use CDN

### Traffic Not Coming
- Wait 3-6 months for organic ranking
- Build more backlinks
- Optimize content for keywords
- Increase page load speed
- Improve content quality

## SSL/TLS Certificate

### Vercel
- Automatic (Let's Encrypt free)
- Auto-renewal
- No action needed

### Netlify
- Automatic (Let's Encrypt free)
- Auto-renewal
- No action needed

### Cloudflare
- Automatic (shared SSL free)
- Full SSL available
- Premium certificates

### Self-Hosted
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --nginx -d gpacalculator.com

# Auto-renewal
sudo certbot renew --dry-run
```

## Domain Registration

Recommended registrars:
- Namecheap
- GoDaddy
- Google Domains
- Vercel domains

### Point Domain to Vercel
```
Update DNS records:
- CNAME: www.gpacalculator.com → cname.vercel-dns.com
- Or use custom NS records
```

## Cost Estimation

| Platform | Cost | Benefits |
|----------|------|----------|
| Vercel | Free (generous limits) | Best for Next.js |
| Netlify | Free (generous limits) | Good alternative |
| Cloudflare | Free (with CDN) | Great value |
| AWS | $5-50/month | Full control |
| Domain | $10-15/year | Required |
| AdSense | Free | ~$500-2000/month revenue |

## Expected Timeline

```
Week 1: Deployment
├─ Deploy website
├─ Set up Google Search Console
└─ Submit sitemap

Week 2-4: Initial Indexing
├─ Monitor Search Console
├─ Fix crawl errors
└─ Request indexing for important pages

Month 2-3: First Rankings
├─ Check keyword positions
├─ Analyze search performance
└─ Adjust content as needed

Month 4-6: Growth Phase
├─ Build backlinks
├─ Create more content
├─ Expand keyword targeting

Month 6-12: Ranking Phase
├─ Improve rankings
├─ Increase organic traffic
└─ Optimize for conversions
```

## Success Metrics

After 6 months you should see:
- ✅ 500+ indexed pages
- ✅ 50-100 organic visitors/month
- ✅ 10-20 keyword rankings
- ✅ $100-500 AdSense revenue
- ✅ Growing organic traffic

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Google Search Central: https://developers.google.com/search
- Tailwind CSS: https://tailwindcss.com/docs

---

Questions? Check the README.md or application code comments!
