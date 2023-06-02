import React from "react";
import {NavLink} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';
import {FaRupeeSign} from 'react-icons/fa';

const Prize = () => {
  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="h-full pb-1 font-semibold font-['Jost']">
        <div>
          <div className="flex flex-col gap-6 items-center text-6xl py-4">
            <p>PRIZES</p>
            <p className="text-lg text-slate-400">
              {" "}
              Here are the prizes for the event
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-between my-14 md:mx-40 md:my-20 gap-20">
            <div className="card flex flex-col">
              <img src="../images/1st-prize.png" alt="Not Valid" />
              <p> 1st Prize</p>
              <div className="flex items-center gap-2">
              <FaRupeeSign className="fill-yellow-500"/>
              <p> 15,000/-</p>
              </div>
            </div>
            <div className="card2 flex flex-col">
              <img
                src="../images/2nd-prize.png"
                className="w-4/5"
                alt="Not valid"
              />
              <p>2nd Prize</p>
              <div className="flex items-center gap-2">
              <FaRupeeSign className="fill-yellow-500"/>
              <p> 10,000/-</p>
              </div>
            </div>
            <div className="card3 flex flex-col">
              <img src="../images/3rd-prize.png" className="w-4/5" alt="" />
              <p>3rd Prize</p>
              <div className="flex items-center gap-2">
              <FaRupeeSign className="fill-yellow-500"/>
              <p>5000/-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prize;
