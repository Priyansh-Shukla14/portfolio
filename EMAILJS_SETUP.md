# 📧 EmailJS Setup Guide

## Why You Need This
The contact form on your portfolio needs EmailJS to actually send emails to your inbox when someone fills out the form.

## 5-Minute Setup Steps

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for FREE (click "Create Account")
3. Complete email verification

### Step 2: Get Your Public Key
1. Click on your profile icon → Account
2. Go to the "General" tab
3. Find and copy your **Public Key**
4. Open `src/components/Contact.jsx`
5. Replace `YOUR_PUBLIC_KEY_HERE` with your Public Key (line ~13)

### Step 3: Connect Your Email
1. In EmailJS Dashboard, click **"Email Services"**
2. Click **"Add Service"**
3. Select **"Gmail"** (or your email provider)
4. Follow the connection steps and authorize
5. Copy the **Service ID** (will look like: `service_xxxxxxxxxxx`)

### Step 4: Create Email Template
1. In EmailJS Dashboard, click **"Email Templates"**
2. Click **"Create New Template"**
3. Fill in:
   - **Template Name:** Portfolio Contact
   - **To Email:** `{{to_email}}`
   - **Subject:** `New Message from {{from_name}}: {{subject}}`
   - **Template Content:**
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Click **"Save"**
5. Copy the **Template ID** (will look like: `template_xxxxxxxxxxx`)

### Step 5: Update Contact.jsx
In `src/components/Contact.jsx`, update these lines:
- Line ~13: Replace `YOUR_PUBLIC_KEY_HERE` with your Public Key
- Line ~36: Replace `YOUR_SERVICE_ID_HERE` with your Service ID  
- Line ~37: Replace `YOUR_TEMPLATE_ID_HERE` with your Template ID

### Step 6: Test It!
1. Reload your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox - you should receive the message!

## Troubleshooting

**Message says "Failed to send"?**
- Check that all three credentials (Public Key, Service ID, Template ID) are correct
- Open browser console (F12) to see detailed error messages
- Make sure your email service is verified in EmailJS

**Still not working?**
- Go to EmailJS Dashboard → Activity to see request logs
- Check spam folder in your email
- Ensure the email account you're using is verified

## Free Tier Limits
- EmailJS FREE: 200 emails/month (plenty for a portfolio!)
