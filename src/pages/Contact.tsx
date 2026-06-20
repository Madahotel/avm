/* ═══════════════════════════════════════════
   Contact Page — Formulaire et coordonnées
   ═══════════════════════════════════════════ */

import { useState } from "react"
import { useTranslation } from "@/contexts/LanguageContext"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const t = useTranslation()
  const c = t.contact
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }) }, 3000)
  }

  const fields = [
    { icon: MapPin, label: c.addressLabel, value: c.address },
    { icon: Phone, label: c.phoneLabel, value: c.phone },
    { icon: Mail, label: c.emailLabel, value: c.email },
    { icon: Clock, label: c.hoursLabel, value: c.hours },
  ]

  return (
    <div className="animate-fade-in">
      <section className="border-b py-16 sm:py-20" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "var(--avm-fg)" }}>{c.title}</h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>{c.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="avm-section" style={{ backgroundColor: "var(--avm-bg)" }}>
        <div className="avm-container">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{c.coordsTitle}</h2>
              <div className="space-y-4">
                {fields.map((f) => (
                  <div key={f.label} className="flex items-start gap-4 rounded-xl border p-4" style={{ borderColor: "var(--avm-border)" }}>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(46,77,58,0.1)" }}>
                      <f.icon className="h-4 w-4 text-[#2E4D3A]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--avm-fg-subtle)" }}>{f.label}</p>
                      <p className="mt-0.5 whitespace-pre-line text-sm" style={{ color: "var(--avm-fg)" }}>{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex h-48 items-center justify-center rounded-xl border" style={{ borderColor: "var(--avm-border)", backgroundColor: "var(--muted)" }}>
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8" style={{ color: "var(--avm-fg-subtle)" }} />
                  <p className="text-sm" style={{ color: "var(--avm-fg-muted)" }}>Antalaha, Région SAVA</p>
                  <p className="text-xs" style={{ color: "var(--avm-fg-subtle)" }}>Madagascar</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--avm-border)" }}>
              <h2 className="mb-6 text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{c.formTitle}</h2>
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-[#2E4D3A]" />
                  <p className="text-lg font-medium" style={{ color: "var(--avm-fg)" }}>{c.sentTitle}</p>
                  <p className="mt-1 text-sm" style={{ color: "var(--avm-fg-muted)" }}>{c.sentDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: c.nameLabel, type: "text", key: "name" },
                    { label: c.emailFieldLabel, type: "email", key: "email" },
                    { label: c.subjectLabel, type: "text", key: "subject" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider" style={{ color: "var(--avm-fg-muted)" }}>{f.label}</label>
                      <input type={f.type} required value={(form as Record<string, string>)[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none" style={{ borderColor: "var(--avm-border)", backgroundColor: "var(--avm-bg)", color: "var(--avm-fg)" }} />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider" style={{ color: "var(--avm-fg-muted)" }}>{c.messageLabel}</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none" style={{ borderColor: "var(--avm-border)", backgroundColor: "var(--avm-bg)", color: "var(--avm-fg)" }} />
                  </div>
                  <button type="submit" className="btn-avm-primary flex w-full items-center justify-center gap-2 py-3"><Send className="h-4 w-4" />{t.common.send}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
