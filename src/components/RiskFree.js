import React from "react";
import Image from  "../assets/img4.png"

const RiskFree = () => {
  return (
    <div className="py-16">
      <div className="max-w-[1240px] mx-auto">

        <div className="flex flex-col justify-center items-center mt-16">
            <h1 className="font-poppins font-bold text-[56px]">Give UpViral a risk-free try</h1>
            <h1 className="font-poppins font-bold text-[56px]">for <span className="text-green-600">only $1</span></h1>
        </div>
        
        <div className="bg-[#F0EEFE] mt-16 rounded-tl-[110px] rounded-br-[110px] grid md:grid-cols-2 items-center">
                <div className=" px-16 sm:py-8 md:py-8">
                    <div className=" mb-8">
                    <h1 className="font-poppins font-bold text-[34px]">$1 UpViral trial results in <span className="text-[#6D60B0]">3100+ new subscribers</span> in less than 14 days.</h1>
                    </div>
                    <p className="mb-8 text-lg">Michael Winter's ingenious UpViral campaign added 3100+ new subscribers in just 14 days with a $1 UpViral trial.</p>
                    <button className="py-5 px-9 font-bold text-white bg-green-600  rounded-[30px] hover:underline ">
              START TODAY FOR JUST 1$
            </button>
                </div>

                <div>
                    <img  src={Image} className=" mx-auto md:mt-[-60px] " alt="handsome black guy"/>
                </div>
          
        </div>
      </div>
    </div>
  );
};

export default RiskFree;
