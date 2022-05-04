import React from "react";
import Image from "../assets/img2.png";
import Ellipse from "../assets/Ellipse 1.png";
import { PlayIcon } from "@heroicons/react/solid";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="mt-[90px] h-[100vh] w-full relative overflow-hidden">
     
      <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto items-center" >
        <div className="px-5 flex flex-col justify-center">
          <h1 className="text-7xl text-green-600  font-bold mb-3">
            Viral marketing.
          </h1>
          <h1 className="text-7xl font-bold mb-3">Simplified.</h1>
          <div className="flex items-center">
            <p className="text-[24px] font-light mr-2">Grow your</p>
            <Typed className="text-[24px] font-bold"
              strings={[
                "local business",
                "personal business",
                "startups",
                "online business",
                "e-commerce brand",
                "marketing agency",
              ]}
              typeSpeed={100}
              backSpeed={80}
              loop
            >
            </Typed>
          </div>

          <p className="text-[24px] font-light mb-7">
            With proven marketing campaigns
          </p>
          <p className="text-[16px] mb-7">Easy to use. No coding require</p>
          <div className="flex">
            <button className="py-4 px-6 font-bold text-white bg-green-600 mr-4 rounded-[30px] hover:underline">
              GET STARTED FOR ONLY 1$
            </button>
            <button className="py-4 px-6 font-bold text-green-600 hover:bg-green-600 hover:text-white hover:rounded-[30px] hover:underline flex items-center">
              <span className="mr-1">
                <PlayIcon className="w-8" />
              </span>
              WATCH DEMO VIDEO
            </button>
          </div>
        </div>

        <div>
          <img className="mx-auto" src={Image} alt="img"/>
          <img src={Ellipse} alt="bg-circle" className="absolute -z-10  top-[-700px] left-[500px]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
