import React from "react";
import Cards from "./components/Cards";
import Display from "./components/Display";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RiskFree from "./components/RiskFree";
import TakeControl from "./components/TakeControl";
import WorldClass from "./components/WorldClas";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Display/>
      <TakeControl/>
      <WorldClass/>
      <Cards/>
      <RiskFree/>
      <Footer/>
    </div>
  );
}

export default App;
