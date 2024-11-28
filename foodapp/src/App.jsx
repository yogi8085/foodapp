import React from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Service from "./components/Service";

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <About />
      <Menu />
      <Service />
      <Gallery />

      <Footer />
    </>
  );
}

export default App;
