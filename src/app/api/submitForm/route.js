import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import ExcelJS from "exceljs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.json(); // Get submitted form data

    // Excel file path
    const filePath = path.join(process.cwd(), "private", "contacts.xlsx");

    let workbook;
    if (fs.existsSync(filePath)) {
      // Load existing Excel file
      workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(filePath);
    } else {
      // Create a new Excel file if it doesn't exist
      workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Contacts");
      worksheet.addRow(["Name", "Phone", "Project", "Message", "Date"]); // Add headers
    }

    const worksheet = workbook.getWorksheet("Contacts");

    // Append new data
    worksheet.addRow([
      formData.name,
      formData.phone,
      formData.project,
      formData.message,
      new Date().toLocaleString(),
    ]);

    // Save Excel file
    await workbook.xlsx.writeFile(filePath);

    // Send an email to the company owner
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT || 465,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD, // Use App Password
      },
    });

    await transporter.sendMail({
      from: `"RR Builder Contact Form" <${process.env.EMAIL_USERNAME}>`,
      to: "rrbuilder.mangalore@gmail.com", // Company owner's email
      subject: "Great News! A Potential Client Just Reached Out",
      html: `
        <p>Hello,</p>
    
        <p>You’ve just received a new contact inquiry! Someone is interested in your services.</p>
    
        <p><strong>Here are the details:</strong></p>
    
        <table border="0" cellpadding="5" cellspacing="0">
          <tr>
            <td><strong>Name:</strong></td>
            <td>${formData.name}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${formData.phone}</td>
          </tr>
          <tr>
            <td><strong>Project of Interest:</strong></td>
            <td>${formData.project}</td>
          </tr>
          <tr>
            <td><strong>Message:</strong></td>
            <td>${formData.message}</td>
          </tr>
          <tr>
            <td><strong>Date:</strong></td>
            <td>${new Date().toLocaleString()}</td>
          </tr>
        </table>
    
        <p>This could be the start of something great! Be sure to follow up soon.</p>
    
        <p><strong>Best regards,</strong><br>RR Builder</p>
      `,
    });
    

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error saving form data:", error);
    return NextResponse.json(
      { error: "Failed to save form data." },
      { status: 500 },
    );
  }
}
