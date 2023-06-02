import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Sponsors = () => {
  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <h1 className="text-5xl md:text-6xl text-center font-semibold">Sponsors</h1>
      <div className="flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-20 gap-y-14 md:gap-y-20 px-4 py-20 md:px-10">

        <div className="flex flex-col gap-3 items-center text-2xl">
          <a href="https://gen.xyz/" rel="noreferrer" target="_blank">
            <img src="/images/xyzlogo.png" alt="not valid" className="md:w-64 w-48" />
          </a>
          <h1>.XYZ</h1>
        </div>

        <div className="flex flex-col gap-3 items-center text-2xl">
        <a href="https://www.voiceflow.com/" rel="noreferrer" target="_blank">
          <img src="/images/voiceflow.png" className="md:w-64 w-48" alt="not valid" />
        </a>
        <h1>VOICEFLOW</h1>
        </div>

        <div className="flex flex-col gap-3 items-center text-2xl">
        <a href="https://www.jetbrains.com/" rel="noreferrer" target="_blank">
          <img src="/images/jetbrain.png" className="md:w-64 w-48" alt="not valid" />
        </a>
        <h1>JET BRAINS</h1>
        </div>

        <div className="flex flex-col gap-3 items-center text-2xl" >
        <a
          href="https://givemycertificate.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/images/givemycertificate.png"
            className="md:w-64 w-48"
            alt="not valid"
          />
        </a>
        <h1>GIVE MY CERTIFICATE</h1>
        </div>

        <div className="flex flex-col gap-3 items-center text-2xl">
        <a href="https://balsamiq.com/" rel="noreferrer" target="_blank">
          <img src="/images/blasmiq.png" className="md:w-64 w-48" alt="not valid" />
        </a>
        <h1>BLASMIQ</h1>
        </div>

        <div className="flex flex-col gap-3 items-center text-2xl">
        <a href="https://hoverrobotix.com/" rel="noreferrer" target="_blank">
          <img
            src="/images/hoverrobotix.png"
            className="md:w-80 w-48"
            alt="not valid"
          />
        </a>
        <h1>hoverrobotix</h1>
        </div>

        <div className="flex flex-col gap-3 items-center text-2xl">
        <a href="https://www.echo3d.com/" rel="noreferrer" target="_blank">
          <img
            src="/images/echo3D.png"
            className="md:w-80 w-48"
            alt="not valid"
          />
        </a>
        <h1>Echo3d</h1>
        </div>

        <div className="flex flex-col gap-4 items-center text-2xl">
        <a href="https://www.taskade.com/" rel="noreferrer" target="_blank">
          <img
            src="/images/taskade.png"
            className="md:w-80 w-48"
            alt="not valid"
          />
        </a>
        <h1>Taskade</h1>
        </div>

        <div className="flex flex-col gap-4 items-center text-2xl">
        <a href="https://www.axure.com/" rel="noreferrer" target="_blank">
          <img
            src="/images/axure.png"
            className="md:w-80 w-48"
            alt="not valid"
          />
        </a>
        <h1>axure</h1>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
