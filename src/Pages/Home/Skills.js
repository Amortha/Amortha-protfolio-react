import React from "react";
import Progressbar from "./Progressbar";

const testData = [
  {
    bgcolor: "#800080",
    completed: 90,
    name: "HTML5",
  },
  {
    bgcolor: "#800080",
    completed: 80,
    name: "CSS3",
  },
  {
    bgcolor: "#800080",
    completed: 60,
    name: "JAVA SCRIPT",
  },
  {
    bgcolor: "#800080",
    completed: 80,
    name: "TAILWINDCSS",
  },
  
];
const testData2 = [
  {
    bgcolor: "#800080",
    completed: 80,
    name: "BOOTSTRAP",
  },
  {
    bgcolor: "#800080",
    completed: 90,
    name: "REACT JS",
  },
  {
    bgcolor: "#800080",
    completed: 60,
    name: "NODE JS",
  },
  {
    bgcolor: "#800080",
    completed: 75,
    name: "GITHUB",
  },
  
];

const Skills = () => {
  return (
    <div id="skills" className="p-6 lg:p-12 mt-10 bg-base-300 ">
      <div className=" p-8 bg-base-100  overflow-hidden">
        <h1 className="text-purple-800  text-center lg:text-2xl font-semibold">
          My Expertise
        </h1>
        <h1 className="font-bold text-2xl lg:text-5xl my-4 text-center">
          My Skills
        </h1>
        <div className="grid lg:grid-cols-2 lg:gap-10 ">
          <div>
            {testData.map((item, idx) => (
              <Progressbar
                key={idx}
                name={item.name}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
          <div>
            {testData2.map((item, idx) => (
              <Progressbar
                key={idx}
                name={item.name}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Skills;
