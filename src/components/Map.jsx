// Map.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// آیکون اختصاصی Marker
const markerIcon = new L.Icon({
  iconUrl: "/images/marker.png", // فایل مارکر داخل public/images
  iconSize: [40, 40], // اندازه آیکون
  iconAnchor: [20, 40], // نقطه‌ای که روی مختصات قرار می‌گیره
  popupAnchor: [0, -40], // نقطه باز شدن popup نسبت به آیکون
});

const Map = () => {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      {" "}
      {/* والد MapContainer باید ارتفاع داشته باشه */}
      <MapContainer
        center={[35.6892, 51.389]} // مختصات تهران، می‌تونی تغییر بدی
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        <Marker position={[35.6892, 51.389]} icon={markerIcon}>
          <Popup>این مکان تست است!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
