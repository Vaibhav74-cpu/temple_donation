import React from "react";
import Navbar from "../shared/Navbar";
import About from "./About";
import Herosection from "./Herosection";
import ExplorePuja from "./ExplorePuja";
import Sevek from "./Sevek";
import Footer from "../shared/Footer";

function Home() {
  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
      <Navbar />
      <Herosection />
      <About />
      <ExplorePuja />
      <Sevek />
      <Footer/>
    </div>
  );
}

export default Home;
