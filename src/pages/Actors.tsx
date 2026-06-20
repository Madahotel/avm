/* ═══════════════════════════════════════════
   Actors Page — Les acteurs de la filière
   ═══════════════════════════════════════════ */

import { useTranslation } from "@/contexts/LanguageContext"
import { Sprout, Package, Factory, Ship } from "lucide-react"

export default function Actors() {
  const t = useTranslation()
  const a = t.actors

  const ACTORS = [
    { icon: Sprout, title: a.planteurs, desc: a.planteursDesc, color: "#2E4D3A" },
    { icon: Package, title: a.collecteurs, desc: a.collecteursDesc, color: "#B89947" },
    { icon: Factory, title: a.producteurs, desc: a.producteursDesc, color: "#8B6914" },
    { icon: Ship, title: a.exportateurs, desc: a.exportateursDesc, color: "#2E4D3A" },
  ]

  return (
    <div className="animate-fade-in">
      <section className="border-b py-16 sm:py-20" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "var(--avm-fg)" }}>Les <span className="text-gradient-gold">Acteurs</span> de la filière</h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>{a.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="avm-section" style={{ backgroundColor: "var(--avm-bg)" }}>
        <div className="avm-container">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {ACTORS.map((actor) => (
              <div key={actor.title} className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--avm-border)" }}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: `${actor.color}15` }}>
                  <actor.icon className="h-7 w-7" style={{ color: actor.color }} />
                </div>
                <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--avm-fg)" }}>{actor.title}</h2>
                <p className="text-sm sm:text-base" style={{ color: "var(--avm-fg-muted)" }}>{actor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
