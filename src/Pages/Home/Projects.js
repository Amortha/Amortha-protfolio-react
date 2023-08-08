import React from "react";
// import { useNavigate } from 'react-router-dom';


const Projects = ({ project }) => {
  const { name, img,technology, text,gitclint,gitserver,livesite,} = project;
  // const navigate = useNavigate();
  // const handelDetails = id => {
  //     navigate(`details/${id}`)
  // }
 
  return (

     <div className="">
          <button >
      <div className="lg:grid grid-cols-2 my-5 mx-5 lg:my-6 lg:mx-20 hover:-translate-y-1 hover:scale-110 hover:duration-500 ">
        <div>
            <img  src={img} alt="pic"/>
        </div>
        <div className=" lg:p-5  lg:my-auto lg:ml-[-150px] ">
          <h1 className="lg:text-2xl lg:text-right font-bold p-2">{name}</h1>
        <div className="bg-base-300 lg:h-40 p-2 lg:p-6">
        <h1 className="lg:text-xl lg:text-right  mt-2">
            <span className="font-bold">Technology Used:</span>
            <br />
            {technology}
          </h1>
        </div>
        </div>
      </div>
      </button>
      
    </div>
  );
};

export default Projects;
