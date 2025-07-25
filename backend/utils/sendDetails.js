const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Mailer setup error:", err.message);
  } else {
    console.log("✅ Mailer is ready");
  }
});

const sendDetailsEmail = async (to, name, email, password, position, role, regards) => {
  const loginUrl = `${process.env.CLIENT_URL}/login`;

  const html = `
    <div style="font-family: Arial; padding: 20px;">
      <h2>Hello ${name},</h2>
      <p>You have been added to the system with the following credentials:</p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Password:</strong> ${password}</li>
        <li><strong>Position:</strong> ${position}</li>
        <li><strong>Role:</strong> ${role}</li>
      </ul>
      <p>Please login at: <a href="${loginUrl}">${loginUrl}</a></p>
      <p>Regards,<br/>${regards}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"${regards}" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Credentials for Access",
    html,
  });

  console.log(`✅ Email sent to ${to}`);
};

module.exports = { sendDetailsEmail };
