/* ═══════════════════════════════════════════
   Partners Page — Partenaires AVM
   ═══════════════════════════════════════════ */

import { useState } from "react"
import { useTranslation } from "@/contexts/LanguageContext"
import { Handshake, Building2, Globe, Users, Leaf, Sprout } from "lucide-react"

const CATS: Record<string, { items: string[]; icon: typeof Handshake; bientot?: boolean }> = {
  Institution: { icon: Building2, items: ["Présidence de la Refondation de la République de Madagascar", "Ministère du Commerce", "Ministère de l'Agriculture"] },
  Collectivité: { icon: Leaf, items: ["Région Diana", "Région Sofia", "Région SAVA"] },
  Filière: { icon: Users, items: ["Coopératives Vanille", "Exportateurs de la SAVA, Diana et Sofia", "Planteurs SAVA, Diana, Sofia", "Producteurs SAVA, Diana, Sofia", "Collecteurs SAVA, Diana, Sofia"] },
  International: { icon: Globe, items: [], bientot: true },
  ONU: { icon: Handshake, items: [], bientot: true },
  ONG: { icon: Sprout, items: [], bientot: true },
}

const ORDER = ["Institution", "Collectivité", "Filière", "International", "ONU", "ONG"]
const ICONS: Record<string, typeof Handshake> = { Institution: Building2, Collectivité: Leaf, Filière: Users, International: Globe, ONU: Handshake, ONG: Sprout }

export default function Partners() {
  const t = useTranslation()
  const p = t.partners
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="animate-fade-in">
      <section className="border-b py-16 sm:py-20" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "var(--avm-fg)" }}>Nos <span className="text-gradient-gold">Partenaires</span></h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>{p.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="avm-section" style={{ backgroundColor: "var(--avm-bg)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-5xl space-y-6">
            {ORDER.map((name) => {
              const c = CATS[name]
              const Icon = ICONS[name]
              const open = active === name
              return (
                <div key={name} className="rounded-2xl border" style={{ borderColor: "var(--avm-border)" }}>
                  <button onClick={() => setActive(open ? null : name)} className="flex w-full items-center justify-between px-6 py-5 sm:px-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: c.bientot ? "rgba(150,150,150,0.1)" : "rgba(46,77,58,0.1)" }}>
                        <Icon className="h-5 w-5" style={{ color: c.bientot ? "var(--avm-fg-subtle)" : "#2E4D3A" }} />
                      </div>
                      <span className="text-base font-semibold sm:text-lg" style={{ color: "var(--avm-fg)" }}>{(p as Record<string, string>)[name.toLowerCase()] || name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {c.bientot && <span className="rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase" style={{ backgroundColor: "rgba(184,153,71,0.15)", color: "#B89947" }}>{p.bientot}</span>}
                      <span className="text-lg transition-transform duration-300" style={{ color: "var(--avm-fg-subtle)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>&#x25BC;</span>
                    </div>
                  </button>
                  <div className="overflow-hidden transition-all" style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}>
                    <div className="border-t px-6 pb-6 pt-4 sm:px-8" style={{ borderColor: "var(--avm-border)" }}>
                      {c.bientot ? <p className="text-sm italic" style={{ color: "var(--avm-fg-subtle)" }}>{p.bientot} — {name}</p> : (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {c.items.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-lg border px-4 py-3" style={{ borderColor: "var(--avm-border)" }}>
                              <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B89947]" />
                              <span className="text-sm" style={{ color: "var(--avm-fg-muted)" }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
