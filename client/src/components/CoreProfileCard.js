import React from 'react';
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const CoreProfileCard = ({coredata}) => {
  return (
    <>
      <div className='flex flex-col border-2 border-gfgmaincolor shadow-2xl hover:shadow-black   md:w-1/5 w-full h-min hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        rounded-3xl'>
        <div className='hover:from-[#308d42]/40 hover:to-[#308d42] bg-gradient-to-r from-[#308d42]  to-[#308d42]/40 border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src={coredata.profile} alt='not valid' />
        </div>
        </div>
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           <h1 className='text-xl text-gfgmaincolor font-bold'>{coredata.name}</h1>
           <h1>{coredata.position}</h1>
           <h1 className='px-4 text-center'>{coredata.info}</h1>
           <div className='flex gap-8 my-2 text-xl'>
           <NavLink to={coredata.insta} target='_blank'>
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] hover:cursor-pointer'  />
           </NavLink>
           <NavLink to={coredata.linkedin} target='_blank'>
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </NavLink>
           <NavLink to={coredata.github} target='_blank'>
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#000000] cursor-pointer' />
           </NavLink>
           </div>
        </div>
      </div>
    </>
  )
}

export default CoreProfileCard
