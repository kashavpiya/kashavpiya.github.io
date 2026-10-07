import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const REFERENCES = [
  'ACLU of Wisconsin. (2025, December 2). Police surveillance is ripe for abuse. https://www.aclu-wi.org/news/what-the-flock-police-surveillance-is-ripe-for-abuse/',
  'American Civil Liberties Union. (n.d.). Fight creepy ALPR cameras. Retrieved July 7, 2026, from https://www.aclu.org/campaigns-initiatives/get-the-flock-out',
  'Class Law Group. (2026, April 3). Flock Safety license plate reader cameras lawsuit. https://www.classlawgroup.com/flock-safety-license-plate-reader-cameras-lawsuit',
  'Costanza-Chock, S., Harvey, E., Raji, I. D., Czernuszenko, M., & Buolamwini, J. (2022). Who audits the auditors? Recommendations from a field scan of the algorithmic auditing ecosystem. In 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT \'22). https://doi.org/10.1145/3531146.3533213',
  'Electronic Frontier Foundation. (2026, June). Are your local police using Flock Safety ALPRs to scan for immigrants? https://www.eff.org/deeplinks/2026/06/are-your-local-police-using-flock-safety-alprs-scan-immigrants',
  'Fabbri, D., & LeFevre, K. (2011). Explanation-based auditing. Proceedings of the VLDB Endowment, 5(1), 1–12. https://doi.org/10.14778/2047485.2047586',
  'Futurism. (2026, July). US Air Force engineer charged with sawing down Flock surveillance cameras receives thousands of dollars from supporters across the country. https://futurism.com/future-society/air-force-engineer-flock-surveillance-support-legal-gofundme',
  'Institute for Justice. (2026). Police have reportedly used license plate readers to stalk romantic interests at least 21 times in recent years. https://ij.org/police-have-reportedly-used-license-plate-readers-to-stalk-romantic-interests-at-least-14-times-in-recent-years/',
  'Kaminski, M. E. (2019). Binary governance: Lessons from the GDPR\'s approach to algorithmic accountability. Southern California Law Review, 92(6), 1529–1616.',
  'Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. Advances in Neural Information Processing Systems, 25, 1097–1105.',
  'LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. Nature, 521(7553), 436–444. https://doi.org/10.1038/nature14539',
  'LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). Gradient-based learning applied to document recognition. Proceedings of the IEEE, 86(11), 2278–2324. https://doi.org/10.1109/5.726791',
  'Menon, A. K., Jiang, X., Kim, J., Vaidya, J., & Malin, B. (2014). Detecting inappropriate access to electronic health records using collaborative filtering. Machine Learning, 95(1), 87–101. https://doi.org/10.1007/s10994-013-5376-1',
  'National Public Radio. (2026, February 17). Why some cities are canceling Flock license plate reader contracts. https://www.npr.org/2026/02/17/nx-s1-5612825/flock-contracts-canceled-immigration-survillance-concerns',
  'Shashirangana, J., Padmasiri, H., Meedeniya, D., & Perera, C. (2021). Automated license plate recognition: A survey on methods and techniques. IEEE Access, 9, 11203–11225. https://doi.org/10.1109/ACCESS.2020.3047929',
  'SlashGear. (2026, June). Flock camera controversy: The type of data collected (and why it\'s a problem). https://www.slashgear.com/2196688/flock-camera-controversy-type-of-data-collected-why-problem/',
  'Tech Times. (2026, June 29). Flock Safety crosses 100,000 cameras as 53 cities cancel over unauthorized federal data access. https://www.techtimes.com/articles/319317/20260629/flock-safety-crosses-100000-cameras-53-cities-cancel-over-unauthorized-federal-data-access.htm',
  'TechCrunch. (2026, February 23). Americans are destroying Flock surveillance cameras. https://techcrunch.com/2026/02/23/americans-are-destroying-flock-surveillance-cameras/',
  'The Marshall Project. (2026, March 7). How police cameras are open to officer\'s abuse. https://www.themarshallproject.org/2026/03/07/police-camera-wisconsin-california-colorado',
  'The New Republic. (2026, February 27). The nationwide revolt against Flock Safety cameras. https://newrepublic.com/article/206992/flock-safety-cameras-alpr-deflock-resistance-nationwide',
  'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30, 5998–6008.',
  '404 Media. (2026). Cops keep getting arrested for using Flock to stalk people. https://www.404media.co/cops-keep-getting-arrested-for-using-flock-to-stalk-people/',
  'Yahoo News. (2026). Vandals target Flock cameras. Police use Flock to catch them. https://www.yahoo.com/news/articles/vandals-target-flock-cameras-police-130000159.html',
]

