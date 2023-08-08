import React from "react";
import aboutaus from "./../../image/about.jpg";

const AboutUs = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="grid lg:grid-cols-2 gap-7 lg:mx-10 mt-16 "
      id="aboutus"
    >
      <div>
        <img className="w-full px-5 lg:px-0" src={aboutaus} alt="pic" />
      </div>
      <div className="mx-12 ">
        <h1 className="text-xl font-bold text-purple-800">About me</h1>
        <h1 className="text-xl lg:text-3xl  font-bold my-6">
          AMORTHA KUMAR SHILL
        </h1>
        <h1 className="break-all font-semibold text-gray-600">
          Hello, I'm Amortha kumar Shill a passionate and detail-oriented web
          developer with a love for creating impactful online experiences. I
          have 2 years of experience in designing and developing websites that
          combine aesthetics with functionality.
        </h1>
        <h1 className="break-all font-semibold text-gray-600 mt-8">
          My journey into web development started with a fascination for the
          internet's potential to connect people and make information
          accessible. This drove me to learn various programming languages and
          frameworks, allowing me to craft immersive websites that engage and
          delight users.
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
