import React from "react";

const Educations = ({ education }) => {
  const { year,exam,group, collage} = education;
  return (
    <div>
      <h1 className="font-bold text-xl text-gray-600">{year}</h1>
      <h1 className="font-bold text-2xl">{exam}</h1>
      <h1 className="font-semibold text-xl text-gray-600">{group}</h1>
      <h1 className="font-semibold text-xl text-gray-600">{ collage}</h1>
    </div>
  );
};

export default Educations;
