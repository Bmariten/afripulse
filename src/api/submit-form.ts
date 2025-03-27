import nodemailer from 'nodemailer';

interface FormRequest {
  name: string;
  email: string;
  phone: string;
  location?: string;
  background?: string;
  goals?: string;
}

interface FormResponse {
  message: string;
  error?: string;
  details?: string;
}

export default async function handler(
  req: { method: string; body: FormRequest }, 
  res: { 
    status: (code: number) => { 
      json: (data: FormResponse) => void 
    }
  }
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Log environment variables (remove in production)
    console.log('SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      // Don't log the password
    });

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      debug: true, // Enable debug logging
      logger: true, // Enable built-in logger
      tls: {
        rejectUnauthorized: false // Sometimes needed for self-signed certificates
      }
    });

    // Test SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP Connection verified successfully');
    } catch (verifyError: any) {
      console.error('SMTP Connection verification failed:', verifyError);
      return res.status(500).json({ 
        message: 'Failed to connect to email server',
        error: verifyError.message 
      });
    }

    const { name, email, phone, location, background, goals } = req.body;

    // Log the form data (remove in production)
    console.log('Form submission data:', {
      name,
      email,
      phone,
      location,
      background,
      goals
    });

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'New AfriPulse Program Inquiry',
      html: `
        <h2>New Program Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location || 'Not provided'}</p>
        <h3>Background:</h3>
        <p>${background || 'Not provided'}</p>
        <h3>Goals:</h3>
        <p>${goals || 'Not provided'}</p>
      `,
    };

    // Send admin notification email
    try {
      const adminInfo = await transporter.sendMail(mailOptions);
      console.log('Admin notification sent:', adminInfo.response);
    } catch (adminEmailError: any) {
      console.error('Failed to send admin notification:', adminEmailError);
      throw adminEmailError;
    }

    // Send confirmation email to applicant
    const confirmationMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for your AfriPulse Application',
      html: `
        <h2>Thank you for applying to AfriPulse!</h2>
        <p>Dear ${name},</p>
        <p>We have received your application and will review it within 24 hours.</p>
        <p>In the meantime, you can join our WhatsApp group to connect with other applicants:</p>
        <p><a href="https://wa.me/254116330665">Join WhatsApp Group</a></p>
        <p>Best regards,<br>The AfriPulse Team</p>
      `,
    };

    try {
      const confirmInfo = await transporter.sendMail(confirmationMailOptions);
      console.log('Confirmation email sent:', confirmInfo.response);
    } catch (confirmEmailError: any) {
      console.error('Failed to send confirmation email:', confirmEmailError);
      // Don't throw here - we still want to return success since admin notification was sent
    }

    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error: any) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      message: 'Error submitting form',
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
} 