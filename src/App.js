import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import MapComponent from "./components/MapComponent";
import InfoSection from "./components/InfoSection";
import PopularBrands from "./components/PopularBrands";
import ContactUs from "./components/ContactUs"; // Import ContactUs component
import "./App.css";
import "leaflet/dist/leaflet.css";
import AboutUs from "./components/AboutUs";
import SearchInventory from "./components/SeachInventory";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap with BrowserRouter */}
      <Header />
      <Routes>
        {/* Define routes for each page */}
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <SearchInventory />
              <FeaturedProducts />
              <InfoSection />
              <PopularBrands />
              <WhyChooseUs />
              <Testimonials />
              <MapComponent />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
