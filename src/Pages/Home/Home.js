import React from "react";
// import Navber from '../Hader/Navber';
import AboutUs from "./AboutUs";
import Banar from "./Banar";
import Contact from "./Contact";
import Portfolio from "./Project";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Skills from "./Skills";
import Education from "./Education";


const Home = () => {
  return (
    <div className="">
      {/* <Navber></Navber>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */}
      <Banar></Banar>
      <AboutUs></AboutUs>
      <Skills></Skills>
      <Education></Education>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <AnchorLink></AnchorLink>
    </div>
  );
};

export default Home;
