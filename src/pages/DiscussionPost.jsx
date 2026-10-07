import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

function H2({ children }) {
  return <h2 className="text-xl font-extrabold tracking-tight text-gray-900 mt-12 mb-4">{children}</h2>
}

function P({ children }) {
  return <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">{children}</p>
}

function Strategy({ title, children }) {
  return (
    <div className="mb-6">
      <p className="text-[13px] font-bold text-gray-900 mb-1">{title}</p>
      <p className="text-[15px] text-gray-700 leading-[1.8]">{children}</p>
    </div>
  )
}

const REPLIES = [
  {
    name: 'Praneeth Voruganti',
    time: 'Wed at 8:54 PM',
    body: [
      "Kashav, being the only AI person at your firm actually sharpens the value statement rather than weakening it. Most of these discussion posts assume a team structure where bias gets caught by someone else's perspective. Your version has to build that check-in without a team, which is a harder and more honest problem to solve.",
      "The low-ranked leads point stands out most. Everyone naturally reviews the outputs that look wrong or surprising. Almost nobody reviews the ones that look boring and correct, which is exactly where a quiet bias would hide longest, since it never produces an obviously bad result that draws attention.",
      "Getting non-technical eyes from attorneys and intake staff before shipping is the right substitute for a team, but it depends on those reviewers actually knowing what to look for. Have you found a way to prompt them toward catching bias specifically, rather than just usability issues?",
    ],
  },
  {
    name: 'Hazarath Naveenkumar Krishnam',
    time: 'Thu at 4:01 AM',
    body: [
      "Hi Kashav, I really enjoyed reading your post because it highlights how AI bias can have real consequences in legal services. Your point about not allowing AI tools to quietly determine who receives timely legal assistance stood out to me. It reminds us that fairness is not just about model accuracy but also about ensuring equal access to important services.",
      "I especially liked your strategy of testing speech-to-text systems with callers who have different accents and speaking styles. That is a practical way to identify bias that might otherwise go unnoticed. I also agree with your suggestion to review low-ranked leads instead of focusing only on the highest-ranked ones. Sometimes the greatest bias exists in the cases that receive the least attention.",
      "Your emphasis on keeping a human in the loop is another important takeaway. AI can improve efficiency, but decisions that affect people's legal representation should always include human judgment and accountability. Having attorneys and intake staff review model outputs before deployment is also a great example of using diverse perspectives to improve system quality.",
      "Overall, your discussion demonstrates that responsible AI leadership is about continuously questioning assumptions, validating outputs, and ensuring technology supports fair decision-making rather than replacing it. Great job presenting practical strategies that could be implemented in a real legal marketing environment.",
    ],
    reference: 'National Institute of Standards and Technology. (2023). Artificial intelligence risk management framework (AI RMF 1.0). U.S. Department of Commerce.',
  },
]

export default function DiscussionPost() {
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

        <p className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">Discussion · Artifact 4</p>

        <h1 className="text-4xl font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-6">
          AI Bias in Legal Services
        </h1>

        <div className="h-0.5 w-12 bg-green-600 mb-10" />

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Context</p>
          <p className="text-[14px] text-gray-600 leading-[1.8]">
            A discussion post on responsible AI in legal marketing — what fairness actually looks like when you're the only person checking, and the peer responses it received.
          </p>
        </div>

        <H2>Personal Value Statement</H2>
        <P>
          I work on AI systems in legal marketing — things like transcribing client calls, scoring leads, and matching people to attorneys. If those systems are biased, it's not just a technical problem. It can mean a real person with a real legal need gets deprioritized because their accent, zip code, or way of speaking didn't match the data the model learned from. As the only AI person at my firm, I don't have a team to catch what I miss. So my value is simple: I don't let these tools quietly decide who gets good service and who doesn't without someone checking.
        </P>

        <H2>Field-Specific Strategies</H2>

        <Strategy title="Test transcription on real variety, not just clean samples.">
          Speech-to-text tools tend to struggle with accents and non-native speech. I test mine against varied callers, not just the easy in-house test calls.
        </Strategy>

        <Strategy title="Don't let lead scoring run unchecked.">
          If a workflow decides which leads get fast follow-up, I make sure someone can see why a lead was ranked the way it was — and I check the low-ranked ones too, since those are the ones nobody else looks at.
        </Strategy>

        <Strategy title="Watch for hidden proxies in search results.">
          Things like zip code can quietly stand in for race or income in a matching system, even without meaning to. I check what different phrasings of the same problem actually pull up.
        </Strategy>

        <Strategy title="Keep a human in the loop for anything consequential.">
          Full automation is tempting, but for anything that affects whether someone gets contacted or represented, I keep a review step instead of letting it run fully on its own.
        </Strategy>

        <Strategy title="Get non-technical eyes on it before shipping.">
          Since I'm the only AI specialist, my own blind spots are a real risk. I ask attorneys and intake staff to react to outputs before I call something done, because they'll catch things I won't think to test for.
        </Strategy>

        <p className="text-[12px] text-gray-400 italic mt-2 mb-12">
          AI Use Disclosure: Drafted with help from Claude (Anthropic), then reviewed and edited by me.
        </p>

        <div className="h-px bg-gray-100 mb-12" />

        <H2>Peer Responses</H2>

        <div className="flex flex-col gap-8">
          {REPLIES.map(({ name, time, body, reference }) => (
            <div key={name} className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-[13px] font-bold text-gray-900">{name}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{time}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {body.map((para, i) => (
                  <p key={i} className="text-[14px] text-gray-600 leading-[1.8]">{para}</p>
                ))}
              </div>
              {reference && (
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-1">Reference</p>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{reference}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  )
}
