import nodemailer, { type Transporter } from "nodemailer";
import { site } from "@/lib/site";

export type EnquiryInput = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

// Sends through SMTP (Gmail app password) or, if configured instead, the Resend API.
const smtpConfigured = () => Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
const resendConfigured = () => Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);

export const emailConfigured = () =>
  Boolean(process.env.ENQUIRY_TO_EMAIL && (smtpConfigured() || resendConfigured()));

let transporter: Transporter | undefined;
function getTransporter(): Transporter {
  transporter ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: (process.env.SMTP_PORT ?? "465") === "465",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return transporter;
}

type Mail = { to: string; subject: string; text: string; replyTo?: string };

async function send(m: Mail): Promise<boolean> {
  try {
    if (smtpConfigured()) {
      const from = process.env.EMAIL_FROM ?? `${site.short} Website <${process.env.SMTP_USER}>`;
      await getTransporter().sendMail({
        from,
        to: m.to,
        subject: m.subject,
        text: m.text,
        replyTo: m.replyTo,
      });
      return true;
    }
    if (resendConfigured()) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM,
          to: [m.to],
          subject: m.subject,
          text: m.text,
          ...(m.replyTo ? { reply_to: m.replyTo } : {}),
        }),
      });
      if (!res.ok) console.error("[email] Resend failed", res.status, await res.text().catch(() => ""));
      return res.ok;
    }
  } catch (e) {
    console.error("[email] send failed", e);
  }
  return false;
}

/** Tells ELESSY about a new enquiry. Reply-To is the visitor's email when given. */
export async function notifyTeam(d: EnquiryInput): Promise<boolean> {
  const to = process.env.ENQUIRY_TO_EMAIL;
  if (!to) return false;
  const text = [
    "NEW CLIENT ENQUIRY",
    "",
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Email: ${d.email || "not given"}`,
    `Service: ${d.service || "not specified"}`,
    "",
    d.message,
  ].join("\n");
  return send({
    to,
    subject: `New enquiry: ${d.service || "General"} from ${d.name}`,
    text,
    replyTo: d.email || undefined,
  });
}

/** Optional confirmation to the visitor (only sent if they gave an email). */
export async function confirmToVisitor(d: EnquiryInput): Promise<boolean> {
  if (!d.email) return false;
  const text = [
    `Hello ${d.name},`,
    "",
    `Thank you for contacting ${site.name}. We have received your enquiry and an engineer will respond with next steps.`,
    `For anything urgent, call ${site.phone}.`,
    "",
    site.name,
  ].join("\n");
  return send({ to: d.email, subject: `We received your enquiry | ${site.name}`, text });
}