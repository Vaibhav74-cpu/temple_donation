import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import PujaHeroSection from "./PujaHeroSection";
import ExplorePuja from "./ExplorePuja";
import PujaCards from "./PujaCards";
import ParticipateProcess from "./ParticipateProcess";
import Reviews from "./Reviews";

function Puja() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <PujaHeroSection />
      <ParticipateProcess />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Puja;
