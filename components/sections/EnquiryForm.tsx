"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const serviceOptions = [...services.map((s) => s.name), "Products and equipment supply", "Other"];

export function EnquiryForm({ defaultService, defaultProduct }: { defaultService?: string; defaultProduct?: string }) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");
  const initialService = defaultService && serviceOptions.includes(defaultService) ? defaultService : "";
  const initialMessage = defaultProduct ? `I would like a quote for: ${defaultProduct}.\n` : "";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!/^[+\d][\d\s()-]{6,}$/.test(data.phone?.trim() ?? "")) next.phone = "Please enter a valid phone number.";
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Please enter a valid email address.";
    if ((data.message?.trim().length ?? 0) < 10) next.message = "Please tell us a little about the project.";
    setErrors(next);
    if (Object.keys(next).length) {
      (form.querySelector("[aria-invalid='true']") as HTMLElement | null)?.focus();
      return;
    }
    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error(((await res.json().catch(() => null)) as { error?: string } | null)?.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-[6px] border border-line bg-white p-8 md:p-10">
        <CheckCircle2 aria-hidden className="h-10 w-10 text-brand-mid" />
        <h2 className="mt-5 text-h3">Thank you for contacting ELESSY Nigeria Limited.</h2>
        <p className="mt-3 text-steel">
          We have received your enquiry, and a member of our team will review it and respond within one business day.
          For urgent matters, please call us on {site.phone}.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>Send another enquiry</Button>
      </div>
    );
  }

  const busy = status === "submitting";
  const err = (k: keyof Errors) => (errors[k] ? <p id={`${uid}-${k}-err`} className="mt-1.5 text-[14px] font-semibold text-[#a3321d]">{errors[k]}</p> : null);
  const aria = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${uid}-${k}-err` : undefined } as const);
  const label = "mb-2 block text-[14px] font-bold font-display";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[6px] border border-line bg-white p-6 md:p-10" aria-busy={busy}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={label}>Full name</label>
          <input id={`${uid}-name`} name="name" type="text" autoComplete="name" required disabled={busy} placeholder="Your name" className="field" {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={label}>Phone</label>
          <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required disabled={busy} placeholder="0800 000 0000" className="field" {...aria("phone")} />
          {err("phone")}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor={`${uid}-email`} className={label}>Email <span className="font-normal text-steel">(optional)</span></label>
        <input id={`${uid}-email`} name="email" type="email" inputMode="email" autoComplete="email" disabled={busy} placeholder="you@company.com" className="field" {...aria("email")} />
        {err("email")}
      </div>
      <div className="mt-6">
        <label htmlFor={`${uid}-service`} className={label}>Service you need</label>
        <select id={`${uid}-service`} name="service" defaultValue={initialService} disabled={busy} className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235B6B66%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat pr-12">
          <option value="">Select a service</option>
          {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="mt-6">
        <label htmlFor={`${uid}-message`} className={label}>Message</label>
        <textarea id={`${uid}-message`} name="message" rows={5} required disabled={busy} defaultValue={initialMessage} placeholder="Tell us about the project, location and timeline" className="field min-h-[140px] py-3" {...aria("message")} />
        {err("message")}
      </div>
      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {status === "error" && <p role="alert" className="mt-6 rounded-[4px] bg-[#fbeae6] px-4 py-3 text-[15px] font-semibold text-[#a3321d]">{serverError} Please try again or call {site.phone}.</p>}
      <Button type="submit" disabled={busy} className="mt-8 w-full min-h-[58px] text-[18px]">
        {busy ? (<><Loader2 aria-hidden className="h-5 w-5 animate-spin" />Sending&hellip;</>) : "Send enquiry"}
      </Button>
      <a href={`${site.whatsappHref}?text=${encodeURIComponent(
          "Hello ELESSY, I am interested in your engineering and construction services. Please provide more information."
        )}`} target="_blank" rel="noopener noreferrer" className="mt-5 flex min-h-[44px] items-center justify-center gap-2 font-display text-[15px] font-bold text-brand hover:underline">
        <MessageCircle aria-hidden className="h-5 w-5" />Prefer WhatsApp? Message us directly
      </a>
    </form>
  );
}
