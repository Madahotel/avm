/* ═══════════════════════════════════════════
   News Page — Actualités AVM
   ═══════════════════════════════════════════ */

import { Calendar, Tag, Leaf } from "lucide-react"

const ARTICLES = [
  {
    id: "ami-001-2026",
    title: "Appel \u00E0 Manifestation d'Int\u00E9r\u00EAt n\u00B0001/AVM/2026",
    date: "11 Juin 2026",
    category: "AMI",
    featured: true,
    excerpt: "L'AVM s'engage \u00E0 acheter 600 tonnes de vanille aux producteurs locaux des r\u00E9gions Diana et Sofia. Prix de rachat : 140 000 MGA/kg (Vanille noire), 125 000 MGA/kg (Vanille rouge), 70 000 MGA/kg (Vanille cuts).",
    details: [
      "L'AVM s'engage \u00E0 acheter 600 tonnes de vanille aux producteurs locaux des r\u00E9gions Diana et Sofia.",
      "Prix de rachat : 140 000 MGA/kg (Vanille noire), 125 000 MGA/kg (Vanille rouge), 70 000 MGA/kg (Vanille cuts).",
      "Condition : les producteurs doivent s'engager \u00E0 acheter aupr\u00E8s des planteurs la vanille verte longue \u00E0 10 000 MGA/kg et la vanille verte courte \u00E0 5 000 MGA/kg lors de la campagne.",
    ],
    prices: [
      { label: "Vanille noire / kg", value: "140 000 MGA" },
      { label: "Vanille rouge / kg", value: "125 000 MGA" },
      { label: "Vanille cuts / kg", value: "70 000 MGA" },
    ],
  },
  {
    id: "declaration-stock-2026",
    title: "D\u00E9claration de stock de vanille",
    date: "12 Juin 2026",
    category: "Obligation l\u00E9gale",
    featured: false,
    excerpt: "Les exportateurs et producteurs locaux sont tenus de d\u00E9clarer leur stock de vanille pr\u00E9par\u00E9e de la campagne 2025-2026.",
    details: [
      "Les exportateurs et producteurs locaux sont tenus de d\u00E9clarer leur stock de vanille pr\u00E9par\u00E9e de la campagne 2025-2026.",
      "Cette d\u00E9claration est obligatoire pour tous les acteurs de la fili\u00E8re d\u00E9tenant un stock de vanille pr\u00E9par\u00E9e (noire, rouge ou cuts).",
      "Le non-respect de cette obligation expose les contrevenants \u00E0 des sanctions administratives conform\u00E9ment \u00E0 la l\u00E9gislation en vigueur.",
      "Les d\u00E9clarations doivent \u00Eatre transmises aupr\u00E8s de l'AVM avant la date limite fix\u00E9e par arr\u00EAt\u00E9.",
    ],
    prices: [],
  },
  {
    id: "campagne-2026",
    title: "Ouverture de la campagne vanille verte 2026",
    date: "5 Juin 2026",
    category: "Campagne",
    featured: false,
    excerpt: "L'AVM annonce les dates et les conditions de la campagne vanille verte 2026 pour les r\u00E9gions productrices.",
    details: ["L'AVM a officialis\u00E9 l'ouverture de la campagne vanille verte 2026. Les dates et directives sont d\u00E9sormais disponibles pour tous les acteurs de la fili\u00E8re."],
    prices: [],
  },
  {
    id: "partenariat-ue",
    title: "Nouveau partenariat avec l'Union Europ\u00E9enne",
    date: "28 Mai 2026",
    category: "Partenariat",
    featured: false,
    excerpt: "Signature d'un accord de coop\u00E9ration pour le d\u00E9veloppement durable de la fili\u00E8re vanille \u00E0 Madagascar.",
    details: ["Un nouveau partenariat strat\u00E9gique a \u00E9t\u00E9 sign\u00E9 entre l'AVM et l'Union Europ\u00E9enne pour soutenir le d\u00E9veloppement durable de la fili\u00E8re vanille malagasy."],
    prices: [],
  },
  {
    id: "formation-trace",
    title: "Formation \u00E0 la tra\u00E7abilit\u00E9 pour les exportateurs",
    date: "15 Mai 2026",
    category: "Formation",
    featured: false,
    excerpt: "Session de formation obligatoire sur le nouveau syst\u00E8me de tra\u00E7abilit\u00E9 num\u00E9rique de l'AVM.",
    details: ["L'AVM organise une session de formation pour tous les exportateurs agr\u00E9\u00E9s sur l'utilisation du nouveau syst\u00E8me de tra\u00E7abilit\u00E9 num\u00E9rique."],
    prices: [],
  },
]

export default function News() {
  const featured = ARTICLES.find((a) => a.featured)
  const regular = ARTICLES.filter((a) => !a.featured)

  return (
    <div className="animate-fade-in">
      <section className="border-b py-16 sm:py-20" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "var(--avm-fg)" }}>
              <span className="text-gradient-gold">Actualites</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>
              Toute l'actualite de l'AVM et de la filiere vanille malagasy.
            </p>
          </div>
        </div>
      </section>

      <section className="avm-section" style={{ backgroundColor: "var(--avm-bg)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-5xl">
            {/* Featured Article */}
            {featured && (
              <div
                className="mb-8 rounded-2xl border p-6 sm:p-8"
                style={{ borderColor: "rgba(184,153,71,0.3)", backgroundColor: "rgba(184,153,71,0.03)" }}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#B89947" }}>
                    A la une
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--avm-fg-subtle)" }}>
                    <Calendar className="h-3 w-3" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--avm-fg-subtle)" }}>
                    <Tag className="h-3 w-3" />
                    {featured.category}
                  </span>
                </div>
                <h2 className="mb-3 text-xl font-bold sm:text-2xl" style={{ color: "var(--avm-fg)" }}>
                  {featured.title}
                </h2>
                <p className="mb-5 text-sm leading-relaxed sm:text-base" style={{ color: "var(--avm-fg-muted)" }}>
                  {featured.excerpt}
                </p>

                {/* Prices grid */}
                {featured.prices.length > 0 && (
                  <div className="mb-5 grid gap-3 rounded-xl border p-4 sm:grid-cols-3" style={{ borderColor: "var(--avm-border)" }}>
                    {featured.prices.map((p) => (
                      <div key={p.label} className="text-center">
                        <p className="text-lg font-bold text-[#2E4D3A]">{p.value}</p>
                        <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--avm-fg-muted)" }}>
                          {p.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Details */}
                <div className="space-y-2">
                  {featured.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Leaf className="mt-1 h-3 w-3 flex-shrink-0 text-[#B89947]" />
                      <p className="text-sm" style={{ color: "var(--avm-fg-muted)" }}>{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Articles */}
            <div className="grid gap-5 sm:grid-cols-2">
              {regular.map((article) => (
                <div
                  key={article.id}
                  className="rounded-2xl border p-6 transition-all hover:border-[#2E4D3A]/20"
                  style={{ borderColor: "var(--avm-border)" }}
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ backgroundColor: "rgba(46,77,58,0.1)", color: "#2E4D3A" }}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "var(--avm-fg-subtle)" }}>
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--avm-fg)" }}>
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--avm-fg-muted)" }}>
                    {article.excerpt}
                  </p>
                  {article.details.length > 0 && (
                    <div className="space-y-2 border-t pt-3" style={{ borderColor: "var(--avm-border)" }}>
                      {article.details.map((d, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#B89947]" />
                          <p className="text-xs" style={{ color: "var(--avm-fg-muted)" }}>{d}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
