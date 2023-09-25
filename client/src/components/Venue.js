import React from "react";
import {NavLink} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';

export default function Venue() {
  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="flex justify-center">
        <div className="container pb-20">
          <div className="rounded-2xl py-8 md:mx-10 mx-2 shadow-2xl shadow-[#000000] bg-[#070c2a9f] flex flex-col gap-10">
            <h1 className=" text-center text-5xl font-semibold text-white">
              {" "}
              Venue
            </h1>
            <div className="flex flex-col md:flex-row justify-center mx-8 py-2">
              <img
                src="/images/dce.jpg"
                className="shadow-black md:w-1/2 w-7/8 shadow-2xl opacity-80 transition duration-300 ease-in-out hover:opacity-100 rounded-2xl border-3 boder-black"
                alt="not found"
              />
              <p className="flex flex-col py-14 mx-10 text-justify text-xl justify-center ">Dronacharya college of engineering, one of the the premier institution of Delhi NCR, is located amidst a lush green environment in gurugram harayan. It is the best engineering college in Delhi NCR. Leading its way since 1998, ranked among top engineering college in delhi NCR, gurugram. The college boasts of ultra-modern infrastructure and well trained faculty catering to the multifarious needs by encouraging analytical and logical skills of students.</p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://ggnindia.dronacharya.info/"
                className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
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
                <span className="relative ">LOCATION</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
