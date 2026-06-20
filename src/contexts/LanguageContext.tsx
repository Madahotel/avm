/* ═══════════════════════════════════════════
   LanguageContext — i18n Provider
   Handles language switching with localStorage persistence
   ═══════════════════════════════════════════ */

import React, { createContext, useContext, useEffect, useState, useCallback } from "react"
import translations, { type LanguageCode, type TranslationDictionary } from "@/i18n/translations"

interface LanguageContextType {
  lang: LanguageCode
  setLang: (lang: LanguageCode) => void
  t: TranslationDictionary
  availableLangs: LanguageCode[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "avm-language"
const DEFAULT_LANG: LanguageCode = "fr"
const AVAILABLE_LANGS: LanguageCode[] = ["fr", "mg", "en", "es", "de", "it"]

function getStoredLanguage(): LanguageCode {
  if (typeof window === "undefined") return DEFAULT_LANG
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as LanguageCode | null
    if (stored && AVAILABLE_LANGS.includes(stored)) return stored
  } catch {
    // localStorage unavailable
  }
  return DEFAULT_LANG
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLangState] = useState<LanguageCode>(() => getStoredLanguage())

  const setLang = useCallback((newLang: LanguageCode) => {
    if (!AVAILABLE_LANGS.includes(newLang)) return
    setLangState(newLang)
    try {
      localStorage.setItem(STORAGE_KEY, newLang)
    } catch {
      // localStorage unavailable
    }
    // Update html lang attribute for SEO/accessibility
    document.documentElement.lang = newLang
  }, [])

  // Set html lang on mount
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, availableLangs: AVAILABLE_LANGS }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Helper hook for typed nested access
export function useTranslation(): TranslationDictionary {
  const { t } = useLanguage()
  return t
}
