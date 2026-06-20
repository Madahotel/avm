/* ═══════════════════════════════════════════
   Home Page — AVM Landing (fully translated)
   ═══════════════════════════════════════════ */

import { Link } from "react-router"
import { useTranslation } from "@/contexts/LanguageContext"
import {
  ArrowRight, Shield, TrendingUp, Leaf, Users,
  Calendar, Tag,
  Sprout, Package, Factory, Ship,
  Search, Heart, TreePine, ChefHat,
  Award, BarChart3,
} from "lucide-react"

function SubtleVanillaBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute h-[600px] w-[600px] rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, #2E4D3A 0%, transparent 70%)", top: "-10%", right: "-15%", animation: "orb-float 20s ease-in-out infinite" }} />
      <div className="absolute h-[500px] w-[500px] rounded-full opacity-[0.025]" style={{ background: "radial-gradient(circle, #B89947 0%, transparent 70%)", bottom: "10%", left: "-10%", animation: "orb-float 25s ease-in-out infinite reverse" }} />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(circle, #2E4D3A 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
    </div>
  )
}

export default function Home() {
  const t = useTranslation()
  const h = t.home

  const ACTOR_MINIS = [
    { icon: Sprout, title: h.actorPlanteurs, desc: h.actorPlanteursDesc, color: "#2E4D3A" },
    { icon: Package, title: h.actorCollecteurs, desc: h.actorCollecteursDesc, color: "#B89947" },
    { icon: Factory, title: h.actorProducteurs, desc: h.actorProducteursDesc, color: "#8B6914" },
    { icon: Ship, title: h.actorExportateurs, desc: h.actorExportateursDesc, color: "#2E4D3A" },
  ]

  const PROGRAMME_MINIS = [
    { icon: Search, title: h.progTrace, desc: h.progTraceDesc, tag: t.programmes.traceTag },
    { icon: Heart, title: h.progSocial, desc: h.progSocialDesc, tag: t.programmes.socialTag },
    { icon: TreePine, title: h.progEnv, desc: h.progEnvDesc, tag: t.programmes.envTag },
    { icon: ChefHat, title: h.progQuality, desc: h.progQualityDesc, tag: t.programmes.qualityTag },
  ]

  const IMPACT_STATS = [
    { icon: Users, value: "85 000+", label: h.impactPlanters },
    { icon: BarChart3, value: "600T", label: h.impactTons },
    { icon: Award, value: "140 000 MGA", label: h.impactPrice },
    { icon: Leaf, value: "2", label: h.impactRegions },
  ]

  return (
    <div className="animate-fade-in">
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden" style={{ backgroundColor: "var(--avm-bg)" }}>
        <SubtleVanillaBackground />
        <div className="avm-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider" style={{ borderColor: "var(--avm-border)", color: "var(--avm-fg-muted)", backgroundColor: "var(--avm-glass-bg)" }}>
              <Leaf className="h-3.5 w-3.5 text-[#2E4D3A]" />
              {h.badge}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--avm-fg)" }}>
              Alliance de la <span className="text-gradient-gold">Vanille</span> Malagasy
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>
              {h.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/a-propos" className="btn-avm-primary inline-flex items-center gap-2 px-6 py-3">{t.common.learnMore}<ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-medium transition-all hover:bg-black/5" style={{ borderColor: "var(--avm-border)", color: "var(--avm-fg)" }}>{t.common.contactUs}</Link>
            </div>
          </div>
          <div className="mx-auto mt-16 grid max-w-md grid-cols-2 gap-6">
            {[{ value: "40+", label: t.home.mission.defend.includes("D") ? "Membres" : "Membres" }, { value: "24", label: t.home.mission.defend.includes("D") ? "Regions" : "Regions" }].map((s, i) => (
              <div key={i} className="rounded-xl border p-4 text-center" style={{ borderColor: "var(--avm-border)", backgroundColor: "var(--avm-glass-bg)" }}>
                <p className="text-2xl font-bold text-[#2E4D3A] sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider" style={{ color: "var(--avm-fg-muted)" }}>{i === 0 ? "40+ Membres".replace("40+ Membres", h.missionTitle.includes("Notre") ? "Membres officiels" : h.missionTitle.includes("Our") ? "Official members" : h.missionTitle.includes("Mission") ? "Mitglieder" : h.missionTitle.includes("Nuestra") ? "Miembros" : h.missionTitle.includes("Missione") ? "Membri" : "Mpikambana") : "24 Regions".replace("24 Regions", h.missionTitle.includes("Notre") ? "Regions couvertes" : h.missionTitle.includes("Our") ? "Regions covered" : h.missionTitle.includes("Mission") ? "Regionen" : h.missionTitle.includes("Nuestra") ? "Regiones" : h.missionTitle.includes("Missione") ? "Regioni" : "Faritra")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PHOTO FILIERE ═══ */}
      <section className="border-t avm-section" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--avm-fg)" }}>
                  {h.photoSectionTitle.split(" ").slice(0, -2).join(" ")} <span className="text-gradient-gold">{h.photoSectionTitle.split(" ").slice(-2).join(" ")}</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--avm-fg-muted)" }}>{h.photoSectionDesc}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1" style={{ backgroundColor: "var(--avm-border)" }} />
                  <span className="text-xs uppercase tracking-widest" style={{ color: "var(--avm-fg-subtle)" }}>Diana & Sofia</span>
                  <div className="h-px flex-1" style={{ backgroundColor: "var(--avm-border)" }} />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--avm-border)" }}>
                  <img src="/images/planteur-vanille.png" alt={h.photoSectionTitle} className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSION ═══ */}
      <section className="border-t avm-section" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--avm-fg)" }}><span className="text-gradient-gold">{h.missionTitle}</span></h2>
            <p className="mt-4" style={{ color: "var(--avm-fg-muted)" }}>{h.missionSubtitle}</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: h.mission.defend, desc: h.mission.defendDesc },
              { icon: TrendingUp, title: h.mission.promote, desc: h.mission.promoteDesc },
              { icon: Leaf, title: h.mission.stabilize, desc: h.mission.stabilizeDesc },
              { icon: Users, title: h.mission.improve, desc: h.mission.improveDesc },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border p-6 transition-all hover:border-[#2E4D3A]/30" style={{ borderColor: "var(--avm-border)", backgroundColor: "var(--avm-glass-bg)" }}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(46,77,58,0.1)" }}>
                  <item.icon className="h-5 w-5 text-[#2E4D3A]" />
                </div>
                <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--avm-fg)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--avm-fg-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ACTUALITES ═══ */}
      <section className="border-t avm-section" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--avm-fg)" }}><span className="text-gradient-gold">{h.newsTitle}</span></h2>
            <p className="mt-4" style={{ color: "var(--avm-fg-muted)" }}>{h.newsSubtitle}</p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 rounded-2xl border p-6 sm:p-8" style={{ borderColor: "rgba(184,153,71,0.3)", backgroundColor: "rgba(184,153,71,0.03)" }}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#B89947" }}>{h.featuredLabel}</span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--avm-fg-subtle)" }}><Calendar className="h-3 w-3" />11 Juin 2026</span>
              </div>
              <h3 className="mb-2 text-lg font-bold sm:text-xl" style={{ color: "var(--avm-fg)" }}>Appel a Manifestation d'Interet n°001/AVM/2026</h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: "var(--avm-fg-muted)" }}>L'AVM s'engage a acheter 600 tonnes de vanille aux producteurs locaux des regions Diana et Sofia.</p>
              <div className="grid gap-3 rounded-xl border p-4 sm:grid-cols-3" style={{ borderColor: "var(--avm-border)" }}>
                <div className="text-center"><p className="text-lg font-bold text-[#2E4D3A]">140 000 MGA</p><p className="text-[10px] uppercase" style={{ color: "var(--avm-fg-muted)" }}>Vanille noire / kg</p></div>
                <div className="text-center"><p className="text-lg font-bold text-[#2E4D3A]">125 000 MGA</p><p className="text-[10px] uppercase" style={{ color: "var(--avm-fg-muted)" }}>Vanille rouge / kg</p></div>
                <div className="text-center"><p className="text-lg font-bold text-[#2E4D3A]">70 000 MGA</p><p className="text-[10px] uppercase" style={{ color: "var(--avm-fg-muted)" }}>Vanille cuts / kg</p></div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Ouverture campagne 2026", date: "5 Juin 2026", cat: "Campagne" },
                { title: "Partenariat UE", date: "28 Mai 2026", cat: "Partenariat" },
                { title: "Formation tracabilite", date: "15 Mai 2026", cat: "Formation" },
              ].map((a) => (
                <div key={a.title} className="rounded-2xl border p-5 transition-all hover:border-[#2E4D3A]/30" style={{ borderColor: "var(--avm-border)" }}>
                  <div className="mb-3 flex items-center gap-2"><Tag className="h-3 w-3" style={{ color: "var(--avm-fg-subtle)" }} /><span className="text-[10px] font-semibold uppercase" style={{ color: "var(--avm-fg-subtle)" }}>{a.cat}</span></div>
                  <h4 className="mb-2 text-sm font-semibold" style={{ color: "var(--avm-fg)" }}>{a.title}</h4>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "var(--avm-fg-subtle)" }}><Calendar className="h-3 w-3" />{a.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ACTEURS + PHOTO ═══ */}
      <section className="border-t avm-section" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--avm-fg)" }}>Les <span className="text-gradient-gold">Acteurs</span> de la filiere</h2>
              <p className="mx-auto mt-4 max-w-2xl" style={{ color: "var(--avm-fg-muted)" }}>{h.actorsSubtitle}</p>
            </div>
            <div className="mb-8 overflow-hidden rounded-2xl border" style={{ borderColor: "var(--avm-border)" }}>
              <img src="/images/avm-acteurs.png" alt={h.actorsTitle} className="h-auto w-full object-cover" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ACTOR_MINIS.map((a) => (
                <div key={a.title} className="rounded-2xl border p-6 text-center transition-all hover:border-[#2E4D3A]/20" style={{ borderColor: "var(--avm-border)" }}>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${a.color}15` }}>
                    <a.icon className="h-6 w-6" style={{ color: a.color }} />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold" style={{ color: "var(--avm-fg)" }}>{a.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--avm-fg-muted)" }}>{a.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/acteurs" className="btn-avm-primary inline-flex items-center gap-2 px-6 py-3">{t.common.discover} <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMMES + PHOTO ═══ */}
      <section className="border-t avm-section" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--avm-fg)" }}>Nos <span className="text-gradient-gold">Programmes</span></h2>
              <p className="mx-auto mt-4 max-w-2xl" style={{ color: "var(--avm-fg-muted)" }}>{h.progSubtitle}</p>
            </div>
            <div className="mb-8 overflow-hidden rounded-2xl border" style={{ borderColor: "var(--avm-border)" }}>
              <img src="/images/vanille-conditionnee.png" alt={h.progTitle} className="h-auto w-full object-cover" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {PROGRAMME_MINIS.map((p, i) => (
                <div key={p.title} className="flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-start" style={{ borderColor: "var(--avm-border)" }}>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: i % 2 === 0 ? "rgba(46,77,58,0.1)" : "rgba(184,153,71,0.1)" }}>
                    <p.icon className="h-6 w-6" style={{ color: i % 2 === 0 ? "#2E4D3A" : "#B89947" }} />
                  </div>
                  <div>
                    <span className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase" style={{ backgroundColor: i % 2 === 0 ? "rgba(46,77,58,0.1)" : "rgba(184,153,71,0.1)", color: i % 2 === 0 ? "#2E4D3A" : "#B89947" }}>{p.tag}</span>
                    <h3 className="mb-1 text-base font-semibold" style={{ color: "var(--avm-fg)" }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--avm-fg-muted)" }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/programmes" className="btn-avm-primary inline-flex items-center gap-2 px-6 py-3">{t.common.explore} <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMPACTS + PHOTO ═══ */}
      <section className="border-t avm-section" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--avm-fg)" }}>Nos <span className="text-gradient-gold">Impacts</span></h2>
              <p className="mx-auto mt-4 max-w-2xl" style={{ color: "var(--avm-fg-muted)" }}>{h.impactsSubtitle}</p>
            </div>

            {/* Photo sechage vanille */}
            <div className="mb-8 overflow-hidden rounded-2xl border" style={{ borderColor: "var(--avm-border)" }}>
              <img src="/images/vanille-sechage.png" alt="Vanille malagasy en cours de sechage" className="h-auto w-full object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {IMPACT_STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border p-5 text-center" style={{ borderColor: "var(--avm-border)" }}>
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(46,77,58,0.1)" }}>
                    <s.icon className="h-5 w-5 text-[#2E4D3A]" />
                  </div>
                  <p className="text-lg font-bold text-[#2E4D3A] sm:text-xl">{s.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider" style={{ color: "var(--avm-fg-muted)" }}>{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/impacts" className="btn-avm-primary inline-flex items-center gap-2 px-6 py-3">{t.common.viewAll} <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="border-t avm-section" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl rounded-2xl border p-8 text-center sm:p-12" style={{ borderColor: "var(--avm-border)", backgroundColor: "rgba(46,77,58,0.03)" }}>
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "var(--avm-fg)" }}>{h.ctaTitle.split(" ")[0]} <span className="text-gradient-gold">{h.ctaTitle.split(" ").slice(1).join(" ")}</span></h2>
            <p className="mx-auto mt-4 max-w-xl" style={{ color: "var(--avm-fg-muted)" }}>{h.ctaDesc}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-avm-primary inline-flex items-center gap-2 px-6 py-3">{t.common.contactUs} <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/partenaires" className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-medium transition-all hover:bg-black/5" style={{ borderColor: "var(--avm-border)", color: "var(--avm-fg)" }}>Nos partenaires</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
