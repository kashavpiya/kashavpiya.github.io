import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

import MarkerClusterGroup from 'react-leaflet-cluster'
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

function createIcon(color) {
  return L.divIcon({
    className: '',
    html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.5)"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  })
}


function MapViewController({ selectedEventId, markerRefs }) {
  const map = useMap()
  useEffect(() => {
    if (!selectedEventId) return
    const marker = markerRefs.current.get(selectedEventId)
    if (!marker) return
    const { lat, lng } = marker.getLatLng()
    map.flyTo([lat, lng], 15, { duration: 0.8 })
    setTimeout(() => marker.openPopup(), 900)
  }, [selectedEventId, map, markerRefs])
  return null
}

export default function F1Map({ events, selectedEventId, onMarkerClick }) {
  const markerRefs = useRef(new Map())
  const mappableEvents = events.filter(e => e.lat !== null && e.lng !== null)

  return (
    <MapContainer
      center={[30.25, -97.71]}
      zoom={11}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
        maxZoom={19}
      />
      <MarkerClusterGroup chunkedLoading>
        {mappableEvents.map(event => (
          <Marker
            key={event.id}
            position={[event.lat, event.lng]}
            icon={createIcon(markerColor(event.categories))}
            ref={(m) => { if (m) markerRefs.current.set(event.id, m) }}
            eventHandlers={{ popupopen: () => onMarkerClick(event.id) }}
          >
            <Popup>
              <div style={{ minWidth: '200px' }}>
                {event.featured && <div style={{ color: '#d97706', fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>★ ATXGPC Featured</div>}
                <div style={{ fontWeight: 'bold', fontSize: '13px', lineHeight: '1.3', marginBottom: '4px' }}>{event.name}</div>
                <div style={{ color: '#6b7280', fontSize: '12px', marginBottom: '2px' }}>{event.venue}</div>
                <div style={{ color: '#9ca3af', fontSize: '11px', marginBottom: '6px' }}>
                  {event.startTime && event.endTime
                    ? `${event.startTime} – ${event.endTime}`
                    : event.startTime === 'ALL DAY' ? 'All Day'
                    : event.startTime ?? `Until ${event.endTime}`}
                  {' · '}
                  <span style={{ color: event.cost === 'free' ? '#10b981' : '#9ca3af', fontWeight: event.cost === 'free' ? '600' : 'normal' }}>
                    {event.cost === 'free' ? 'Free' : 'Paid'}
                  </span>
                </div>
                {event.mapsUrl && (
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '12px', color: '#3b82f6' }}
                  >
                    Get Directions →
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <MapViewController selectedEventId={selectedEventId} markerRefs={markerRefs} />
    </MapContainer>
  )
}
