import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

function H2({ children }) {
  return <h2 className="text-xl font-extrabold tracking-tight text-gray-900 mt-12 mb-4">{children}</h2>
}

function P({ children }) {
  return <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">{children}</p>
}

const benchmarks = [
  { name: 'CRUXEval+', rank: '#1', public: '87.9%', private: '46.3%', type: 'Code reasoning', total: 112 },
  { name: 'Habermas Machine+', rank: '#2', public: '70.0%', private: '47.6%', type: 'Argumentation', total: 112 },
  { name: 'BPoMP+', rank: '#2', public: '97.0%', private: '93.2%', type: 'Math prediction', total: 112 },
  { name: 'CLadder+', rank: '#3', public: '85.3%', private: '85.2%', type: 'Causal reasoning', total: 112 },
]

const areas = [
  { name: 'Tools & Automation', score: 52.4 },
  { name: 'Retrieval & Classification', score: 40.7 },
  { name: 'Language Understanding', score: 36.9 },
  { name: 'Arts & Human Taste', score: 33.8 },
  { name: 'Knowledge & Reasoning', score: 27.9 },
]

const comp4b = [
  { model: 'ezjev-4b', full: 51.2, kr: 33.5, lang: 60.2, ret: 56.3, tools: 69.9, arts: 28.8 },
  { model: 'Nox 4B', full: 43.8, kr: 27.6, lang: 48.6, ret: 52.4, tools: 60.1, arts: 25.8 },
  { model: 'kas-4b', full: 40.1, kr: 39.5, lang: 35.2, ret: 40.4, tools: 49.0, arts: 37.7, isMe: true },
  { model: 'intelif-4B', full: 31.8, kr: 18.3, lang: 31.1, ret: 39.6, tools: 51.0, arts: 17.8 },
  { model: 'Tev1-4B', full: 29.2, kr: null, lang: null, ret: null, tools: null, arts: null },
]

export default function Kas4b() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <main className="max-w-2xl mx-auto px-6 sm:px-8 py-16 sm:py-24 lg:py-28 pt-32 sm:pt-40">

        <Link
          to="/artifacts"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-green-600 transition-colors mb-12"
        >
          ← Back to Artifacts
        </Link>

        <p className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">Model · Artifact 6</p>

        <h1 className="text-4xl font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-3">
          kas-4b
        </h1>
        <p className="text-lg text-gray-500 mb-6">Decision Index 0.3 — 112-model open benchmark</p>

        <div className="h-0.5 w-12 bg-green-600 mb-10" />

        {/* Score card */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10 flex flex-wrap gap-8">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">Full Score</p>
            <p className="text-4xl font-extrabold text-gray-900">36.7</p>
            <p className="text-xs text-gray-400 mt-1">out of 112 entries</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">Overall Rank</p>
            <p className="text-4xl font-extrabold text-gray-900">#59</p>
            <p className="text-xs text-gray-400 mt-1">tied</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">Base Model</p>
            <p className="text-xl font-bold text-gray-900">Qwen3-4B</p>
            <p className="text-xs text-gray-400 mt-1">Apache 2.0</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">Rows Evaluated</p>
            <p className="text-xl font-bold text-gray-900">150,759</p>
            <p className="text-xs text-gray-400 mt-1">Decision Index 0.3</p>
          </div>
        </div>

        <H2>Per-benchmark top rankings</H2>
        <P>
          Despite a mid-table full score, kas-4b ranks in the top 3 on four individual benchmarks — beating models up to 28B parameters.
        </P>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Benchmark</th>
                <th className="text-left py-3 pr-4 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Rank</th>
                <th className="text-right py-3 pr-4 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Public</th>
                <th className="text-right py-3 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">Private</th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.map(({ name, rank, public: pub, private: priv, type }) => (
                <tr key={name} className="border-b border-gray-100">
                  <td className="py-3 pr-4">
                    <p className="font-semibold text-gray-900">{name}</p>
                    <p className="text-xs text-gray-400">{type}</p>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="inline-block text-xs font-bold px-2 py-0.5 rounded bg-green-50 border border-green-200 text-green-700">
                      {rank} of 112
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right font-semibold text-gray-900">{pub}</td>
                  <td className="py-3 text-right text-gray-500">{priv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>Per-area scores</H2>

        <div className="space-y-3 mb-10">
          {areas.map(({ name, score }) => (
            <div key={name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700 font-medium">{name}</span>
                <span className="font-bold text-gray-900">{score}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: `${(score / 100) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <H2>4B tier comparison</H2>
        <P>kas-4b leads the 4B tier on Knowledge &amp; Reasoning (39.5) and Arts &amp; Human Taste (37.7).</P>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                {['Model', 'Full', 'K&R', 'Lang', 'Ret', 'Tools', 'Arts'].map(h => (
                  <th key={h} className="text-right first:text-left py-3 pr-3 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comp4b.map(({ model, full, kr, lang, ret, tools, arts, isMe }) => (
                <tr key={model} className={`border-b border-gray-100 ${isMe ? 'bg-green-50' : ''}`}>
                  <td className={`py-3 pr-3 font-semibold ${isMe ? 'text-green-700' : 'text-gray-900'}`}>
                    {model}{isMe ? ' ★' : ''}
                  </td>
                  {[full, kr, lang, ret, tools, arts].map((v, i) => (
                    <td key={i} className={`py-3 pr-3 text-right ${isMe ? 'text-green-700 font-semibold' : 'text-gray-600'}`}>
                      {v ?? '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>How it was built</H2>
        <P>
          kas-4b fine-tunes Qwen3-4B using LoRA at rank 64 (α = 128) for two epochs — a higher rank than most 4B
          submissions, which is the likely driver of the Knowledge &amp; Reasoning lead. Training ran on an NVIDIA
          RTX PRO 6000 Blackwell via Hugging Face Jobs in approximately 1 hour 24 minutes.
        </P>
        <P>
          A custom inference engine (KasEngine) maps options to single uppercase tokens and scores label logits
          directly at the generation position — skipping autoregressive decoding entirely for standard prompts.
          Median latency on the evaluation hardware: <strong>39 ms</strong>.
        </P>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10 grid grid-cols-2 gap-4 text-sm">
          {[
            ['Method', 'LoRA r64 / α128'],
            ['Epochs', '2'],
            ['Learning rate', '1 × 10⁻⁴'],
            ['Batch size', '16'],
            ['Max tokens', '4,096'],
            ['Median latency', '39.2 ms'],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-1">{k}</p>
              <p className="font-semibold text-gray-900">{v}</p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-10">
          <a
            href="https://huggingface.co/kpiya/kas-4b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
          >
            Model on HuggingFace ↗
          </a>
          <a
            href="https://github.com/kashavpiya/kas-4b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-md border text-gray-700 border-gray-200 hover:border-green-600 hover:text-green-600 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://huggingface.co/datasets/kpiya/decision-index-results"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-md border text-gray-700 border-gray-200 hover:border-green-600 hover:text-green-600 transition-colors"
          >
            Eval Results ↗
          </a>
          <a
            href="https://huggingface.co/spaces/multimodalart/jev-decision-index"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-md border text-gray-700 border-gray-200 hover:border-green-600 hover:text-green-600 transition-colors"
          >
            Leaderboard ↗
          </a>
        </div>

      </main>
      <Footer />
    </div>
  )
}
