import React from "react";
import "./App.css";

import NavBar from "./Components/Nav-Bar-About";
import { AboutHome } from "./Components/HomeAboutUs";
import { WhyFindrAbout } from "./Components/WhyFindrAbout";
import WhatAbout from "./Components/WhatMeans";
import Team from "./Components/Team";
import AboutUs from "./Components/About";

function SecondPage() {
  window.scrollTo(0, 0);
  return (
    <div className="App">
      <NavBar />
      <AboutHome />
      <WhyFindrAbout />
      <WhatAbout />
      <Team />
      <AboutUs />
    </div>
  );
}

export default SecondPage;
