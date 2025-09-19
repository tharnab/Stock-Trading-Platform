import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Education from "./Education";

import OpenAccount from "../OpenAccount";

import '../styles/HomePage.css'



function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
