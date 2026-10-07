import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

function SectionLabel({ children }) {
  return (
    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">{children}</p>
  )
}

function SubTag({ color, children }) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    green: 'bg-green-50 border-green-200 text-green-700',
  }
  return (
    <span className={`inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full border mb-3 ${colors[color]}`}>
      {children}
    </span>
  )
}

function SubHeading({ children }) {
  return <h3 className="text-base font-extrabold tracking-tight text-gray-900 mb-2">{children}</h3>
}

function P({ children }) {
  return <p className="text-[15px] text-gray-700 leading-[1.8] mb-3">{children}</p>
}

function ItalicLine({ label, children }) {
  return (
    <p className="text-[13px] text-gray-500 leading-relaxed mb-1 italic">
      <span className="not-italic font-semibold text-gray-600">{label} </span>
      {children}
    </p>
  )
}

function Entry({ tag, tagColor, heading, children }) {
  return (
    <div className="border border-gray-100 rounded-xl p-5 mb-4">
      <SubTag color={tagColor}>{tag}</SubTag>
      <SubHeading>{heading}</SubHeading>
      {children}
    </div>
  )
}

export default function ByteSizedNewsletter() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <main className="max-w-2xl mx-auto px-6 sm:px-8 py-16 sm:py-24 lg:py-28 pt-32 sm:pt-40">

        {/* Back link */}
        <Link
          to="/artifacts"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-green-600 transition-colors mb-12"
        >
          ← Back to Artifacts
        </Link>

        {/* Label */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">Writing · Artifact 5</p>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-2">
          Byte-Sized AI
        </h1>
        <p className="text-sm text-gray-500 mb-6">Issue 6 · August 2026 · Kashav Piya, AIML-500</p>

        <div className="h-0.5 w-12 bg-green-600 mb-10" />

        {/* Intro */}
        <P>
          AI is no longer a back-room experiment. It is actively changing how lawyers work, how ads are made, and how doctors spend their time. This issue breaks down three industries where AI is delivering measurable business impact right now — with specific companies, real numbers, and a look at where each is headed.
        </P>

        {/* At a Glance */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10">
          <SectionLabel>At a Glance</SectionLabel>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-blue-600 mb-2">Legal Tech</p>
              <p className="text-3xl font-extrabold text-blue-600 leading-none mb-1">54%</p>
              <p className="text-[11px] text-gray-500 leading-snug">of corporate legal teams now use AI (2025)</p>
            </div>
            <div className="text-center border-x border-gray-200">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-purple-600 mb-2">Marketing</p>
              <p className="text-3xl font-extrabold text-purple-600 leading-none mb-1">24hrs</p>
              <p className="text-[11px] text-gray-500 leading-snug">to produce broadcast-quality audio with ElevenLabs</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-green-600 mb-2">Healthcare</p>
              <p className="text-3xl font-extrabold text-green-600 leading-none mb-1">75%</p>
              <p className="text-[11px] text-gray-500 leading-snug">of U.S. health systems now use at least one AI tool</p>
            </div>
          </div>
        </div>

        {/* Section 01 — Legal Tech */}
        <div className="mb-12">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-2">01 / Legal Tech</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">AI Is Becoming Standard Equipment at Law Firms</h2>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
            For years, law was considered resistant to automation. That changed fast. Corporate legal AI adoption doubled in a single year, and in 2026, firms are embedding AI directly into daily workflows rather than treating it as a side tool.
          </p>

          <Entry tag="Contract Management" tagColor="blue" heading="Agentic AI Is Handling the Paperwork Lawyers Hate">
            <P>Corporate legal AI adoption jumped from 23% to 54% between 2024 and 2025. Agentic AI tools now handle routine contract approvals, compliance checks, and first-draft clauses without an attorney touching every step. Companies like Summize and Litera are leading this shift, embedding AI directly into the tools lawyers already use every day.</P>
            <ItalicLine label="Impact:">Faster contract turnaround and lower costs for clients, with attorneys freed up for judgment-heavy work.</ItalicLine>
            <ItalicLine label="Future potential:">As agentic AI matures, entire matter workflows — not just individual tasks — will be automated end-to-end.</ItalicLine>
          </Entry>

          <Entry tag="Knowledge Management" tagColor="blue" heading="Summarization Has Become the Most-Used Legal AI Feature">
            <P>AI summarization is now one of the most common real-world legal AI applications. Firms use it to convert long documents into reusable internal assets, speed up onboarding, and share knowledge across offices. What used to take hours of associate time now takes minutes.</P>
            <ItalicLine label="Impact:">Firms that build disciplined AI summarization workflows are turning institutional knowledge into a competitive asset.</ItalicLine>
            <ItalicLine label="Future potential:">Long-form summarization will evolve into full knowledge graphs, connecting precedents across matters automatically.</ItalicLine>
          </Entry>
        </div>

        {/* Section 02 — Marketing */}
        <div className="mb-12">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple-600 mb-2">02 / Marketing &amp; Advertising</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">ElevenLabs Is Changing How Brands Sound</h2>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
            Audio content is expensive and slow to produce. ElevenLabs has changed that equation for marketing teams of all sizes, making broadcast-quality voice content accessible without a studio, a voice actor, or a sound engineer.
          </p>

          <Entry tag="AI Voice / Audio Production" tagColor="purple" heading="Professional Voiceovers in 24 Hours, No Studio Required">
            <P>ElevenLabs has become the go-to platform for AI-generated voice content in marketing. Its 2026 updates added real-time dubbing in 32 languages, conversational AI voice agents, and a sound effects generator. Brands now produce broadcast-quality audio in 24 hours at a fraction of traditional studio costs — and the output is realistic enough that most listeners cannot tell it is AI-generated.</P>
            <ItalicLine label="Impact:">Smaller marketing teams can now produce at the volume and quality of agencies with much larger budgets.</ItalicLine>
            <ItalicLine label="Future potential:">Multilingual dubbing will allow a single campaign to reach global audiences simultaneously, eliminating localization delays.</ItalicLine>
          </Entry>

          <Entry tag="Conversational AI / Sales" tagColor="purple" heading="ElevenLabs Voice Agents Are Now Answering Phones for Businesses">
            <P>Beyond voiceovers, ElevenLabs offers a Conversational AI product that builds voice agents for inbound calls, outbound sales, and customer service. The agent listens, processes conversation with a language model, and replies in a natural voice in near real time. It connects to phone systems through providers like Twilio and works 24/7 without breaks.</P>
            <ItalicLine label="Impact:">Law firms, clinics, and service businesses handle overflow and after-hours calls without additional headcount.</ItalicLine>
            <ItalicLine label="Future potential:">Voice agents will become the default first point of contact across industries, with human escalation reserved for complex cases.</ItalicLine>
          </Entry>
        </div>

        {/* Section 03 — Healthcare */}
        <div className="mb-12">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-600 mb-2">03 / Healthcare</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">AI Is Giving Doctors Their Time Back</h2>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
            Healthcare has two problems AI is uniquely suited to address: too much administrative burden on clinicians, and too much data for any single person to process quickly. Both are seeing significant movement in 2026.
          </p>

          {/* Bar chart */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-4">
            <p className="text-[11px] font-bold text-gray-700 mb-1">Healthcare AI Adoption by Use Case (2026)</p>
            <p className="text-[10px] text-gray-400 mb-4">% of U.S. health systems using each application</p>
            {[
              { label: 'Clinical Note-Taking', pct: 68, color: 'bg-green-500' },
              { label: 'AI Documentation Improvement', pct: 43, color: 'bg-green-400' },
              { label: 'Diagnostic Imaging AI', pct: 38, color: 'bg-green-300' },
              { label: 'Predictive Analytics', pct: 31, color: 'bg-green-200' },
            ].map(({ label, pct, color }) => (
              <div key={label} className="flex items-center gap-3 mb-2">
                <p className="text-[11px] text-gray-500 w-44 shrink-0 text-right">{label}</p>
                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className={`${color} h-2 rounded-full`} style={{ width: `${pct}%` }} />
                </div>
                <p className="text-[11px] font-semibold text-gray-700 w-8">{pct}%</p>
              </div>
            ))}
          </div>

          <Entry tag="Clinical Documentation" tagColor="green" heading="68% of Health Systems Now Use AI for Clinical Note-Taking">
            <P>75% of U.S. health systems now use at least one AI application, up from 59% in 2025. The most adopted use case is ambient AI note-taking. Tools like Microsoft Nuance DAX and Abridge listen to patient encounters and automatically generate clinical notes, saving clinicians multiple hours per week.</P>
            <ItalicLine label="Impact:">Physicians spend more time with patients and less time typing. Burnout driven by admin work is reduced.</ItalicLine>
            <ItalicLine label="Future potential:">Ambient AI will expand from note-taking to real-time clinical decision support, surfacing relevant research mid-encounter.</ItalicLine>
          </Entry>

          <Entry tag="Diagnostics & Imaging" tagColor="green" heading="AI Is Catching Diseases That Slip Past Standard Screening">
            <P>AI systems trained on large medical imaging datasets now perform at or above specialist-level accuracy on specific diagnostic tasks. A 2025 Nature Medicine study found AI-assisted diabetic retinopathy screening detected cases that standard screening missed. UnitedHealth projects AI will save nearly $1 billion for the company in 2026 alone.</P>
            <ItalicLine label="Impact:">Earlier detection means better patient outcomes, especially in primary care settings where specialist access is limited.</ItalicLine>
            <ItalicLine label="Future potential:">Multimodal AI combining imaging, lab results, and patient history will enable earlier detection of complex conditions.</ItalicLine>
          </Entry>
        </div>

        {/* Bottom Line */}
        <div className="bg-gray-900 text-white rounded-xl p-6 mb-10">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">The Bottom Line</p>
          <P className="text-white">
            Three industries. Three different problems. One common thread: AI is most valuable when it handles repetitive, time-consuming work so the humans in the room can focus on what actually requires their expertise. Legal teams are reviewing contracts faster. Marketing teams are producing audio in hours instead of weeks. Doctors are spending more time with patients and less time on notes.
          </P>
          <p className="text-[15px] text-gray-300 leading-[1.8]">
            This is not AI replacing people. It is AI changing what people spend their time on. And across all three of these industries, that shift is already well underway.
          </p>
        </div>

        {/* PDF download */}
        <div className="flex items-center gap-4 mb-14">
          <a
            href="/byte-sized-ai-newsletter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-semibold px-4 py-2 rounded-md border bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600 transition-colors"
          >
            Download PDF →
          </a>
        </div>

        {/* Footer meta */}
        <div className="pt-6 border-t border-gray-100">
          <p className="text-[11px] text-gray-400 leading-relaxed mb-2">
            Byte-Sized AI | Issue 6, August 2026 | Kashav Piya | AIML-500, Indiana Wesleyan University
          </p>
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Sources: Summize (2026 Legal Tech Trends), BCG Attorney Search, ElevenLabs, Layer3Labs, Fierce Healthcare, Nature Medicine (2025), Grand View Research
          </p>
        </div>

      </main>
      <Footer />
    </div>
  )
}
