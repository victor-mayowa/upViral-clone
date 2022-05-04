import React,{useState} from "react";
import {MenuIcon, XIcon} from "@heroicons/react/outline"   

const Navbar = () => {
    const [nav, setNav]= useState(false)

    const setNavHandler = () =>{
        setNav(!nav)
    }
     
  return (
    <div className="w-full h-[90px] shadow-lg fixed z-10 bg-white top-0">
        <div className="max-w-[1240px] flex justify-between items-center h-full px-5 mx-auto">
          <h1 className="text-3xl">
            <span className="text-green-600 font-bold">Up</span>viral
          </h1>
          <div className="  items-center hidden md:flex">
            <ul className="flex mr-[40px]">
              <li className=" p-4 text-[18px]  cursor-pointer border-b-4 border-green-600 mr-1 text-green-600">Home</li>
              <li className=" p-4 text-[18px]  cursor-pointer hover:border-b-4 border-green-600 ease-in duration-100 mr-1 hover:text-green-600">
                Features
              </li>
              <li className=" p-4 text-[18px]  cursor-pointer hover:border-b-4 border-green-600  ease-in duration-100 mr-1 hover:text-green-600">
                Resources
              </li>
              <li className=" p-4 text-[18px]  cursor-pointer hover:border-b-4 border-green-600 ease-in duration-100 mr-1 hover:text-green-600">
                Login
              </li>
            </ul>
            <button className="py-1 px-8 bg-green-600 rounded-2xl text-white hover:bg-green-500">
              Get started
            </button>
          </div>

          
            <div className="md:hidden " onClick={setNavHandler}>
              {nav ? <XIcon className="w-6"/> : <MenuIcon className="w-6"/>}
            </div>
        </div>

      <div className={nav ? "px-5 md:hidden"  :"hidden n"}>
        <ul className="flex flex-col bg-white pb-2">
          <li className="border-b-2 border-green-600 mr-1">Home</li>
          <li className="hover:text-green-600 border-b-2 border-green-600 ease-in duration-100 ">
            Features
          </li>
          <li className="hover:text-green-600 border-b-2 border-green-600  ease-in duration-100 ">
            Resources
          </li>
          <li className="hover:text-green-600 border-b-2 border-green-600 ease-in duration-100 ">
            Login
          </li>
        </ul>
        <button className="py-4 px-8 bg-green-600 rounded-lg text-white text-[16px] hover:bg-green-500  w-full">
          Get started
        </button>
      </div>
    </div>
  );
};
export default Navbar;
