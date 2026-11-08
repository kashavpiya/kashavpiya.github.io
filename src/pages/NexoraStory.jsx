import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function NexoraStory() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 sm:pt-36">
        <Link to="/artifacts" className="text-sm font-semibold text-green-700 hover:underline">← All artifacts</Link>
        <p className="mt-8 text-xs font-bold tracking-[0.2em] uppercase text-green-700">AIML-505 · Individual project</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">Nexora Engineering Assistant</h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-600">
          A data pipeline stalls at 2:14 a.m. The engineer on call needs a runbook that matches the version running in production. I built a launch story around that moment for Nexora Technologies, a fictional company in my graduate AI course.
        </p>
        <figure className="mt-8">
          <img src="/nexora-campaign.jpg" alt="An engineer at a workstation with red pipeline alerts and a blue recovery runbook" width="1536" height="1024" className="w-full rounded-xl" />
          <figcaption className="mt-2 text-sm text-gray-600">Campaign visual generated in Bing Image Creator using the image prompt from Gemini.</figcaption>
        </figure>
        <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">How I built it</h2>
            <p>Gemini drafted the launch story and generated a visual prompt based on it. I used that exact prompt in Bing Image Creator, then paired the resulting visual with a short narrated pitch. The same incident carries through both formats. The red alerts show the pressure the engineer is under, and the blue runbook screen shows the information they need to verify.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">What I would test before expanding</h2>
            <p>I would pilot the assistant with one on-call team and approved runbooks. I’d compare time to verified guidance across similar incidents and record how often the assistant cites the right revision, how much review it adds, and when engineers have to correct its suggestions. Engineers would still approve production changes. These are proposed measures for the fictional pilot.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">What I learned</h2>
            <p>A polished story can make a proposed tool sound more proven than it is. Gemini’s draft described recovery within minutes, which made sense as a fictional scene. For an engineering leader deciding whether to fund a pilot, the evidence that matters is how quickly someone can verify the guidance and whether it helps them make the right call.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">From the pitch</h2>
            <blockquote className="border-l-4 border-green-600 pl-4 italic">Nexora’s engineering assistant gives the engineer a place to start. It points to the relevant procedure and shows the source so the engineer can check the version against the affected pipeline. The engineer still decides what to do.</blockquote>
            <p className="mt-3 text-sm text-gray-600">OpenAI Codex assisted with the pitch script, editing, and presentation assembly. The course submission used FreeTTS for narration.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
