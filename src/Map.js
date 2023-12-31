import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map(props) {
  const position = [props.lat, props.lon];
  return (
    <div className="Map">
     
      <MapContainer center={position} zoom={13} style={{ height: "400px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="OpenStreetMap"
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
}
