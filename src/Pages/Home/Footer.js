import React from 'react';
import facebook from './../../image/facebook.jpeg';
import linkedin from './../../image/linkdin.png';
import githab from './../../image/githublogo.png';
import vercel from './../../image/vercallogo.png';


const Footer = () => {
    return (
        <footer className=' footer-center  lg:mt-0 mt-96 bg-slate-900 p-4 text-base-content  rounded'>
  <div class="flex  justify-center  ">
    <a class="link link-hover p-3 "target="_blank" href='https://web.facebook.com/amitshill.amitshil'><img className='bg-white'  width="35px" height="40px" src={facebook}  alt="" /> </a> 
    <a class="link link-hover p-3 "target="_blank" href='https://www.linkedin.com/in/amortha-kumar-shill-05a424241/'><img className='bg-white'  width="30px" height="30px" src={linkedin}  alt="" /> </a> 
    <a class="link link-hover p-3"target="_blank" href='https://github.com/Amortha'><img className='bg-white'  width="30px" height="30px" src= {githab} alt="" /> </a> 
    <a class="link link-hover p-3"target="_blank" href='https://vercel.com/dashboard'><img className='bg-white'  width="30px" height="30px" src={vercel}  alt="" /> </a> 
    
   
  </div>  
  <div>
    <p className='pb-5 font-samibold text-xl text-white'>Copyright © 2023 - All right reserved by Amortha Kumar Shill</p>
  </div>
</footer>
    );
};

export default Footer;