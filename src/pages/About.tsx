/* ═══════════════════════════════════════════
   About Page — À propos (fully translated)
   ═══════════════════════════════════════════ */

import { useTranslation } from "@/contexts/LanguageContext"
import { Building2, FileText, Users, MapPin } from "lucide-react"

export default function About() {
  const t = useTranslation()
  const a = t.about

  return (
    <div className="animate-fade-in">
      <section className="border-b py-16 sm:py-20" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "var(--avm-fg)" }}>À <span className="text-gradient-gold">propos</span> de l'AVM</h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>{a.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="avm-section" style={{ backgroundColor: "var(--avm-bg)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--avm-border)" }}>
              <div className="flex items-center gap-3 mb-4"><Building2 className="h-5 w-5 text-[#2E4D3A]" /><h2 className="text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{a.historyTitle}</h2></div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--avm-fg-muted)" }}>{a.historyDesc}</p>
            </div>
            <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--avm-border)" }}>
              <div className="flex items-center gap-3 mb-4"><FileText className="h-5 w-5 text-[#2E4D3A]" /><h2 className="text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{a.legalTitle}</h2></div>
              <div className="space-y-3">
                {[a.decree1, a.decree2].map((d) => (
                  <div key={d} className="flex items-start gap-3 rounded-lg border p-4" style={{ borderColor: "var(--avm-border)" }}>
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-[#B89947] flex-shrink-0" />
                    <p className="text-sm sm:text-base" style={{ color: "var(--avm-fg-muted)" }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--avm-border)" }}>
              <div className="flex items-center gap-3 mb-4"><Users className="h-5 w-5 text-[#2E4D3A]" /><h2 className="text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{a.governanceTitle}</h2></div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--avm-fg-muted)" }}>{a.governanceDesc}</p>
            </div>
            <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--avm-border)" }}>
              <div className="flex items-center gap-3 mb-4"><MapPin className="h-5 w-5 text-[#2E4D3A]" /><h2 className="text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{a.locationTitle}</h2></div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--avm-fg-muted)" }}>{a.locationDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
