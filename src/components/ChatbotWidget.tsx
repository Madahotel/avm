/* ═══════════════════════════════════════════
   ChatbotWidget — Floating n8n Chat Button
   ═══════════════════════════════════════════ */

import { useState } from "react"
import { useTranslation } from "@/contexts/LanguageContext"
import { MessageCircle, X, Bot, Send } from "lucide-react"

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const t = useTranslation()

  const handleSend = () => {
    if (!message.trim()) return
    // In production, this sends to the n8n webhook
    console.log("[AVM Bot] Message:", message)
    setMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* ─── Floating Button ─── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ backgroundColor: "#2E4D3A" }}
        aria-label={t.chatbot.title}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* ─── Chat Panel ─── */}
      <div
        className={`fixed bottom-24 right-5 z-50 w-[360px] max-w-[calc(100vw-40px)] overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "var(--avm-bg)",
          border: "1px solid var(--avm-border)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{
            backgroundColor: "#2E4D3A",
          }}
        >
          <Bot className="h-6 w-6 text-white" />
          <div>
            <p className="text-sm font-semibold text-white">{t.chatbot.title}</p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span className="text-xs text-green-100">Online</span>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div
          className="h-64 overflow-y-auto px-5 py-4 scrollbar-hide"
          style={{ backgroundColor: "var(--avm-bg)" }}
        >
          {/* Bot greeting */}
          <div className="mb-3 flex items-start gap-2.5">
            <div
              className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "#2E4D3A" }}
            >
              <Bot className="h-3.5 w-3.5 text-white" />
            </div>
            <div
              className="max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm leading-relaxed"
              style={{
                backgroundColor: "var(--muted)",
                color: "var(--avm-fg)",
              }}
            >
              {t.chatbot.greeting}
            </div>
          </div>

          {/* Placeholder: connection to n8n would go here */}
          <div className="mt-4 text-center">
            <p className="text-xs italic" style={{ color: "var(--avm-fg-subtle)" }}>
              Powered by n8n
            </p>
          </div>
        </div>

        {/* Input Area */}
        <div
          className="flex items-center gap-2 border-t px-4 py-3"
          style={{
            borderColor: "var(--avm-border)",
            backgroundColor: "var(--avm-bg)",
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.chatbot.placeholder}
            className="flex-1 rounded-full px-4 py-2 text-sm outline-none transition-colors"
            style={{
              backgroundColor: "var(--muted)",
              color: "var(--avm-fg)",
            }}
          />
          <button
            onClick={handleSend}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all hover:opacity-80 active:scale-90"
            style={{ backgroundColor: "#2E4D3A" }}
            aria-label="Send"
          >
            <Send className="h-3.5 w-3.5 text-white" />
          </button>
        </div>
      </div>
    </>
  )
}
