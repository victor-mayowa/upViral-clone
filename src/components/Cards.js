import React, { useState } from "react";
import {CheckCircleIcon} from "@heroicons/react/solid"
import Switch from "./Switch";

const Cards = () => {

  const[toggle, setToggle] = useState(false)
  const toggleHandler = () =>{
    setToggle(!toggle)
    console.log("victor")
  }

  return (
    <div className="py-16">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="font-poppins font-bold text-[56px]">
            Endless Referrals.<span className="text-green-600"> Ready</span>?
          </h1>
          <p className="font-poppins text-[20px] text-[#475F7C]">
            Join over 30,500+ others actively finding leads and making sales
            with UpViral.
          </p>
          <div className="flex justify-center items-center mt-4">
            <p className={!toggle ? "text-[#475F7C] mr-[20px]": "text-[#E0E3E8] mr-[20px]"}>Monthly</p>
            <Switch toggle={toggle} toggleHandler={toggleHandler}/>
            <p className={toggle ? "text-[#475F7C] ml-[20px]": "text-[#E0E3E8] ml-[20px]"}>Yearly(save 30%)</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">

          <div className="px-9 rounded-2xl bg-[#F9FAFC] my-4">
            <div className="border-b-2 flex flex-col justify-center items-center py-9">
              <h1 className=" font-poppins text-[28px] text-[#475F7C]">
                Starter
              </h1>
              <p className="font-poppins text-[44px] font-bold flex text-[#6D60B0]">
                $1
                <span className=" font-poppins font-regular text-lg text-[#7B8895] mt-[12px] ml-[5px] relative before:w-[40px] before:h-[2px] before:absolute before:bottom-0 before:bg-[#FF0000] before:-left-[2px] before:top-[10px] before:transform before:-rotate-45">
                  ${!toggle ? 79 : 59}
                </span>
              </p> 
              <h2 className="mb-4 font-poppins text-[22px] font-bold text-[#6D60B0]">
                Full Access
              </h2>
              <div className="mb-4 flex flex-col items-center justify-center">
                <p className="text-[#475F7C]">After 14days,</p>
                <p className="text-[#475F7C]"> ${!toggle ? 79 : 59}/months</p>
                <p className={!toggle ? "hidden" : "text-[#475F7C]"}>(paid annually)</p>
              </div>

              <button className="py-3 px-11 font-bold text-[#EF855C] bg-[#F9DACE]  rounded-[30px] hover:underline hover:bg-[#EF855C] hover:text-white">
                GET UPVIRAL
              </button>
            </div>

            <div className="py-9">
              <ul className=" border-b-2 pt-6">
                <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
              </ul>

              <div className="flex flex-col items-center justify-center">
                <button className=" mt-8 mb-4 py-3 px-11 font-bold text-[#EF855C] bg-[#F9DACE]  rounded-[30px] hover:underline hover:bg-[#EF855C] hover:text-white ">
                  GET UPVIRAL
                </button>
                <a href="/">
                  <p className="underline text-green-600 hover:text-green-400">
                    See all features
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F9FAFC]">
            <div className="rounded-2xl flex flex-col justify-center items-center py-9 bg-[#6B5EAD] w-full">
              <h1 className=" font-poppins text-[28px] text-white">
                Business
              </h1>
              <p className="font-poppins text-[44px] font-bold flex text-white">
                $1
                <span className=" font-poppins font-regular text-lg text-[#c8d0d8] mt-[12px] ml-[5px] relative before:w-[40px] before:h-[2px] before:absolute before:bottom-0 before:bg-[#FF0000] before:-left-[2px] before:top-[10px] before:transform before:-rotate-45">
                ${!toggle ? 119 : 89}
                </span>
              </p> 
              <h2 className="mb-4 font-poppins text-[22px] font-bold text-white">
                Full Access
              </h2>
              <div className="mb-4  flex flex-col items-center justify-center">
                <p className="text-white">After 14days,</p>
                <p className="text-white"> ${!toggle ? 119 : 89}/months</p>
                <p className={!toggle ? "hidden" : "text-white"}>(paid annually)</p>
              </div>

              <button className="py-3 px-11 font-bold text-[#EF855C] bg-[#F9DACE]  rounded-[30px] hover:underline hover:bg-[#EF855C] hover:text-white">
                GET UPVIRAL
              </button>
            </div>

            <div className="py-9  px-9">
              <div className=" border-b-2 pt-6">
                <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
              </div>

              <div className="flex flex-col items-center justify-center">
                <button className=" mt-8 mb-4 py-3 px-11 font-bold text-[#EF855C] bg-[#F9DACE]  rounded-[30px] hover:underline hover:bg-[#EF855C] hover:text-white ">
                  GET UPVIRAL
                </button>
                <a href="/">
                  <p className="underline text-green-600 hover:text-green-400">
                    See all features
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="px-9 rounded-2xl bg-[#F9FAFC]  my-4">
            <div className="border-b-2 flex flex-col justify-center items-center py-9">
              <h1 className=" font-poppins text-[28px] text-[#475F7C]">
                Premium
              </h1>
              <p className="font-poppins text-[44px] font-bold flex text-[#6D60B0]">
                $1
                <span className=" font-poppins font-regular text-lg text-[#7B8895] mt-[12px] ml-[5px] relative before:w-[40px] before:h-[2px] before:absolute before:bottom-0 before:bg-[#FF0000] before:-left-[2px] before:top-[10px] before:transform before:-rotate-45">
                ${!toggle ? 299 : 219}
                </span>
              </p> 
              <h2 className="mb-4 font-poppins text-[22px] font-bold text-[#6D60B0]">
                Full Access
              </h2>
              <div className="mb-4   flex flex-col items-center justify-center">
                <p className="text-[#475F7C]">After 14days,</p>
                <p className="text-[#475F7C]"> ${!toggle ? 299 : 219}/months</p>
                <p className={!toggle ? "hidden" : "text-[#475F7C]"}>(paid annually)</p>
              </div>

              <button className="py-3 px-11 font-bold text-[#EF855C] bg-[#F9DACE]  rounded-[30px] hover:underline hover:bg-[#EF855C] hover:text-white">
                GET UPVIRAL
              </button>
            </div>

            <div className="py-9">
              <ul className=" border-b-2 pt-6">
                <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
                  <li className="text-[#475F7C] mb-8 flex items-center"><span className="mr-3"><CheckCircleIcon className="w-7 text-green-600"/></span>Run Unlimited Campaigns</li>
              </ul>

              <div className="flex flex-col items-center justify-center">
                <button className=" mt-8 mb-4 py-3 px-11 font-bold text-[#EF855C] bg-[#F9DACE]  rounded-[30px] hover:underline hover:bg-[#EF855C] hover:text-white ">
                  GET UPVIRAL
                </button>
                <a href="/">
                  <p className="underline text-green-600 hover:text-green-400">
                    See all features
                  </p>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cards;
