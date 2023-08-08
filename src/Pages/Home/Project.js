import React, { useEffect, useState } from "react";
import Projects from "./Projects";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then( res => res.json())
      .then( data => setProjects(data));
  }, []);
  return (
    <div id="project">
      <h1 className="text-center text-2xl font-bold text-purple-800"> My Project</h1>
      <h1 className="lg:text-5xl text-2xl text-center font-bold ">
        My Recent Project
      </h1>
      <div className="mt-4 lg:mt-20">
        {
        projects?.map( project => <Projects project ={project} key={project._id}></Projects>)
        }
        </div>

    </div>
  );
};

export default Project;
