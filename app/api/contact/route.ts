// /app/api/contact/route.ts
import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs'; // not browser version

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    console.log("📨 Sending email with:", { name, email, message });

    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        from_name: name,
        from_email: email,
        message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY, // Optional, safer with this
      }
    );

    console.log("✅ EmailJS response:", result);

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("❌ EmailJS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to send message",
      },
      { status: 500 }
    );
  }
}