import React from 'react';
import Educations from './Educations';

const Education = () => {

  const educations = [
    {
      year:"2018(Graduated)",
      exam:"Higher Secondary School Certificate",
      group:"Business Studies",
      collage:"Manikchari Giri Moitree Degree Government College"
    },
  
    {
      year:"2021(Graduated)",
      exam:"Web Development",
      group:"Feni computer institute",
      collage:"National Skill Certificate (Level-IV)Web Development with SEIP - National Skill Certificate (Level-IV) (CBT & A) Under NTVQF"
    },
    {
      year:"2018(still running)",
      exam:"Bachelor in Business Studies",
      group:"Business Studies",
      collage:"National University, Bangladesh"
    },
    {
      year:"2021(Graduated)",
      exam:"Meran-stack Web Development",
      group:"online course",
      collage:"Programing-Hero course, Bangladesh"
    },
    
  ]
  return (
    <div id='education' className='my-20'>
      <div className='my-8'>
        <h1 className=" text-purple-800 lg:text-2xl font-semibold text-center">
          My Qualification
        </h1>
        <h1 className="my-4 text-2xl lg:text-5xl font-bold text-center">My Education</h1>
      </div>
<div className='grid lg:grid-cols-2 gap-5  mx-5 lg:mx-20 mt-12 '>
  {
   educations.map(education=><Educations education={education}></Educations>)
  }
</div>
    </div>
  );
};

export default Education;
