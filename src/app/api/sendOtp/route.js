import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import otpStore from "@/app/utils/otpStore"; // Import global OTP store

export async function POST(req) {
  try {
    const { email } = await req.json();
    const COMPANY_EMAIL = process.env.COMPANY_EMAIL; // Get authorized email

    if (email !== COMPANY_EMAIL) {
      return NextResponse.json(
        { error: "Unauthorized Email" },
        { status: 403 }
      );
    }

    const OTP = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    const expiresAt = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes

    // ✅ Store OTP with expiry time
    otpStore.set(email, { OTP, expiresAt });

    console.log(`Generated OTP for ${email}: ${OTP}`); // ✅ Debugging Log

    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT || 465, // Use 465 for secure, 587 for non-secure
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD, // Use App Password
      },
    });

    await transporter.sendMail({
      from: `"RR Builder" <${process.env.EMAIL_USERNAME}>`,
      to: email,
      subject: "Your OTP for Downloading User Data",
      html: `
        <p>You have requested to download the user contact details from your database.</p>
    
        <p><strong>To proceed, please use the following One-Time Password (OTP):</strong></p>
    
        <p style="font-size: 20px; font-weight: bold; color: #D32F2F;">${OTP}</p>
    
        <ul>
          <li><strong>This OTP is valid for only 5 minutes.</strong></li>
          <li><strong>Do not share it with anyone for security reasons.</strong></li>
        </ul>
    
        <p>If you did not request this, please ignore this email.</p>
    
        <p><strong>Best regards,</strong><br>RR Builder</p>
      `,
    });
    

    return NextResponse.json({ message: "OTP Sent Successfully!" });
  } catch (error) {
    console.error("OTP Error:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
