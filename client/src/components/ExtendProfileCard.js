import React from 'react';
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const ExtendProfileCard = ({extenddata}) => {
  return (
    <>
      <div className='flex flex-col border-2 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className=' hover:from-yellow-500/40 hover:to-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-500/40 border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src={extenddata.profile} alt='not valid' />
        </div>
        </div>
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           <h1 className='text-xl text-gfgmaincolor font-bold'>{extenddata.name}</h1>
           <h1>{extenddata.position}</h1>
           <h1 className='px-4 text-center'>{extenddata.info}</h1>
           <div className='flex gap-8 my-2 text-xl'>
           <NavLink to={extenddata.insta} target='_blank'>
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </NavLink>
           <NavLink to={extenddata.linkedin} target='_blank'>
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </NavLink>
           <NavLink to={extenddata.github} target='_blank'>
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#000000] cursor-pointer' />
           </NavLink>
           </div>
        </div>
      </div>
    </>
  )
}

export default ExtendProfileCard
