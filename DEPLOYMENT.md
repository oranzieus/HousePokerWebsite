# Deployment Guide for HousePokerWebsite

This guide explains how to deploy the HousePokerWebsite to GitHub Pages.

## Prerequisites

- Node.js and npm installed
- Write access to the GitHub repository
- All changes committed and pushed to the repository

## Deployment Steps

### 1. Deploy the Website

To build and deploy the website to GitHub Pages, run:

```bash
npm run deploy
```

This command will:
1. Build the production version of the site (`npm run build`)
2. Deploy the contents of the `dist` folder to the `gh-pages` branch
3. Push the changes to GitHub

The deployment process typically takes 1-2 minutes.

### 2. Enable GitHub Pages (First-time setup)

If this is your first deployment, you need to enable GitHub Pages in the repository settings:

1. Go to the repository on GitHub: `https://github.com/oranzieus/HousePokerWebsite`
2. Click on **Settings** (in the repository menu)
3. Scroll down and click on **Pages** (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select `gh-pages` and `/ (root)`, then click **Save**

GitHub will start deploying your site. This may take a few minutes.

### 3. Access Your Deployed Site

Once deployment is complete, your website will be accessible at:

**https://oranzieus.github.io/HousePokerWebsite/**

## Troubleshooting

### Issue: "Permission denied" error

**Solution:** Make sure you have write access to the repository and are authenticated with GitHub.

### Issue: 404 error when accessing the site

**Possible causes and solutions:**

1. **GitHub Pages not enabled**: Follow the steps in section 2 to enable GitHub Pages
2. **Deployment in progress**: Wait a few minutes for GitHub to finish deploying
3. **Branch not selected**: Make sure the `gh-pages` branch is selected as the source in repository settings

### Issue: Assets not loading (broken images, CSS not applied)

**Solution:** This usually means the base path is not configured correctly. Verify that:
- `vite.config.ts` has `base: '/HousePokerWebsite/'`
- You've rebuilt and redeployed after making any configuration changes

### Issue: Build fails during deployment

**Solution:** 
1. Test the build locally first: `npm run build`
2. Fix any build errors
3. Commit and push the fixes
4. Try deploying again: `npm run deploy`

### Issue: Changes not reflected on the live site

**Solutions:**
1. Wait a few minutes for GitHub Pages to update (can take 5-10 minutes)
2. Clear your browser cache or try in an incognito/private window
3. Check that your changes were successfully deployed to the `gh-pages` branch

## Manual Verification

To verify the deployment worked:

1. Check the `gh-pages` branch on GitHub - it should contain the built files
2. Visit the live URL: https://oranzieus.github.io/HousePokerWebsite/
3. Check browser console for any errors
4. Verify that all pages and assets load correctly

## Redeployment

To deploy updates:

1. Make your changes to the source code
2. Commit and push to the main branch
3. Run `npm run deploy` again

The `gh-pages` branch and live site will be updated automatically.

## Additional Notes

- The `gh-pages` package automatically manages the `gh-pages` branch
- Never manually edit the `gh-pages` branch - it's automatically generated
- The deployment process is safe and can be run multiple times
- Old deployments are overwritten, not accumulated
- The `dist` folder is excluded from the main branch via `.gitignore`
