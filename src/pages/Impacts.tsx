/* ═══════════════════════════════════════════
   Impacts Page — Chiffres clés
   ═══════════════════════════════════════════ */

import { useTranslation } from "@/contexts/LanguageContext"
import { Users, TreePine, DollarSign, BarChart3 } from "lucide-react"

export default function Impacts() {
  const t = useTranslation()
  const i = t.impacts

  const stats = [
    { icon: Users, value: 85000, suffix: "+", label: "Planteurs", color: "#2E4D3A" },
    { icon: TreePine, value: 600, suffix: "T", label: "Tonnes", color: "#B89947" },
    { icon: DollarSign, value: 140000, suffix: " MGA", label: "Prix/kg", color: "#2E4D3A" },
    { icon: BarChart3, value: 24, suffix: "", label: "Régions couvertes", color: "#B89947" },
  ]

  return (
    <div className="animate-fade-in">
      <section className="border-b py-16 sm:py-20" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "var(--avm-fg)" }}>Nos <span className="text-gradient-gold">Impacts</span></h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>{i.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="avm-section" style={{ backgroundColor: "var(--avm-bg)" }}>
        <div className="avm-container">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border p-5 text-center" style={{ borderColor: "var(--avm-border)" }}>
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${s.color}15` }}>
                  <s.icon className="h-5 w-5" style={{ color: s.color }} />
                </div>
                <p className="text-lg font-bold sm:text-xl" style={{ color: s.color }}>{s.value >= 1000 ? s.value.toLocaleString("fr-FR") : s.value}{s.suffix}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider" style={{ color: "var(--avm-fg-muted)" }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border p-6 sm:p-8" style={{ borderColor: "rgba(184,153,71,0.3)", backgroundColor: "rgba(184,153,71,0.03)" }}>
            <h2 className="mb-4 text-lg font-semibold sm:text-xl" style={{ color: "var(--avm-fg)" }}>Appel à Manifestation d'Intérêt n°001/AVM/2026</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[{ v: "140 000 MGA", l: "Vanille noire / kg" }, { v: "125 000 MGA", l: "Vanille rouge / kg" }, { v: "70 000 MGA", l: "Vanille cuts / kg" }].map((x) => (
                <div key={x.l} className="rounded-xl border p-4 text-center" style={{ borderColor: "var(--avm-border)" }}>
                  <p className="text-xl font-bold text-[#2E4D3A] sm:text-2xl">{x.v}</p>
                  <p className="mt-1 text-xs" style={{ color: "var(--avm-fg-muted)" }}>{x.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
