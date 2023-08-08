import AnchorLink from 'react-anchor-link-smooth-scroll';
import React from 'react';
import logo from '../../image/logo.png'
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { useState, useEffect } from 'react';


const Navber = ({ handleThemeChange, theme }) => {
    const menuItems = <>

        <li className='px-2 font-black hover:text-purple-800'><AnchorLink href="#home">HOME</AnchorLink></li>
        <li className='px-2 font-black hover:text-purple-800'><AnchorLink href="#aboutus">ABOUT</AnchorLink></li>
        <li className='px-2 font-black hover:text-purple-800'><AnchorLink href="#skills">SKILLS</AnchorLink></li>
        <li className='px-2 font-black hover:text-purple-800' ><AnchorLink href="#education">EDUCATION</AnchorLink></li>
        <li className='px-2 font-black hover:text-purple-800'><AnchorLink href="#project">PROJECT</AnchorLink></li>
        <li className='px-2 font-black hover:text-purple-800'><AnchorLink href="#contact">CONTACT</AnchorLink></li>
        <li><button
            onClick={handleThemeChange}
            className="rounded-full lg:mx-2 font-bold pr-2">

            {theme ? <BsSunFill /> : <BsMoonFill />}
        </button></li>
    </>
    return (
            <div className="sticky top-0 z-50 bg-base-200">
                <div className="navbar  h-14 lg:px-12   ">
                    <div className="navbar-start ">
                        <div>
                            <a className="  normal-case text-xl hidden  lg:flex"><h1 className='font-bold font-black'>AMORTHA KUMAR SHILL</h1></a>
                        </div>

                        <div className="dropdown ">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200  w-52">
                                {menuItems}
                            </ul>
                        </div>

                    </div>
                    <div className=" hidden  navbar-end lg:flex ">
                        <ul className=" menu-horizontal px-4  font-bold  ">
                            {menuItems}
                        </ul>
                    </div>

                </div>
            </div>
       
    );
};

export default Navber;