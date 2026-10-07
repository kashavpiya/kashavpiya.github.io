import { useEffect, useRef, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from 'react-leaflet'
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

function MapViewController({ selectedEventId, venueGroups, markerRefs, flyToUser }) {
  const map = useMap()

  // Expose fly-to-user via callback ref
  useEffect(() => {
    flyToUser.current = (lat, lng) => map.flyTo([lat, lng], 16, { duration: 1 })
  }, [map, flyToUser])

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
  const flyToUser = useRef(null)
  const watchIdRef = useRef(null)
  const [userLocation, setUserLocation] = useState(null)
  const [locating, setLocating] = useState(false)
  const [locationError, setLocationError] = useState(null)

  function handleLocate() {
    if (!navigator.geolocation) {
      setLocationError('Geolocation not supported on this device')
      return
    }
    setLocating(true)
    setLocationError(null)

    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current)
    }

    let firstFix = true
    watchIdRef.current = navigator.geolocation.watchPosition(
      pos => {
        const { latitude: lat, longitude: lng } = pos.coords
        setUserLocation({ lat, lng })
        setLocating(false)
        if (firstFix) {
          firstFix = false
          flyToUser.current?.(lat, lng)
        }
      },
      () => {
        setLocationError('Could not access location — check your browser permissions')
        setLocating(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) navigator.geolocation.clearWatch(watchIdRef.current)
    }
  }, [])

  const venueGroups = useMemo(() => {
    const byVenue = new Map()
    events.filter(e => e.lat !== null && e.lng !== null).forEach(e => {
      const key = `${e.lat},${e.lng}`
      if (!byVenue.has(key)) byVenue.set(key, {
        key, lat: e.lat, lng: e.lng,
        venue: e.venue, address: e.address, mapsUrl: e.mapsUrl,
        events: [],
      })
      byVenue.get(key).events.push(e)
    })
    return [...byVenue.values()]
  }, [events])

  return (
    <div className="relative h-full w-full">
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

        {userLocation && (
          <>
            {/* Outer pulse ring */}
            <CircleMarker
              center={[userLocation.lat, userLocation.lng]}
              radius={14}
              fillColor="#3b82f6"
              fillOpacity={0.15}
              color="#3b82f6"
              weight={1}
              interactive={false}
            />
            {/* Inner dot */}
            <CircleMarker
              center={[userLocation.lat, userLocation.lng]}
              radius={7}
              fillColor="#3b82f6"
              fillOpacity={1}
              color="#fff"
              weight={2.5}
              interactive={false}
            />
          </>
        )}

        <MapViewController
          selectedEventId={selectedEventId}
          venueGroups={venueGroups}
          markerRefs={markerRefs}
          flyToUser={flyToUser}
        />
      </MapContainer>

      {/* Locate me button */}
      <button
        onClick={handleLocate}
        title="Show my location"
        className="absolute bottom-8 right-3 z-[1000] bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        {locating ? (
          <span className="text-gray-400 text-xs font-bold">…</span>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={userLocation ? '#3b82f6' : '#374151'} strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          </svg>
        )}
      </button>

      {locationError && (
        <div className="absolute bottom-20 right-3 z-[1000] bg-white border border-red-200 text-red-600 text-xs px-3 py-2 rounded-lg shadow-md max-w-48 text-center">
          {locationError}
        </div>
      )}
    </div>
  )
}
