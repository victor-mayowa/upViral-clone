import React from "react";

const TakeControl = () => {
  return (
    <div className="py-16 px-5 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="font-poppins font-bold text-[56px]">
            Take control of your campaigns
          </h1>
          <h1 className="font-poppins font-bold text-[56px]">
            with our
            <span className="text-green-600"> industry-leading features</span>{" "}
          </h1>
        </div>



        <div className="grid sm:grid-cols-1 md:grid-cols-3 mb-12 px-5">
          <div>
            <div className="mb-8">Create a converting landing</div>
            <div className="mb-8">page from scratch or using our</div>
            <div className="mb-8">proven templates.</div>
          </div>

           <div>
            <div className="mb-8">Create a converting landing</div>
            <div className="mb-8">page from scratch or using our</div>
            <div className="mb-8">proven templates.</div>
          </div>


           <div>
            <div className="mb-8">Create a converting landing</div>
            <div className="mb-8">page from scratch or using our</div>
            <div className="mb-8">proven templates.</div>
          </div>

        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-[18px] mb-4">All this and more</p>
          <button className="py-5 px-8 font-bold text-white bg-green-600  rounded-[30px] hover:underline">
            DISCOVER MORE FEATURES
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeControl;
