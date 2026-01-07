"use client"
import dynamic from "next/dynamic"
import 'leaflet/dist/leaflet.css'

// Dynamically import react-leaflet components (client-only)
const MapContainer = dynamic(
  async () => (await import("react-leaflet")).MapContainer,
  { ssr: false }
)
const TileLayer = dynamic(
  async () => (await import("react-leaflet")).TileLayer,
  { ssr: false }
)
const Marker = dynamic(
  async () => (await import("react-leaflet")).Marker,
  { ssr: false }
)
const Popup = dynamic(
  async () => (await import("react-leaflet")).Popup,
  { ssr: false }
)

export default function Page() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={[27.685617555749136, 85.34475886084775]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[27.685617555749136, 85.34475886084775]}>
          
          <Popup>Broadway Infosys
            <img 
      src="https://broadwayinfosys.com/uploads/about-us/1633368094.Group%20660-min.jpg" 
      alt="Broadway Infosys" 
      style={{ width: "200px" }}
    />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
