import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import EventMentor from "./EventMentor";
import InternalJudge from "./InternalJudge";

const Aboutevent = () => {
  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="font-['Jost']">
        <p className="text-6xl text-white text-center">ABOUT EVENT</p>
        <div className="flex flex-col md:flex-row mx-10 md:mx-20 md:mb-20">
          <p className="my-20 text-white text-2xl">
            Techप्रेक्षा-2.0 2023! is established to provide a space for developers
            and tech enthusiasts from all over India to come together and
            showcase their skills and abilities. Our vision is to bring out the
            hidden talent of our country's tech community and provide them with
            a platform to express their creativity. Our flagship event takes
            place over 72 hours at the premises of Dronacharya College of
            Engineering in Gurugram. During this time, participants can expect
            an action-packed event filled with hacking, coding, and innovative
            ideas. Join other like-minded individuals as you work together to
            manifest your ideas and demonstrate your skills. At Techप्रेक्षा
            2023, we believe in the power of technology to drive innovation and
            progress. We strive to create an inclusive environment that
            celebrates diversity and encourages collaboration. We welcome you to
            join our community and be a part of the future of tech in India.
          </p>
          <div>
            <img
              src="../images/circle.png"
              width="1800px"
              alt="not valid"
              className="my-2 md:mt-20"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  justify-center pb-20">
          <p className="text-white text-xl text-center">
            WHEN <br />
            6th April 2023 (Thursday) <br />
            7th April 2023 (Friday) <br />
            8th April 2023 (Saturday)
          </p>
          <img src="../images/Line.png" alt="not valid" className="md:ml-40" />
        </div>
      </div>
      <div className="flex flex-col gap-20 pb-20">
      <EventMentor/>
      <InternalJudge/>
      </div>
    </>
  );
};

export default Aboutevent;
