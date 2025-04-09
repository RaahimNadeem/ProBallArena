# Email Setup for Contact Form

The contact form is configured to send emails to raahim.nade@gmail.com when submitted. To make this work, you need to set up the email credentials in the `.env.local` file.

## Setting up Gmail App Password

For security reasons, Gmail requires you to use an "App Password" instead of your regular password when using nodemailer. Here's how to set it up:

1. Make sure you have 2-Step Verification enabled on your Google account
   - Go to your Google Account > Security > 2-Step Verification

2. Create an App Password
   - Go to your Google Account > Security > App passwords
   - Select "Mail" as the app and "Other" as the device (name it "ProBallArena")
   - Click "Generate"
   - Google will display a 16-character password

3. Update the `.env.local` file with your Gmail address and the generated App Password:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

4. Restart your Next.js development server for the changes to take effect:
   ```
   npm run dev
   ```

## Testing the Contact Form

After setting up the email credentials:

1. Fill out the contact form on the website
2. Submit the form
3. Check the email inbox of raahim.nade@gmail.com to verify that the email was received

## Troubleshooting

If emails are not being sent:

1. Check the server console for any error messages
2. Verify that your App Password is correct
3. Make sure your Gmail account allows less secure apps (if using a regular password)
4. Check if your Gmail account has any restrictions on sending emails

## Production Deployment

For production, consider using a transactional email service like SendGrid, Mailgun, or Amazon SES for better deliverability and monitoring.
