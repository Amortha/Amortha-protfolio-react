import React from "react";
// import Navber from '../Hader/Navber';
import AboutUs from "./AboutUs";
import Banar from "./Banar";
import Contact from "./Contact";
import Portfolio from "./Project";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Skills from "./Skills";
import Footer from "./Footer";
import Education from "./Education";
import WhatsApp from "./WhatsApp";

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
      <WhatsApp></WhatsApp>
      <Footer></Footer>
      <AnchorLink></AnchorLink>
    </div>
  );
};

export default Home;
