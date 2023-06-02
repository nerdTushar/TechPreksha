import React from "react";
import Timer from "./Timer";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Herosection() {

  return (<div className="flex flex-col justify-between h-full gap-20">
     <Header />
     <div className="font-['Jost'] md:mx-10 ">
      {/* <video src='videos/neonblue.mp4' autoPlay={true} loop muted className='absolute top-0 left-0  object-cover'/> */}
      
        <div className="flex flex-col gap-8">
          <div className="flex md:flex-row flex-col md:px-10 px-2 justify-between">
            <div className="text-white flex flex-col justify-center gap-10">
              <p className="text-8xl text-center md:text-left ">
                Tech-प्रेक्षा
              </p>
              <p className="text-xl text-center md:text-left">
                Registration Closes In:
              </p>
              <Timer />
            </div>

            <div
              className="text-4xl font-bold flex flex-col text-center md:text-left gap-0"
            >
              {/* <div style={{ displaa flexDirection:"column", gap:10}}>  */}
              <NavLink to="/aboutevent">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  ABOUT EVENT{" "}
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/prizes">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  PRIZES{" "}
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/organizers">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  ORGANIZERS
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/sponsors">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  SPONSORS
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/techstacks">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  TECH & STACKS
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/schedule">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  SCHEDULE{" "}
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/venue">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  VENUE{" "}
                </span>
              </NavLink>
              <br />
              <NavLink to="/faq">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  FAQ{" "}
                </span>
              </NavLink>
              {/* </div> */}
            </div>
          </div>
         
             <div className="flex flex-col justify-center items-center gap-6">
             <h1 className="color1 color2 md:text-6xl text-5xl">Event Starts In</h1>
            <NavLink
              to="/form"
              className="relative inline-flex items-center justify-start py-4 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-white group"
            >
              <span className=" sabsolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#232323] group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative rounded-4xl w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">
                Register
              </span>
            </NavLink>
          </div>
        </div>
    </div>
     
    <Footer />
    </div>
  );
}
