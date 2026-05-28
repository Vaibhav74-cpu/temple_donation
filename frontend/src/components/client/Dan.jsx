import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import DanHeroSection from "./DanHeroSection";

function Dan() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <DanHeroSection />
      <Footer />
    </div>
  );
}

export default Dan;
