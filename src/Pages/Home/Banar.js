import React from "react";
import Main from "./../../image/myimages.png";
import { Typewriter } from "react-simple-typewriter";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Banar = () => {
  const handleType = (count) => {
    // access word count number
  };

  const handleDone = () => {};
  return (
    <div className=" grid lg:grid-cols-2 mx-10" id="home">
      <div
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="600"
        data-aos-duration="1500"
        className="lg:mt-32"
      >
        <h1 className="text-xl lg:text-3xl font-bold  text-center">
          HELLO!
          <br />
          I'M AMORTHA KUMAR SHILL
          <br />
          I'M EXPERT IN-{" "}
          <span className="text-red-700">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "HTML5",
                "CSS3",
                "BOOTSTRAP",
                "Tailwind CSS",
                "JAVASCRIPT",
                "REACT JS",
                "NODE JS",
              ]}
              loop={50}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </h1>
        <br />
        <br />
        <p className="break-all lg:text-xl  font-semibold">
          Welcome to my web developer portfolio! I am a skilled and passionate
          web developer with expertise in both front-end and back-end
          technologies. With a strong foundation in HTML, CSS,Tailwind CSS,
          JavaScript, REACT JS,NODE JS combined with proficiency in server-side
          programming and database management, I strive to create dynamic and
          user-friendly web applications.
        </p>
        <div className="text-center mt-6">
          <button className="w-32 h-10  m-1 border-solid border-2 border-red-700 font-bold hover:bg-red-700 hover:text-white">
            <AnchorLink href="#contact">Hire Me</AnchorLink>
          </button>
          <button className="w-36 h-10 m-1 border-solid border-2 border-red-700 font-bold hover:bg-red-700 hover:text-white">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/17qpOCHURd3PzaQaPz1C8Fn52lTJrl9eO/view?usp=share_link"
            >
              See My Resume
            </a>{" "}
          </button>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="600"
        data-aos-duration="1500"
      >
        <img className="mx-auto w-96 mt-12 max-h-max " src={Main} alt="" />
      </div>
    </div>
  );
};

export default Banar;