function H2({ children }) {
  return <h2 className="text-xl font-extrabold tracking-tight text-gray-900 mt-12 mb-4">{children}</h2>
}

function H3({ children }) {
  return <h3 className="text-base font-bold text-gray-800 mt-8 mb-3 italic">{children}</h3>
}

function P({ children }) {
  return <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">{children}</p>
}

export default function FlockSafetyReport() {
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
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-4">Case Study · Artifact 2</p>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-6">
          From Deep Learning to Real-World Surveillance: A Flock Safety Case Study
        </h1>

        <div className="h-0.5 w-12 bg-green-600 mb-10" />

        {/* Abstract */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Abstract</p>
          <p className="text-[14px] text-gray-600 leading-[1.8]">
            This case study looks at automated license plate recognition (ALPR) as a real-world application of deep learning and image recognition using Flock Safety, the largest ALPR provider in the United States, as the primary example. It first explains how convolutional neural networks make this kind of unstructured high-volume image recognition possible then shifts to examine how the technology has actually been used since its nationwide rollout. The report documents three major areas of concern: the use of local camera data for federal immigration enforcement without the knowledge or consent of the cities that install the cameras, dozens of documented cases of individual police officers using the system to stalk romantic partners and other private citizens, weak transparency and oversight structures that have allowed both of these problems to persist largely undetected until victims or journalists uncovered them independently. It also covers the company's response to these incidents, the growing wave of contract cancellations and lawsuits against Flock, and the more informal public backlash that has included vandalism of camera hardware. The report concludes that the technology's core deep learning model performs its narrow task well and that the ethical failures identified here are failures of governance and accountability rather than failures of the underlying AI system.
          </p>
        </div>

        {/* Body */}
        <H2>Deep Learning and Image Recognition</H2>
        <P>
          Deep learning is a subset of machine learning that uses neural networks with many layers to automatically learn patterns directly from raw data without a person having to manually define what to look for first (LeCun et al., 2015). Image recognition is one of the clearest real-world uses of this idea. A photograph is just a grid of pixels with no built-in labels. For what is in it a convolutional neural network or CNN is a type of deep learning model built specifically to process images. The architecture was first introduced by LeCun et al. (1998), who showed that a layered network trained end-to-end with back propagation could learn to recognize handwritten digits directly from raw pixel data without hand-built feature extraction. The approach passes an image through many layers, each one learning to detect something slightly more complex than the last. The first layer picks up on the simple edges and colors, later layers combine those into shapes and textures and the deepest layer can recognize full objects.
        </P>
        <P>
          CNN remained a relatively narrow research tool until Krizhevsky et al. (2012) introduced AlexNet, a deep CNN that dramatically outperformed traditional computer vision methods on the ImageNet large-scale image classification benchmark. That result is widely credited with triggering the modern deep learning era since it proved that, given enough labeled data and enough compute, a deep neural network could learn better visual features on its own than a person could hand engineer (LeCun et al., 2015).
        </P>
        <P>
          This approach works well for image recognition for a few different reasons. First, the data is unstructured. Nobody can hand a model a spreadsheet of predefined license plate features the way they could for something like predicting customer churn. The model has to learn what a plate looks like on its own across every lighting condition, different angles, and different levels of blur. Second, these systems typically have a huge amount of training data available, which is exactly the kind of fuel deep learning needs to work well. Third, the patterns involved are generally complex and hard to hand engineer, which is why traditional rule-based approaches to license plate recognition were largely replaced by deep learning-based systems once enough label data and compute became available (Shashirangana et al. 2021).
        </P>
        <P>
          This is exactly the kind of problem deep learning was built for and it is exactly the technology behind one of the more significant and controversial AI deployments happening at the current moment: Automated License Plate Recognition or ALPR and specifically the system built by a company called Flock Safety.
        </P>

        <H2>From the Concept to Flock Safety</H2>
        <P>
          Flock Safety is a private company that builds automated license plate readers (ALPR) cameras. The cameras use AI-powered image recognition to photograph every vehicle that passes, read their license plate, and log the details like the vehicle's color, make, and body style into what the company calls a vehicle fingerprint (American Civil Liberties Union, n.d.). Flock's cameras run continuously and do not rely on a human reviewing each image. A deep learning model trained on large sets of vehicle images automatically detects and reads plates and vehicle characteristics in real time (SlashGear, 2026), the same basic CNN-style process described above, just applied at a massive nationwide scale. By mid-2026 Flock's network had grown to more than 100,000 cameras working with thousands of law enforcement agencies across the country (Tech Times, 2026). Once a plate is captured it is uploaded to a searchable cloud database. Police departments that subscribe to Flock can search this database and in many cases can search cameras belonging to other cities and states, not just their own jurisdiction. This nationwide search feature is central to both the technology's appeal to law enforcement and to most of the controversy described below.
        </P>
        <P>
          From a purely technical standpoint Flock's system is a genuinely impressive application of deep learning. It solves a real image recognition problem at a scale most computer vision projects never reached. The technical performance of a model, how accurately it reads a plate, is a completely separate question from whether the system it powers is safe, accountable, and trustworthy once it is deployed in the real world. This is where this case study shifts focus. The rest of this report looks at what has actually happened since Flock's camera spread across the country: who has been harmed, how the company has responded, and how the public has been pushing back.
        </P>

        <H2>Ethical Concern 1: Mission Creep into Immigration Enforcement</H2>
        <P>
          Flock cameras were originally marketed as a tool to help recover stolen vehicles and solve local crimes. In practice, the data has increasingly been used for immigration enforcement, often without the knowledge of the local officials who approved the cameras in the first place. The Electronic Frontier Foundation found that local agencies using Flock commonly compare captured plates against a number of FBI hotlists, including a category tied to immigration enforcement on behalf of Immigration and Customs Enforcement (Electronic Frontier Foundation, 2026). In Dayton, Ohio, an audit found that city camera data had been searched more than 7,100 times for immigration enforcement purposes, even though this was explicitly against the city's own written policy (Tech Times, 2026). In San Jose, public records suggested police had granted a kind of side-door access that led federal agencies to search under labels like "CBP" and "ICE" (Class Law Group, 2026). California's Attorney General filed a lawsuit against the city of El Cajon in 2025 for allegedly and systematically violating state law by sharing Flock data with out-of-state and federal agencies (Class Law Group, 2026). This pattern, of cities and police departments discovering after the fact that their data had been accessed far more broadly than they understood or proved, has been one of the biggest drivers of the backlash against the company (National Public Radio, 2026).
        </P>

        <H2>Ethical Concern 2: Officer Misuse and Stalking</H2>
        <P>
          Perhaps the most disturbing pattern to come out of Flock's rollout is how often individual officers have used the system to track people in their personal lives rather than for any legitimate investigation. An ongoing review by the Institute for Justice has documented at least 21 cases nationwide allegedly using ALPR data to track romantic partners, exes, or people they had no official reason to be watching (Institute for Justice, 2026). The details of these cases are hard to read past. A Milwaukee officer allegedly searched his girlfriend's plate and her ex's plate nearly 180 times over two months before his conduct came to light (The Marshall Project, 2026). A police chief in Sedgwick, Kansas, used the system more than 200 times over four months to track his ex-girlfriend and her new boyfriend, at one point following them in his own patrol car. He lost his law enforcement certification and was sentenced to probation (ACLU of Wisconsin, 2025). In Orange City, Florida, an officer ran his ex-girlfriend's plate at least 69 times and her parents' plates dozens more and was still doing it in front of a colleague who warned him that he could get in trouble (404 Media, 2026). A Joplin, Missouri officer reportedly ran one woman's plate almost 400 times, logging vague justifications like 'warrants' with no case number attached (404 Media, 2026).
        </P>
        <P>
          What makes this pattern especially concerning is how these cases were discovered. Almost none were caught by internal reviewers. Most surfaced only because the victims themselves searched their own plates on a public audit tool and noticed the pattern or because a co-worker eventually said something (Institute for Justice, 2026). Flock has pointed to its audit logs as a safeguard since a search cannot be edited after the fact once it is logged (The Marshall Project, 2026). But an audit log only helps after the fact and only if someone actually goes looking through it. For most of the victims nobody was looking until they went looking themselves.
        </P>

        <H2>Ethical Concern 3: Weak Oversight and Retaliation Against Scrutiny</H2>
        <P>
          Beyond individual misuse, there is a broader transparency problem. A Virginia State Review found that dozens of agencies using ALPR technology had taken no public notice steps despite a state law requiring it and that some agencies were sharing data out of state or granting continuous federal access in direct violation of state law (The Marshall Project, 2026). In Wisconsin, one police department logged nearly 1,900 searches over six months with the only listed justification being the single word "investigation," with no further detail about who was being searched or why (ACLU of Wisconsin, 2025). Rather than responding to this kind of scrutiny with more transparency, Flock has in some cases pushed the other way. The company has begun redacting officer names from audit logs, which privacy advocates argue will make future misuse harder to catch, not easier (Yahoo News, 2026). When a researcher published audit logs obtained through public records requests on his own website, a third party contacted his web host, claiming the data was both a violation of Flock's intellectual property and a threat to public safety. An argument privacy advocates viewed as an attempt to suppress accountability reporting rather than protect anyone (Yahoo News, 2026).
        </P>

        <H2>Corporate Accountability: How Has Flock Responded?</H2>
        <P>
          Flock's public position is that misuse represents a small fraction of its overall usage and that its audit logging is itself proof the system is accountable since bad searches leave a permanent record (The Marshall Project, 2026). The company has made some real changes in response to specific scandals, including adding search filters that block queries tied to keywords like 'abortion' or 'immigration' in states where that kind of search is restricted by law (Yahoo News, 2026). The critics point out that these changes have consistently come only after a scandal became public, not before. Some local governments have started writing financial penalties directly into their Flock contracts. Arlington Heights, Illinois, for example, negotiated a contract with penalties between $22,000 and $70,000 per incident of unauthorized data disclosure (The Marshall Project, 2026). The fact that cities feel the need to write financial penalties into a vendor contract just to keep their own residence data from leaking out to other agencies say a lot about how much trust has eroded.
        </P>

        <H2>Public Resistance: From Lawsuits to Vandalism</H2>
        <P>
          The backlash against Flock has played out on two very different tracks: formal legal and political pushbacks, and increasingly, direct physical action against the cameras themselves.
        </P>

        <H3>Contract cancellations and legislation</H3>
        <P>
          As of mid-2026 more than 50 municipalities across at least 20 states have ended or rejected Flock contracts, with most of those decisions happening in just the prior six months (Tech Times, 2026). Amazon's Ring ended its own partnership with Flock in February 2026, following the public backlash over an advertisement highlighting the scale of the camera network (Tech Times, 2026). Some cities that pulled out, like Denver, specifically cited concern that federal agents could access their data for immigration arrests even after switching to competitors without a nationwide search feature (The Marshall Project, 2026). At the same time, not every city is walking away. Some, like Dunwoody, Georgia, have renewed their contracts and others have signed new larger agreements, including one Colorado city that signed a three-year $600,000 contract that adds drone surveillance on top of the existing camera network (Tech Times, 2026).
        </P>

        <H3>Legal challenges</H3>
        <P>
          Multiple lawsuits are underway. California's Attorney General sued El Cajon over its data-sharing practices (Class Law Group, 2026). A separate class action alleges Flock's practices violate California residents' privacy rights on a mass scale (Class Law Group, 2026). The Institute for Justice is representing plaintiffs in Norfolk, Virginia, and San Jose, California, who argued that warrantless always-on plate tracking violates the Fourth Amendment (Institute for Justice, 2026). So far, courts have been split and cautious. A federal court in Norfolk ruled in January 2026 that photographing a plate on a public road does not itself count as a Fourth Amendment search. Though the judge noted that could change if camera density keeps increasing to the point of tracking someone everywhere they go (Tech Times, 2026). Civil liberties groups point instead to Carpenter v. United States (2018), where the Supreme Court ruled that pulling a week of someone's cell phone location history did count as a search, precisely because of how much detailed movement history reveals about a person's life (Tech Times, 2026).
        </P>

        <H3>Direct action and vandalism</H3>
        <P>
          Alongside the legal fight, a more informal resistance movement has grown around the crowdsourced mapping project DeFlock, which has logged tens of thousands of camera locations and lists dozens of local groups organizing against the technology (The New Republic, 2026). Some of this activism has crossed into outright destruction of the cameras themselves. In Suffolk, Virginia, a man was criminally charged with more than a dozen felony counts after allegedly disassembling 13 cameras over several months. A crowdfunding page set up for his legal defense quickly raised thousands of dollars from supporters around the country (Futurism, 2026). In Eugene and Springfield, Oregon, several cameras were cut down and one was spray painted with a note left at the scene expressing satisfaction at seeing the cameras destroyed (TechCrunch, 2026). Similar incidents have been reported in South Carolina, California, Connecticut, and Illinois, and police audit logs show a broader pattern of tampering, gunfire damage, and outright destruction beyond the cases that made national news (Yahoo News, 2026). Flock has publicly condemned the destruction of its equipment and said it supports police investigating and prosecuting these cases (Yahoo News, 2026). In something of an irony, some of that same investigative work has used Flock's own camera network to help identify people accused of destroying Flock cameras (Yahoo News, 2026).
        </P>

        <H2>Weighing the Risks</H2>
        <P>
          ALPR technology did not set out to violate anyone's rights. Flock's stated mission, helping police recover stolen vehicles and solve crime faster, is a legitimate public safety goal and no fair reading of this case study should pretend otherwise. But good intentions do not make a system ethical. What matters is what the system actually does once it is deployed. What it actually does is track the location of ordinary people at scale without a warrant and hand that information to anyone with a badge and a login, including people who have used it to stalk exes and agencies that have used it for purposes local governments explicitly did not authorize.
        </P>
        <P>
          That is not a minor implementation flaw. It is a direct violation of the reasonable expectation of privacy that the Fourth Amendment is meant to protect. The fact that courts have not yet caught up to that reality does not make the practice ethical. It just means the law is lagging behind the technology, as it often does. A system that logs every car that passes a camera, indefinitely searchable nationwide, is not a neutral tool that happens to get misused sometimes. It is a surveillance infrastructure that makes certain harms — mission creep into immigration enforcement, officers' stalking, and unaccountable data sharing — close to inevitable because it hands broad, low-friction access to thousands of individuals and predictably some of them abuse it. Dozens of documented stalking cases and thousands of documented policy-violating searches are not edge cases. They are exactly what you would expect from this design and the fact that most were caught only because a victim happened to go looking is itself evidence that the real number of people harmed is higher than what has been publicly documented.
        </P>
        <P>
          The company's pattern of responding to scandal after the fact, rather than designing for accountability from the start, and its documented resistance to outside transparency efforts, makes it hard to take the "our logs prove they are accountable" argument at face value. Audit logs that only get reviewed after a victim complains are not accountability. They are a paper trail that exists mainly to protect the company from liability not to protect the people being tracked. Whatever the original intent behind this technology, the way it has actually been built and deployed treats the privacy and safety of the people being surveilled as an afterthought, not a design requirement. That is the core ethical failure of this case and it deserves to be named plainly rather than softened into "concerns" or "questions".
        </P>

        <H2>Recommendations</H2>
        <P>
          Naming the problem clearly does not mean nothing can be done about it. The following recommendations are aimed at making systems like this one actually respect the rights of the people they monitor and not just add another layer of policy language that agencies can quietly ignore, as they have already shown they will.
        </P>
        <P>
          Purpose limitation has to be enforced by the system not promised in a policy document. Every documented instance of mission creep in this report — Dayton's 7,100+ searches for immigration purposes, San Jose's alleged side-door federal access — happened despite a written policy that supposedly prohibited it. A policy an operator can silently violate is not a safeguard; it is a liability shield. Legal scholarship on the GDPR's purpose limitation principle argues that real accountability requires binding a system's technical design to its stated purpose (Kaminski, 2019). Concretely that means a search tagged for a local vehicle theft case should be technically incapable of being reused for an immigration query — not merely against the rules.
        </P>
        <P>
          People being surveilled deserve active protection not a log they have to check themselves. It should never have taken a private citizen manually searching her own license plate to discover that a police officer had looked her up 180 times. That failure mode is unacceptable on its face. Fields like healthcare have already built and validated tools for exactly this problem using models that flag anomalous unjustified access to sensitive records as it happens rather than waiting for a victim to stumble onto it (Fabbri & LeFevre, 2011; Menon et al., 2014). There is no good excuse for a nationwide surveillance network handling location data on millions of private citizens to have a weaker safety net than a hospital record system.
        </P>
        <P>
          Self-policing has failed and should stop being treated as effective. Flock's own account of how often its system is misused and its own audit logs are not adequate accountability structures for a company that has, in at least one case, pressured a host to take down independently published audit data. Independent, standardized, third-party audits — published on a regular public schedule rather than only after a scandal forces the issue — are the baseline requirements here, not an aspirational extra (Costanza-Chock et al., 2022). Communities being surveilled should have a real say in how that audit process works, not just a press release after the fact.
        </P>
        <P>
          This will cost something, and that cost is not a reason to skip it. Independent audits, technical purpose limitation controls, and active misuse detection all require real investment, and for a for-profit vendor, there is little natural incentive to build tools that would surface more of its own products' problems. That is a genuine obstacle, not a reason to settle for the status quo. The right response to "this is expensive and inconvenient" is to build the regulatory and legislative pressure to require it anyway — the same way seat belts, food safety inspections, and financial audits were all industry inconveniences before they became baseline expectations. The absence of a cheap fix does not make the current system acceptable. It just means the fix has to be pushed for deliberately rather than waited for.
        </P>

        <H2>Conclusion</H2>
        <P>
          This case study started with a simple technical idea. Deep learning lets a system learn patterns directly from raw data instead of relying on a person to define those patterns by hand. Convolutional neural networks proved this could work for images, and Flock Safety is a real-world demonstration of just how powerful that idea is at scale, reading millions of plates a day with no human reviewer in the loop. That same underlying principle — layered neural networks learning representations directly from raw input — is also what powers the large language models that have become part of daily life over the past years. A transformer-based LLM is not reading a license plate; it is predicting the next piece of text in a sequence, but the core idea is the same: deep, layered networks train on huge amounts of data, learning patterns no person hand engineered (Vaswani et al., 2017). Flock's cameras and a chatbot answering a question are, at a technical level, cousins.
        </P>
        <P>
          That connection matters because the lesson from this case study is not really about license plates at all. It is about what happens when a genuinely powerful deep learning system gets deployed into the real world without the accountability structure to match its reach. The same risks apply to LLMs. A model that can write, summarize, and reason at scale is enormously useful for education, accessibility, medical research, scientific discovery, and countless tasks that were previously bottlenecked by human time and expertise. Usefulness and safety are not the same property, and a system's technical capability says nothing on its own about whether it is being deployed responsibly with real transparency, consent, and oversight for the people it affects. Flock's cameras are good at reading plates. The company's actual deployment shows what happens when governance does not keep pace with capability.
        </P>
        <P>
          Flock is already living with the consequences of that gap. More than 50 cities have cancelled or rejected contracts. Lawsuits are working through multiple state and federal courts, and a real organized public resistance movement has grown around the technology. Some of it is formal and legal. Some of it is literal: cameras being cut down in the streets. That is what happens when a company breaks the basic ethical bargain a surveillance tool depends on — that the public trusts it will be used narrowly, transparently, and with limits. Once that trust is broken, especially through documented stalking cases and undisclosed data sharing with federal immigration authorities, it does not come back with a press release or an added search filter. Public trust is expensive to earn and cheap to lose, and Flock's current position — with cities pulling out faster than new ones are signing on in several regions — is the direct, predictable price of having treated accountability as an afterthought rather than a design requirement from day one. Any company or agency deploying a powerful AI system, an LLM, or anything else, should read that as a real lesson. The cost of losing public trust is not abstract, and it is far harder to win back than it was to lose.
        </P>
        <P>
          The optimistic version of this conclusion is also true and worth stating plainly. Deep learning, whether in a CNN reading a license plate or an LLM answering a question, is not inherently harmful. It is a genuinely transformative tool. Used well — with real purpose limitation, active oversight, and accountability built in from the start rather than bolted on after a scandal — it can do enormous good. The Flock case is not an argument against deep learning. It is an argument that the technical achievement of building a powerful model is only half the job. The other half is making sure that power is used in a way that respects the rights and safety of the people it touches. It is not optional. It is not something that technology solves by itself, but it has to be designed for, deliberately, every time.
        </P>

        {/* References */}
        <div className="mt-14 pt-8 border-t border-gray-100">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">References</p>
          <ul className="flex flex-col gap-3">
            {REFERENCES.map((ref, i) => (
              <li key={i} className="text-[12px] text-gray-500 leading-relaxed">{ref}</li>
            ))}
          </ul>
        </div>

        {/* AI Disclosure */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            AI use disclosure: Claude (Anthropic) was used to do background research on the topic. Wispr Flow was also used to dictate this report.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  )
}
