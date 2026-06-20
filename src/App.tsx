/* ═══════════════════════════════════════════
   App.tsx — Root Layout & Router
   AVM - Alliance de la Vanille Malagasy
   ═══════════════════════════════════════════ */

import { Routes, Route } from "react-router"
import { useTheme } from "@/contexts/ThemeContext"
import { useLanguage } from "@/contexts/LanguageContext"
import Navbar from "@/components/Navbar"
import ChatbotWidget from "@/components/ChatbotWidget"
import ScrollToTop from "@/components/ScrollToTop"

// ─── Page imports ───
import Home from "@/pages/Home"
import About from "@/pages/About"
import Actors from "@/pages/Actors"
import Programmes from "@/pages/Programmes"
import Campaign from "@/pages/Campaign"
import Exporters from "@/pages/Exporters"
import Impacts from "@/pages/Impacts"
import News from "@/pages/News"
import Partners from "@/pages/Partners"
import Contact from "@/pages/Contact"

export default function App() {
  const { resolvedTheme } = useTheme()
  const { lang } = useLanguage()

  return (
    <div
      className="min-h-screen theme-transition"
      data-theme={resolvedTheme}
      data-lang={lang}
    >
      <ScrollToTop />
      <Navbar />

      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/acteurs" element={<Actors />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/vanille-verte" element={<Campaign />} />
          <Route path="/exportateurs" element={<Exporters />} />
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/actualites" element={<News />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <ChatbotWidget />

      {/* ─── n8n Chatbot Script ───
          Replace the src URL with your actual n8n chatbot endpoint.
          The script below is a placeholder showing the integration point. */}
      <script
        src="https://your-n8n-instance.com/chatbot.js"
        data-bot-id="avm-bot"
        async
        defer
      />
    </div>
  )
}

/* ═══════════════════════════════════════════
   Footer Component (inline for modularity)
   ═══════════════════════════════════════════ */

import { useTranslation } from "@/contexts/LanguageContext"
import { Globe, Leaf } from "lucide-react"

function Footer() {
  const t = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-black/[0.06] bg-white">
      <div className="avm-container">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/avm-logo-new.png"
                alt="AVM Logo"
                className="h-12 w-auto"
              />
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  AVM
                </p>
                <p className="text-xs text-[#8A8A8A]">
                  Alliance de la Vanille Malagasy
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: t.nav.about, path: "/a-propos" },
                { label: t.nav.programmes, path: "/programmes" },
                { label: t.nav.impacts, path: "/impacts" },
                { label: "Actualit\u00E9s", path: "/actualites" },
                { label: t.nav.contact, path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-sm transition-colors duration-200 hover:text-[#2E4D3A] dark:hover:text-[#B89947]"
                    style={{ color: "var(--avm-fg-muted)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              {t.nav.programmes}
            </h4>
            <ul className="space-y-2.5">
              {[
                "Transparence et traçabilité",
                "Qualité de vie",
                "Qualité environnementale",
                "Qualité alimentaire et aromatique",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Leaf className="h-3 w-3 flex-shrink-0 text-[#2E4D3A]" />
                  <span className="text-sm text-[#5A5A5A]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              {t.nav.contact}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "var(--avm-fg-subtle)" }} />
                <div>
                  <p className="text-sm" style={{ color: "var(--avm-fg-muted)" }}>
                    Antalaha, Région SAVA
                  </p>
                  <p className="text-sm text-[#8A8A8A]">
                    Madagascar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-3 border-t py-5 sm:flex-row"
          style={{ borderColor: "rgba(0,0,0,0.06)" }}
        >
          <p className="text-xs text-[#8A8A8A]">
            &copy; {currentYear} AVM — {t.footer.rights}
          </p>
          <p className="text-xs text-[#8A8A8A]">
            {t.footer.legal}
          </p>
        </div>
      </div>
    </footer>
  )
}
