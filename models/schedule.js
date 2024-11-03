const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Setup nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Schedule a check every hour
cron.schedule('0 * * * *', async () => {
  // Check inventory levels and send email if below threshold
});
