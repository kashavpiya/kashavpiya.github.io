import { useEffect, useRef, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'

const CATEGORY_COLORS = {
  'on-site': '#ef4444',
  'fan-zone': '#3b82f6',
  'party': '#a855f7',
  'live-show': '#f97316',
  'car-show': '#f97316',
  'shop': '#10b981',
  'meetup': '#10b981',
  'education': '#eab308',
  'networking': '#eab308',
}

function markerColor(categories) {
  for (const cat of categories) {
    if (CATEGORY_COLORS[cat]) return CATEGORY_COLORS[cat]
  }
  return '#6b7280'
}

function createVenueIcon(color, count) {
  if (count === 1) {
    return L.divIcon({
      className: '',
      html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.5)"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -12],
    })
  }
  return L.divIcon({
    className: '',
    html: `<div style="width:26px;height:26px;border-radius:50%;background:${color};border:2.5px solid #fff;box-shadow:0 1px 5px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;line-height:1">${count}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -17],
  })
}

function MapViewController({ selectedEventId, venueGroups, markerRefs }) {
  const map = useMap()
  useEffect(() => {
    if (!selectedEventId) return
    const group = venueGroups.find(g => g.events.some(e => e.id === selectedEventId))
    if (!group) return
    const marker = markerRefs.current.get(group.key)
    if (!marker) return
    map.flyTo([group.lat, group.lng], 15, { duration: 0.8 })
    setTimeout(() => marker.openPopup(), 900)
  }, [selectedEventId, map, venueGroups, markerRefs])
  return null
}

export default function F1Map({ events, selectedEventId, onMarkerClick }) {
  const markerRefs = useRef(new Map())

  const venueGroups = useMemo(() => {
    const byVenue = new Map()
    events.filter(e => e.lat !== null && e.lng !== null).forEach(e => {
      const key = `${e.lat},${e.lng}`
      if (!byVenue.has(key)) byVenue.set(key, {
        key,
        lat: e.lat,
        lng: e.lng,
        venue: e.venue,
        address: e.address,
        mapsUrl: e.mapsUrl,
        events: [],
      })
      byVenue.get(key).events.push(e)
    })
    return [...byVenue.values()]
  }, [events])

  return (
    <MapContainer
      center={[30.265, -97.748]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
        maxZoom={19}
      />
      {venueGroups.map(group => {
        const color = markerColor(group.events.flatMap(e => e.categories))
        return (
          <Marker
            key={group.key}
            position={[group.lat, group.lng]}
            icon={createVenueIcon(color, group.events.length)}
            ref={(m) => { if (m) markerRefs.current.set(group.key, m) }}
            eventHandlers={{ popupopen: () => onMarkerClick(group.events[0].id) }}
          >
            <Popup maxWidth={260}>
              <div style={{ minWidth: '210px' }}>
                <div style={{ fontWeight: '700', fontSize: '13px', lineHeight: '1.3', marginBottom: '2px' }}>
                  {group.venue}
                </div>
                {group.address && (
                  <div style={{ color: '#6b7280', fontSize: '11px', marginBottom: '8px' }}>
                    {group.address}
                  </div>
                )}
                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '6px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {group.events.map(e => (
                    <div key={e.id}>
                      <div style={{ fontSize: '12px', fontWeight: '600', lineHeight: '1.3', marginBottom: '1px' }}>
                        {e.featured && <span style={{ color: '#d97706' }}>★ </span>}
                        {e.name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                        {e.startTime && e.endTime
                          ? `${e.startTime} – ${e.endTime}`
                          : e.startTime === 'ALL DAY' ? 'All Day'
                          : e.startTime ?? ''}
                        {' · '}
                        <span style={{ color: e.cost === 'free' ? '#059669' : '#9ca3af', fontWeight: e.cost === 'free' ? '600' : 'normal' }}>
                          {e.cost === 'free' ? 'Free' : 'Paid'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {(group.mapsUrl ?? group.events[0]?.mapsUrl) && (
                  <a
                    href={group.mapsUrl ?? group.events[0].mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '12px', color: '#3b82f6', display: 'block', marginTop: '8px' }}
                  >
                    Get Directions →
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        )
      })}
      <MapViewController selectedEventId={selectedEventId} venueGroups={venueGroups} markerRefs={markerRefs} />
    </MapContainer>
  )
}
