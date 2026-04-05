export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Kashav Piya</p>
        <div className="flex gap-6">
          {[
            { label: 'GitHub',   href: 'https://github.com/kashavpiya' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kashavpiya/' },
            { label: 'arXiv',   href: 'https://arxiv.org/abs/2301.00646' },
            { label: 'IEEE',    href: 'https://ieeexplore.ieee.org/abstract/document/9666731/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-green-600 transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
