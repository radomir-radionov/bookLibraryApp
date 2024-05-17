import nodemailer from 'nodemailer';

const sendMail = async (email, code) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Forgot password',
      text: `Восстановление пароля по ссылке ${process.env.CLIENT_URL}#/forgot-pass?code=${code}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (e) {
    console.error('Error sending email:', e);
  }
};

export default sendMail;
