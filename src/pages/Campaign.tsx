/* ═══════════════════════════════════════════
   Campaign Page — Vanille verte
   ═══════════════════════════════════════════ */

import { useTranslation } from "@/contexts/LanguageContext"
import { Calendar, AlertTriangle, FileCheck } from "lucide-react"

export default function Campaign() {
  const t = useTranslation()
  const c = t.campaign

  return (
    <div className="animate-fade-in">
      <section className="border-b py-16 sm:py-20" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "var(--avm-fg)" }}><span className="text-gradient-gold">Vanille Verte</span></h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>{c.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="avm-section" style={{ backgroundColor: "var(--avm-bg)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--avm-border)" }}>
              <div className="flex items-center gap-3 mb-5"><Calendar className="h-5 w-5 text-[#2E4D3A]" /><h2 className="text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{c.datesTitle}</h2></div>
              <p className="text-sm sm:text-base" style={{ color: "var(--avm-fg-muted)" }}>{c.datesDesc}</p>
            </div>
            <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--avm-border)" }}>
              <div className="flex items-center gap-3 mb-5"><FileCheck className="h-5 w-5 text-[#2E4D3A]" /><h2 className="text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{c.rulesTitle}</h2></div>
              <ul className="space-y-3">
                {[c.rule1, c.rule2, c.rule3, c.rule4].map((rule) => (
                  <li key={rule} className="flex items-start gap-3"><div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#B89947] flex-shrink-0" /><p className="text-sm sm:text-base" style={{ color: "var(--avm-fg-muted)" }}>{rule}</p></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "rgba(184,153,71,0.3)", backgroundColor: "rgba(184,153,71,0.05)" }}>
              <div className="flex items-center gap-3 mb-4"><AlertTriangle className="h-5 w-5 text-[#B89947]" /><h2 className="text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{c.noticeTitle}</h2></div>
              <p className="text-sm sm:text-base" style={{ color: "var(--avm-fg-muted)" }}>{c.noticeDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
