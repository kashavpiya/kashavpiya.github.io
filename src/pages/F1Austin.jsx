import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { f1Events } from '../data/f1Events'
import F1Map from '../components/F1Map'
import F1EventCard from '../components/F1EventCard'

const DAYS = [
  { label: 'ALL', value: 'ALL' },
  { label: 'SUN 10/18', value: '2026-10-18' },
  { label: 'MON 10/19', value: '2026-10-19' },
  { label: 'TUE 10/20', value: '2026-10-20' },
  { label: 'WED 10/21', value: '2026-10-21' },
  { label: 'THU 10/22', value: '2026-10-22' },
  { label: 'FRI 10/23', value: '2026-10-23' },
  { label: 'SAT 10/24', value: '2026-10-24' },
  { label: 'SUN 10/25 🏁', value: '2026-10-25' },
]

const CATEGORY_FILTERS = [
  { label: 'Fan Zone 🏁', value: 'fan-zone' },
  { label: 'Party 🎉', value: 'party' },
  { label: 'Live Show 🎤', value: 'live-show' },
  { label: 'Car Show 🚗', value: 'car-show' },
  { label: 'Free 🆓', value: '__free__' },
  { label: '★ Featured', value: '__featured__' },
  { label: 'On-Site 🏎️', value: 'on-site' },
]

function matchesFilter(event, activeFilters) {
  if (activeFilters.size === 0) return true
  return [...activeFilters].every(f => {
    if (f === '__free__') return event.cost === 'free'
    if (f === '__featured__') return event.featured === true
    return event.categories.includes(f)
  })
}

export default function F1Austin() {
  const [selectedDay, setSelectedDay] = useState('ALL')
  const [activeFilters, setActiveFilters] = useState(new Set())
  const [selectedEventId, setSelectedEventId] = useState(null)

  const filteredEvents = useMemo(() => {
    return f1Events.filter(event => {
      const dayMatch = selectedDay === 'ALL' || event.date === selectedDay
      const catMatch = matchesFilter(event, activeFilters)
      return dayMatch && catMatch
    })
  }, [selectedDay, activeFilters])

  function toggleFilter(value) {
    setActiveFilters(prev => {
      const next = new Set(prev)
      if (next.has(value)) next.delete(value)
      else next.add(value)
      return next
    })
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50 text-gray-900 overflow-hidden">
      {/* Header */}
      <header className="flex items-center gap-4 px-4 py-3 bg-white border-b border-gray-200 shrink-0 shadow-sm">
        <Link to="/" className="text-gray-400 hover:text-gray-700 transition-colors text-sm">
          ← Back
        </Link>
        <div>
          <h1 className="text-base font-bold leading-tight text-gray-900">F1 Austin 2026 🏎️</h1>
          <p className="text-xs text-gray-400">Race Week Events · Oct 18–27</p>
        </div>
        <span className="ml-auto text-xs font-medium text-gray-400">{filteredEvents.length} events</span>
      </header>

      {/* Filters */}
      <div className="shrink-0 bg-white border-b border-gray-200 px-4 py-2 space-y-2">
        <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {DAYS.map(d => (
            <button
              key={d.value}
              onClick={() => setSelectedDay(d.value)}
              className={`shrink-0 text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                selectedDay === d.value
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700 bg-white'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {CATEGORY_FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => toggleFilter(f.value)}
              className={`shrink-0 text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                activeFilters.has(f.value)
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700 bg-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        {/* Map — top on mobile, right on desktop */}
        <div className="h-[45vh] md:h-full md:flex-1 order-1 md:order-2">
          <F1Map
            events={filteredEvents}
            selectedEventId={selectedEventId}
            onMarkerClick={setSelectedEventId}
          />
        </div>

        {/* Sidebar — bottom on mobile, left on desktop */}
        <div className="md:w-80 lg:w-96 order-2 md:order-1 overflow-y-auto bg-white border-r border-gray-200">
          {filteredEvents.length === 0 ? (
            <div className="p-6 text-center text-gray-400 text-sm">
              No events match these filters.
            </div>
          ) : (
            filteredEvents.map(event => (
              <F1EventCard
                key={event.id}
                event={event}
                onClick={setSelectedEventId}
                isSelected={selectedEventId === event.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
