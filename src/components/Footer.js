import React from "react";

const Footer = () => {
  //     const svgRef = useRef(null)
  //   //for removing the white space around the svg
  // useEffect(()=>{
  //     const svg = svgRef.current
  //     const bBox = svg.getBBox()
  //     const NewViewBox = [bBox.x, bBox.y, bBox.width, bBox.height].join(" ")
  //     svg.setAttribute("viewBox", NewViewBox)

  // },[])

  return (
    <div className="pt-16">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1440 120">
        <path
          fill="#F9FAFC"
          fillOpacity="1"
          d="M0,96L48,80C96,64,192,32,288,26.7C384,21,480,43,576,58.7C672,75,768,85,864,101.3C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/* <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 240"><path fill="black" fillOpacity="1" d="M0,224L80,197.3C160,171,320,117,480,122.7C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
      <div className="bg-[#F9FAFC]">
        <div className="max-w-[1240px] mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-5 pb-10 px-5 ">
          <h1 className="text-4xl">
            <span className="text-green-600 font-bold font-poppins">Up</span>
            viral
          </h1>

          <div className="">
            <h1 className="text-[#34495E] font-bold font-poppins mb-3">
              UPVIRAL
            </h1>
            <ul className="list-none ">
            <li className="mb-3  cursor-pointer text-[#34495E] text-sm  hover:text-black ">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            </ul>
          
           
          </div>

          <div>
            <h1 className="text-[#34495E] font-bold font-poppins mb-3">
              RESOURCES
            </h1>
            <ul className="list-none">
            <li className="mb-3  cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            <li className="mb-3  cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            </ul>
            
          </div>

          <div>
            <h1 className="text-[#34495E] font-bold font-poppins mb-3">
              COMPANY
            </h1>
            <ul className="list-none">
            <li className="mb-3  cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            <li className="mb-3  cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            </ul>
          </div>

          <div>
            <h1 className="text-[#34495E] font-bold font-poppins mb-3">
              LEGAL
            </h1>
            <ul className="list-none">
            <li className="mb-3  cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm hover:text-black">dummy text</li>
            <li className="mb-3 cursor-pointer text-[#34495E] text-sm  hover:text-black">dummy text</li>
            </ul>
          </div>
        </div>

        <div className="text-center py-8">
          <p>Copyright@ 2022 upViral.All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
