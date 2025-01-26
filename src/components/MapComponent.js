import React, { useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

// Fix for marker image issue
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const MapComponent = () => {
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    // Coordinates for 58 Mary Street, Balsall Heath
    const latitude = 52.4585;
    const longitude = -1.8935;

    // Initialize the map and set its view to the coordinates
    const map = L.map("map").setView([latitude, longitude], 17);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Custom marker icon
    const customIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41], // Default size
      iconAnchor: [12, 41], // Anchor point
    });

    // Add a marker to highlight the specific address
    const marker = L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindTooltip("58 Mary Street, Balsall Heath, Birmingham, B12 9ST", {
        permanent: false, // Show only on hover
        direction: "top", // Tooltip position
        className: "custom-tooltip", // Optional: Add custom styling
      });

    // Open the popup by default
    marker.openPopup();

    // Cleanup: Remove map instance when the component unmounts
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array to run this only once

  return (
    <section className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Find Us Here</h2>
        <div className="row justify-content-center">
          <div id="map" style={{ width: "100%", height: "400px" }}></div>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
