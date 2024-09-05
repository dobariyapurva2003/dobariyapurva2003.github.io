// src/LeafletMapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position = [17.4449, 78.3498]; // Replace with your latitude and longitude

function LeafletMapComponent() {
  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '600px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          IIIT Hyderabad.<br /> Gachibowli
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafletMapComponent;
