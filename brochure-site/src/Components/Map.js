import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Pin from "../Photos/marker-icon.png";
import { Icon } from "leaflet";
const myPin = new Icon({
  iconUrl: Pin,
  iconSize: [18, 32],
});

function Map() {
  return (
    <div id="map">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "500px" }}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]} icon={myPin}>
          <Popup>Come join us at Culture Espresso!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
