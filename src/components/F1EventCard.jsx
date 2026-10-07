const CATEGORY_LABELS = {
  'fan-zone': 'Fan Zone 🏁',
  'party': 'Party 🎉',
  'live-show': 'Live Show 🎤',
  'car-show': 'Car Show 🚗',
  'shop': 'Shop 🛒',
  'meetup': 'Meetup 🤝',
  'education': 'Education 🧠',
  'networking': 'Networking 🖋️',
  'on-site': 'On-Site 🏎️',
}

export default function F1EventCard({ event, onClick, isSelected }) {
  const timeLabel = event.startTime && event.endTime
    ? `${event.startTime} – ${event.endTime}`
    : event.startTime === 'ALL DAY'
    ? 'All Day'
    : event.startTime
    ? event.startTime
    : event.endTime
    ? `Until ${event.endTime}`
    : ''

  return (
    <button
      onClick={() => onClick(event.id)}
      className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-colors hover:bg-gray-50 ${
        isSelected ? 'bg-red-50 border-l-2 border-l-red-500' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <span className="text-xs text-gray-400 font-mono">{timeLabel}</span>
        <span className={`text-xs px-1.5 py-0.5 rounded font-medium shrink-0 ${
          event.cost === 'free' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
        }`}>
          {event.cost === 'free' ? 'Free' : 'Paid'}
        </span>
      </div>
      <p className="text-sm font-semibold text-gray-900 leading-tight mb-1">
        {event.featured && <span className="text-amber-500 mr-1">★</span>}
        {event.name}
      </p>
      <p className="text-xs text-gray-400 mb-2">{event.venue}</p>
      <div className="flex flex-wrap gap-1">
        {event.categories.slice(0, 3).map(cat => (
          <span key={cat} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
            {CATEGORY_LABELS[cat] ?? cat}
          </span>
        ))}
        {event.lat === null && (
          <span className="text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">
            Location TBD
          </span>
        )}
      </div>
    </button>
  )
}
