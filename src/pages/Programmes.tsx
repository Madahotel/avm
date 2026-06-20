/* ═══════════════════════════════════════════
   Programmes Page — 4 piliers qualité
   ═══════════════════════════════════════════ */

import { useTranslation } from "@/contexts/LanguageContext"
import { Search, Heart, TreePine, ChefHat } from "lucide-react"

export default function Programmes() {
  const t = useTranslation()
  const p = t.programmes

  const PROGRAMMES = [
    { icon: Search, title: p.traceTitle, desc: p.traceDesc, tag: p.traceTag },
    { icon: Heart, title: p.socialTitle, desc: p.socialDesc, tag: p.socialTag },
    { icon: TreePine, title: p.envTitle, desc: p.envDesc, tag: p.envTag },
    { icon: ChefHat, title: p.qualityTitle, desc: p.qualityDesc, tag: p.qualityTag },
  ]

  return (
    <div className="animate-fade-in">
      <section className="border-b py-16 sm:py-20" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "var(--avm-fg)" }}>Nos <span className="text-gradient-gold">Programmes</span></h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>{p.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="avm-section" style={{ backgroundColor: "var(--avm-bg)" }}>
        <div className="avm-container">
          <div className="mx-auto grid max-w-5xl gap-6">
            {PROGRAMMES.map((prog, i) => (
              <div key={prog.title} className="flex flex-col gap-6 rounded-2xl border p-6 sm:flex-row sm:items-start sm:p-8" style={{ borderColor: "var(--avm-border)" }}>
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: i % 2 === 0 ? "rgba(46,77,58,0.1)" : "rgba(184,153,71,0.1)" }}>
                  <prog.icon className="h-7 w-7" style={{ color: i % 2 === 0 ? "#2E4D3A" : "#B89947" }} />
                </div>
                <div className="flex-1">
                  <span className="mb-2 inline-block rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase" style={{ backgroundColor: i % 2 === 0 ? "rgba(46,77,58,0.1)" : "rgba(184,153,71,0.1)", color: i % 2 === 0 ? "#2E4D3A" : "#B89947" }}>{prog.tag}</span>
                  <h2 className="mb-2 text-lg font-semibold sm:text-xl" style={{ color: "var(--avm-fg)" }}>{prog.title}</h2>
                  <p className="text-sm sm:text-base" style={{ color: "var(--avm-fg-muted)" }}>{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
