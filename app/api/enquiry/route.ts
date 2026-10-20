import { NextResponse } from "next/server";
import { confirmToVisitor, emailConfigured, notifyTeam, type EnquiryInput } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function validate(body: unknown): { ok: true; data: EnquiryInput } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) return { ok: false, error: "Invalid request." };
  const b = body as Record<string, unknown>;
  const s = (k: string) => (typeof b[k] === "string" ? (b[k] as string).trim() : "");
  const data: EnquiryInput = {
    name: s("name"),
    phone: s("phone"),
    email: s("email"),
    service: s("service"),
    message: s("message"),
  };
  if (!data.name) return { ok: false, error: "Please enter your name." };
  if (!/^[+\d][\d\s()-]{6,}$/.test(data.phone)) return { ok: false, error: "Please enter a valid phone number." };
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) return { ok: false, error: "Please enter a valid email address." };
  if (data.message.length < 10) return { ok: false, error: "Please tell us a little about the project." };
  if (data.name.length > 120 || data.phone.length > 40 || data.email.length > 200 || data.service.length > 120 || data.message.length > 4000) {
    return { ok: false, error: "One of the fields is too long." };
  }
  return { ok: true, data };
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing
  if (typeof body === "object" && body !== null && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const parsed = validate(body);
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });

  // Local development with no email settings: keep the enquiry visible in the terminal
  if (!emailConfigured()) {
    console.log("[enquiry] email not configured, enquiry was:", parsed.data);
    return NextResponse.json({ ok: true });
  }

  const sent = await notifyTeam(parsed.data);
  if (!sent) {
    return NextResponse.json({ error: "We could not send your enquiry." }, { status: 500 });
  }

  // Confirmation to the visitor runs in the background and never blocks the response
  void confirmToVisitor(parsed.data).catch((e) => console.error("[enquiry] confirmation failed", e));

  return NextResponse.json({ ok: true });
}