# Free Deployment Guide

This link tree site can be deployed for **completely free** using several options.

## Option 1: GitHub Pages (Recommended)

### Setup Steps:
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Click "Settings" → "Pages"
   - Source: "Deploy from a branch"
   - Branch: "main" → "/ (root)"
   - Click "Save"

3. **Your site will be live at:** `https://yourusername.github.io/reponame`

### How GP Updates Links:
1. Go to `public/data.json` on GitHub
2. Click the pencil icon to edit
3. Make changes
4. Click "Commit changes"
5. Site updates automatically in 1-2 minutes


## Custom Domain (Optional)

You can add a custom domain to any of these platforms:
- **GitHub Pages:** Free custom domain
- **Vercel:** Free custom domain
- **Netlify:** Free custom domain

## Next Steps

1. **Choose your deployment platform** (GitHub Pages recommended)
2. **Customize the data.json** with your girlfriend's info
3. **Add profile picture and icons** to the public folder
4. **Deploy and share the link!**
