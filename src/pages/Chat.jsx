import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const WEBHOOK_URL =
  'https://n8n.piyakashav.xyz/webhook/03cd5250-354b-4d09-99c0-bfccafdb7932/chat'

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: "Hi! Ask me anything about Kashav's professional background, skills, or experience.",
}

export default function Chat() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sessionId = useRef(crypto.randomUUID())
  const bottomRef = useRef(null)

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    setInput('')
    setLoading(true)

    // Append user message and a blank assistant placeholder
    setMessages(prev => [
      ...prev,
      { role: 'user', content: text },
      { role: 'assistant', content: '' },
    ])

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sendMessage',
          chatInput: text,
          sessionId: sessionId.current,
        }),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) {
          if (buffer.trim()) {
            try {
              const event = JSON.parse(buffer)
              if (event.type === 'item' && event.content) {
                setMessages(prev => {
                  const updated = [...prev]
                  updated[updated.length - 1] = {
                    ...updated[updated.length - 1],
                    content: updated[updated.length - 1].content + event.content,
                  }
                  return updated
                })
              }
            } catch {}
          }
          break
        }
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop()
        for (const line of lines) {
          if (!line.trim()) continue
          try {
            const event = JSON.parse(line)
            if (event.type === 'item' && event.content) {
              setMessages(prev => {
                const updated = [...prev]
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  content: updated[updated.length - 1].content + event.content,
                }
                return updated
              })
            }
          } catch {}
        }
      }
    } catch {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: 'Sorry, something went wrong. Please try again.',
        }
        return updated
      })
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="font-sans text-gray-900 bg-white h-screen flex flex-col">
      {/* Top bar */}
      <div className="h-16 flex-shrink-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm flex items-center px-8">
        <Link
          to="/artifacts"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← Back
        </Link>
        <span className="mx-4 text-gray-200">|</span>
        <span className="text-sm font-semibold text-gray-900">Ask me anything</span>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {messages.map((msg, i) => {
            const isUser = msg.role === 'user'
            const showDots = !isUser && msg.content === '' && i === messages.length - 1 && loading

            return (
              <div
                key={i}
                className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {showDots ? (
                  <div className="bg-gray-50 border border-gray-100 text-gray-900 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                ) : (
                  <div
                    className={
                      isUser
                        ? 'bg-gray-900 text-white rounded-2xl rounded-br-sm px-4 py-3 text-sm max-w-[80%] whitespace-pre-wrap'
                        : 'bg-gray-50 border border-gray-100 text-gray-900 rounded-2xl rounded-bl-sm px-4 py-3 text-sm max-w-[80%] whitespace-pre-wrap'
                    }
                  >
                    {msg.content}
                  </div>
                )}
              </div>
            )
          })}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="flex-shrink-0 border-t border-gray-100 bg-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2 items-end">
            <textarea
              rows={1}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question…"
              disabled={loading}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-colors resize-none font-sans disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="px-5 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Send →
            </button>
          </div>
          <p className="mt-2 text-[10px] text-gray-400">
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  )
}
