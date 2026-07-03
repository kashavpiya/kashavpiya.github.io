import { Link } from 'react-router-dom'

export default function Chat() {
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

      {/* n8n chat embed */}
      <iframe
        src="https://n8n.piyakashav.xyz/webhook/03cd5250-354b-4d09-99c0-bfccafdb7932/chat"
        title="AI Chat — Ask me anything about Kashav's professional background"
        className="flex-1 w-full border-none"
        allow="microphone"
      />
    </div>
  )
}
