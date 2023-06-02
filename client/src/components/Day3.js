import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Day3 = () => {
  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="flex flex-col pb-14 items-center text-center gap-5">
        <p className="text-6xl">EVENT SCHEDULE</p>
        <p className="text-slate-400">Here is our event schedule</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pb-10">
        <NavLink to="/schedule">
          <div className="bg-indigo-500 py-2 px-24 rounded-full mx-2 hover:bg-[#3A1078]">
            Online
          </div>
        </NavLink>
        <NavLink to="/day1">
          <div className="bg-indigo-500 py-2 px-24 rounded-full mx-2 hover:bg-[#3A1078]">
            Day1
          </div>
        </NavLink>
        <NavLink to="/day2">
          <div className="bg-indigo-500 py-2 px-24 rounded-full mx-2 hover:bg-[#3A1078]">
            Day2
          </div>
        </NavLink>
        <NavLink to="/day3">
          <div className="bg-[#3A1078] py-2 px-24 rounded-full mx-2">Day3</div>
        </NavLink>
      </div>

      <div className="flex flex-col gap-5 md:mx-80 mx-8 py-10">
        <div className="flex flex-col md:flex-row md:gap-32 gap-10">
          <p>April 8th 2023</p>
          <p>
            {/* Day 3 Registration <br />
            Day 3 Registrations for the Event Begins */}
            Announcing Soon....
          </p>
        </div>
        <hr className="bg-white w-full" />

        {/* <div className="flex flex-col md:flex-row md:gap-32 gap-10">
          <p>April 7th 2023</p>
          <p>
            Day 3 Registration <br />
            Day 3 Registrations for the Event Begins
          </p>
        </div>
        <hr className="bg-white w-full" />

        <div className="flex flex-col md:flex-row md:gap-32 gap-10">
          <p>April 7th 2023</p>
          <p>
            Day 3 Registration <br />
            Day 3 Registrations for the Event Begins
          </p>
        </div>
        <hr className="bg-white w-full" />

        <div className="flex flex-col md:flex-row md:gap-32 gap-10">
          <p>April 7th 2023</p>
          <p>
            Day 3 Registration <br />
            Day 3 Registrations for the Event Begins
          </p>
        </div>
        <hr className="bg-white w-full" />

        <div className="flex flex-col md:flex-row md:gap-32 gap-10">
          <p>April 7th 2023</p>
          <p>
            Day 3 Registration <br />
            Day 3 Registrations for the Event Begins
          </p>
        </div>
        <hr className="bg-white w-full" />

        <div className="flex flex-col md:flex-row md:gap-32 gap-10">
          <p>April 7th 2023</p>
          <p>
            Day 3 Registration <br />
            Day 3 Registrations for the Event Begins
          </p>
        </div>
        <hr className="bg-white w-full" />

        <div className="flex flex-col md:flex-row md:gap-32 gap-10">
          <p>April 7th 2023</p>
          <p>
            Day 3 Registration <br />
            Day 3 Registrations for the Event Begins
          </p>
        </div>
        <hr className="bg-white w-full" /> */}
      </div>
    </>
  );
};

export default Day3;
