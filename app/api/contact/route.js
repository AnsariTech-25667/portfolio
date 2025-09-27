import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendKey = process.env.RESEND_API_KEY;
const to = process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL;
const from = process.env.NEXT_PUBLIC_CONTACT_FROM_EMAIL;

export async function POST(req) {
  try {
    if (!resendKey || !to || !from) {
      return NextResponse.json(
        { ok: false, error: "Email not configured" },
        { status: 400 }
      );
    }
    
    const body = await req.json();
    
    // Handle configuration test
    if (body.test) {
      return NextResponse.json({ ok: true, configured: true });
    }
    
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 422 }
      );
    }

    const resend = new Resend(resendKey);
    const subject = `Portfolio contact — ${name}`;
    const html = `
      <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 8px">New message from portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p style="white-space:pre-wrap;margin-top:12px">${message}</p>
      </div>
    `;

    await resend.emails.send({ to, from, subject, html });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}