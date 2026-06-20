/* ═══════════════════════════════════════════
   Navbar — AVM Main Navigation
   Green-tinted Glassmorphism (polished glass)
   ═══════════════════════════════════════════ */

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router"
import { useTheme } from "@/contexts/ThemeContext"
import { useLanguage } from "@/contexts/LanguageContext"
import type { LanguageCode } from "@/i18n/translations"
import {
  Menu, X, Sun, Moon, Monitor, ChevronDown, Globe, Check,
} from "lucide-react"

const NAV_ITEMS = [
  { path: "/", label: "Accueil" },
  { path: "/a-propos", label: "\u00C0 propos" },
  { path: "/acteurs", label: "Acteurs" },
  { path: "/programmes", label: "Programmes" },
  { path: "/vanille-verte", label: "Vanille verte" },
  { path: "/exportateurs", label: "Exportateurs" },
  { path: "/impacts", label: "Impacts" },
  { path: "/actualites", label: "Actualit\u00E9s" },
  { path: "/partenaires", label: "Partenaires" },
  { path: "/contact", label: "Contact" },
]

const LANG_META: Record<LanguageCode, { flag: string; label: string }> = {
  fr: { flag: "\uD83C\uDDEB\uD83C\uDDF7", label: "Fran\u00E7ais" },
  mg: { flag: "\uD83C\uDDF2\uD83C\uDDEC", label: "Malagasy" },
  en: { flag: "\uD83C\uDDEC\uD83C\uDDE7", label: "English" },
  es: { flag: "\uD83C\uDDEA\uD83C\uDDF8", label: "Espa\u00F1ol" },
  de: { flag: "\uD83C\uDDE9\uD83C\uDDEA", label: "Deutsch" },
  it: { flag: "\uD83C\uDDEE\uD83C\uDDF9", label: "Italiano" },
}

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, availableLangs } = useLanguage()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)

  const langRef = useRef<HTMLDivElement>(null)
  const themeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) setThemeOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setLangOpen(false)
    setThemeOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false); setLangOpen(false); setThemeOpen(false)
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/"
    return location.pathname === path
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 bg-white border-b border-[rgba(0,0,0,0.06)]">
        <nav className="avm-container">
          <div className="flex h-16 items-center justify-between sm:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <img src="/images/avm-logo-nav.png" alt="AVM" className="h-12 w-auto sm:h-14" />
              <div className="hidden sm:block">
                <p className="text-sm font-bold leading-tight tracking-tight text-[#1A1A1A]">AVM</p>
                <p className="text-[10px] uppercase tracking-widest leading-tight text-[#8A8A8A]">Alliance de la Vanille Malagasy</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium transition-all duration-200 ${
                    isActive(item.path) ? "text-[#2E4D3A]" : "text-[#5A5A5A] hover:text-[#2E4D3A]"
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[#2E4D3A]" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right: Language + Theme + Burger */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Language */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => { setLangOpen(!langOpen); setThemeOpen(false) }}
                  className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-black/5"
                  aria-label="Select language"
                >
                  <Globe className="h-4 w-4 text-[#5A5A5A]" />
                  <span className="hidden sm:inline text-xs uppercase tracking-wide">{lang}</span>
                  <ChevronDown className={`h-3 w-3 text-[#8A8A8A] transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-black/8 bg-white/95 shadow-lg ring-1 ring-black/5 animate-fade-in" style={{ backdropFilter: "blur(12px)" }}>
                    <div className="py-1">
                      {availableLangs.map((code) => (
                        <button
                          key={code}
                          onClick={() => { setLang(code); setLangOpen(false) }}
                          className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors ${
                            lang === code ? "bg-[#2E4D3A]/8" : "hover:bg-black/5"
                          } text-[#1A1A1A]`}
                        >
                          <span className="text-base">{LANG_META[code].flag}</span>
                          <span className="flex-1 text-left">{LANG_META[code].label}</span>
                          {lang === code && <Check className="h-3.5 w-3.5 text-[#2E4D3A]" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Theme */}
              <div className="relative" ref={themeRef}>
                <button
                  onClick={() => { setThemeOpen(!themeOpen); setLangOpen(false) }}
                  className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-black/5"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Moon className="h-4 w-4 text-[#B89947]" /> : <Sun className="h-4 w-4 text-[#B89947]" />}
                </button>
                {themeOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-black/8 bg-white/95 shadow-lg ring-1 ring-black/5 animate-fade-in" style={{ backdropFilter: "blur(12px)" }}>
                    <div className="py-1">
                      {[
                        { value: "light" as const, icon: Sun, label: "Clair" },
                        { value: "dark" as const, icon: Moon, label: "Sombre" },
                        { value: "system" as const, icon: Monitor, label: "Syst\u00E8me" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => { setTheme(opt.value); setThemeOpen(false) }}
                          className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors ${
                            theme === opt.value ? "bg-[#2E4D3A]/8" : "hover:bg-black/5"
                          } text-[#1A1A1A]`}
                        >
                          <opt.icon className="h-4 w-4 text-[#5A5A5A]" />
                          <span className="flex-1 text-left">{opt.label}</span>
                          {theme === opt.value && <Check className="h-3.5 w-3.5 text-[#2E4D3A]" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Burger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-black/5 lg:hidden"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="h-5 w-5 text-[#1A1A1A]" /> : <Menu className="h-5 w-5 text-[#1A1A1A]" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[35] bg-black/20 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile panel — also with green glass */}
      <div
        className={`fixed left-0 right-0 top-0 z-[36] transition-all duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          paddingTop: "72px",
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <div className="avm-container py-4 pb-8">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  isActive(item.path) ? "bg-[#2E4D3A]/8 text-[#2E4D3A]" : "text-[#5A5A5A] hover:bg-black/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-black/6 pt-4">
            <p className="mb-2 px-4 text-xs font-medium uppercase tracking-wider text-[#8A8A8A]">Langue</p>
            <div className="flex flex-wrap gap-2 px-4">
              {availableLangs.map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    lang === code ? "bg-[#2E4D3A] text-white" : "border border-black/8 text-[#5A5A5A] hover:bg-black/5"
                  }`}
                >
                  <span className="mr-1">{LANG_META[code].flag}</span>{code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-[72px]" />
    </>
  )
}
