import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

function H2({ children }) {
  return <h2 className="text-xl font-extrabold tracking-tight text-gray-900 mt-12 mb-4">{children}</h2>
}

function P({ children }) {
  return <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">{children}</p>
}

export default function NeuralNetworks() {
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
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">Writing · Artifact 3</p>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-6">
          Explaining Neural Networks, Simply
        </h1>

        <div className="h-0.5 w-12 bg-green-600 mb-10" />

        {/* Pull quote */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">The idea</p>
          <p className="text-[14px] text-gray-600 leading-[1.8] italic">
            "If you can't explain something simply, you don't really understand it enough." — Einstein
          </p>
        </div>

        <H2>The Explanation</H2>
        <P>
          Picture a group of friends trying to guess whether a photo is a cat or a dog. None of them are experts, but each one notices one small thing. One looks at the ears. One checks the nose. Another looks at the shape. Another looks at the eyes. Each person yells out their guess. These guesses get passed along to someone who's learned over time whose opinion to trust more. Eventually, all these guesses add up to one answer: it's a cat.
        </P>
        <P>
          That's basically what a neural network does. It's made of a bunch of tiny decision-makers called neurons, stacked in layers. Each neuron looks for one small pattern. As you move deeper into the network, those small patterns combine into bigger ones — lines become shapes, shapes become ears, and ears become "yes, that's a cat."
        </P>
        <P>
          The network learns the same way we do: it guesses, someone tells it whether it was right or wrong, and it adjusts. Do that millions of times, and it gets really good at guessing.
        </P>
        <P>
          Each connection between neurons has a <strong>weight</strong> — basically a number for how much that neuron's opinion should matter. Learning is really just the network tweaking these numbers over and over. When it gets something wrong, it works backwards through the layers, figuring out which connections caused the mistake and nudges them a bit. That process is called <strong>backpropagation</strong>, but the "figuring out who to blame and correcting it" idea is really the point.
        </P>

        <H2>Why I Built It This Way</H2>
        <P>
          I approached this the way we're taught to teach, not the way you'd explain something to another engineer.
        </P>
        <P>
          I started with a story, not a definition. The friend-group scenario came first because narrative gives people something to hang the concept on, rather than a definition they have to work to connect to anything real.
        </P>
        <P>
          I went simple before technical. The analogy came first, and the vocabulary — weights, backpropagation — came after, once the idea was already familiar. Foundation before complexity, instead of front-loading jargon and hoping it lands.
        </P>
        <P>
          I broke it into two chunks on purpose: one for the core idea, one for the mechanics. So no one has to absorb everything at once. Someone can stop after the first part and still walk away understanding what a neural network is.
        </P>
        <P>
          I also picked an analogy people already have intuition for. Everyone understands a group of people combining small observations into one decision, so the concept connects to something familiar instead of feeling brand new.
        </P>

        <H2>Working With AI on This</H2>
        <P>
          I used Claude as a thinking partner to develop the analogy — going back and forth to find something better than the overused "brain" comparison, which honestly never explains anything. I asked it for more relatable comparisons, checked the technical parts for accuracy, and had it cut anything that sounded like textbook or corporate training material.
        </P>
        <P>
          I also asked it to hold off on introducing terms like <em>weights</em> and <em>backpropagation</em> until after the main idea had landed, so the simple version wouldn't get buried in vocabulary the reader wouldn't know yet.
        </P>

        {/* AI Disclosure */}
        <div className="mt-14 pt-6 border-t border-gray-100">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            AI use disclosure: This explanation was developed collaboratively with Claude (Anthropic), used as a drafting and critique partner. I directed the analogy selection, structure, and pacing, and iterated with Claude to refine accuracy and cut jargon.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  )
}
