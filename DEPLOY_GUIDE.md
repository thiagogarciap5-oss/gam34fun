# 🎓 Step-by-Step Vercel Deployment Guide

This guide will walk you through deploying Gam34fun to Vercel from scratch.

---

## 📋 Prerequisites

You'll need:
- A computer with internet access
- A GitHub account (free)
- A Vercel account (free) - sign up at vercel.com

---

## 🏃‍♂️ Quick Overview (5 Steps)

1. **Push code to GitHub**
2. **Connect GitHub to Vercel**
3. **Deploy!**
4. **Set up 24/7 automation**
5. **Done!** 🚀

---

## STEP 1: Push Code to GitHub

### 1.1 Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Follow the steps (email, password, username)
4. Verify your email

### 1.2 Create a New Repository
1. Log in to GitHub
2. Click the **+** icon (top right) → **New repository**
3. Settings:
   - **Repository name:** `gam34fun`
   - **Description:** `AI-Powered Gaming Platform`
   - **Public** (or Private if you prefer)
   - ✅ **Add a README file** (optional)
4. Click **Create repository**

### 1.3 Push Your Code to GitHub

Open your terminal/command prompt and run:

```bash
# Navigate to the project
cd /workspace/gam34fun

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Gam34fun gaming platform"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/gam34fun.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Troubleshooting:**
- If you get a permission error, you need to create a GitHub token
- Go to GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Use the token as your password when pushing

---

## STEP 2: Connect GitHub to Vercel

### 2.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub** (easiest option)
4. Authorize Vercel to access your GitHub

### 2.2 Import Your Project
1. Once logged in, click **Add New** → **Project**
2. You'll see a list of your GitHub repos
3. Find and select **`gam34fun`**
4. Click **Import**

---

## STEP 3: Configure Deployment Settings

On the configuration page:

### 3.1 Framework Preset
- Vercel should auto-detect **Next.js**
- If not, select **Next.js** from the dropdown

### 3.2 Build Settings
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### 3.3 Environment Variables (Optional)
Click **Environment Variables** and add:
- Name: `NEXT_PUBLIC_SITE_NAME`
- Value: `Gam34fun`

### 3.4 Deploy!
1. Click **Deploy**
2. Wait 1-2 minutes for deployment
3. You'll see a success screen with your URL!

### 3.5 Your Site URL
- Vercel will give you a URL like: `gam34fun.vercel.app`
- You can change this to a custom domain later

---

## STEP 4: Set Up 24/7 Automation (For New Games)

### 4.1 Create OpenHands Account
1. Go to [app.all-hands.dev](https://app.all-hands.dev)
2. Sign up/login
3. Get your API key from settings

### 4.2 Create an Automation
1. In OpenHands Cloud, go to **Automations**
2. Click **Create Automation**
3. Configure:

**Trigger Type:** Cron
```
Schedule: 0 * * * *
```
(This runs every hour on the hour)

**Prompt:**
```
Generate 1 new HTML5 game using the Python script at scripts/generate_game.py.
Run: python scripts/generate_game.py --count 1
Commit the new game files to the repository.
```

**Repository Access:** Grant access to your gam34fun repo

4. Click **Create**
5. The automation will now run every hour! 🕐

---

## STEP 5: Verify Everything Works

### 5.1 Check Your Site
1. Visit your Vercel URL (e.g., `gam34fun.vercel.app`)
2. Browse games, search, filter by category
3. Click on a game to preview it

### 5.2 Check Your GitHub
1. Go to your gam34fun repo
2. See if new games are being added (check `public/games/` folder)

### 5.3 Check OpenHands
1. View automation run history
2. See new games being generated

---

## 🎉 You're Done!

Your gaming platform is now live at: `https://gam34fun.vercel.app`

New AI-generated games will appear every hour automatically!

---

## 🔧 Common Issues & Fixes

### Issue: "Permission denied" when pushing to GitHub
**Fix:** Create a GitHub Personal Access Token
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Copy the token
5. Use the token as password when `git push`

### Issue: Build failed on Vercel
**Fix:** Check the deployment logs
1. In Vercel dashboard, click on the deployment
2. Look at the build logs
3. Common fixes:
   - Ensure `package.json` has correct scripts
   - Check Node.js version compatibility

### Issue: Games not showing
**Fix:** 
1. Check if games exist in `public/games/` folder
2. Make sure they have `index.html` files
3. Redeploy after adding games

### Issue: Automation not working
**Fix:**
1. Check OpenHands automation logs
2. Ensure GitHub repo is connected
3. Verify the prompt is correct

---

## 📞 Need Help?

- **Vercel Docs:** vercel.com/docs
- **GitHub Docs:** docs.github.com
- **OpenHands Docs:** docs.openhands.dev

---

## 💡 Pro Tips

1. **Custom Domain:** In Vercel, go to Settings → Domains → Add `gam34fun.vercel.app` or your own domain

2. **Auto-Deploy:** Every time you push to GitHub, Vercel automatically redeploys!

3. **Preview Deployments:** Each PR gets its own preview URL for testing

4. **Analytics:** Vercel Analytics shows visitors, performance, etc.

---

## 📁 Your Project Location

The complete project is at: `/workspace/gam34fun`

You can also download it as a ZIP from GitHub after pushing!

---

**Happy gaming! 🎮🎉**
