// API Route: pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { option } = req.body;
    
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yourcompanyemail@gmail.com", // Replace with company email
        pass: "yourpassword", // Replace with app password
      },
    });

    let mailOptions = {
      from: "yourcompanyemail@gmail.com",
      to: "owneremail@example.com", // Replace with owner's email
      subject: "New Chatbot Inquiry",
      text: `User selected: ${option}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Email failed to send" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}