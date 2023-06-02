import React,{useState} from "react";
import {IoIosArrowDown} from 'react-icons/io'
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const FAQ = () => {
const [toggle1,setToggle1] = useState(false);
const [toggle2,setToggle2] = useState(false);
const [toggle3,setToggle3] = useState(false);
const [toggle4,setToggle4] = useState(false);
const [toggle5,setToggle5] = useState(false);
const [toggle6,setToggle6] = useState(false);
const [toggle7,setToggle7] = useState(false);

const closeOpen1 = () => {
    if (toggle1 === false) {
        setToggle1(true);
      } else {
        setToggle1(false);
      }
}
const closeOpen2 = () => {
    if (toggle2 === false) {
        setToggle2(true);
      } else {
        setToggle2(false);
      }
}
const closeOpen3 = () => {
    if (toggle3 === false) {
        setToggle3(true);
      } else {
        setToggle3(false);
      }
}
const closeOpen4 = () => {
    if (toggle4 === false) {
        setToggle4(true);
      } else {
        setToggle4(false);
      }
}
const closeOpen5 = () => {
    if (toggle5 === false) {
        setToggle5(true);
      } else {
        setToggle5(false);
      }
}
const closeOpen6 = () => {
    if (toggle6 === false) {
        setToggle6(true);
      } else {
        setToggle6(false);
      }
}
const closeOpen7 = () => {
    if (toggle7 === false) {
        setToggle7(true);
      } else {
        setToggle7(false);
      }
}
  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="pb-10">
        <h1 className="md:text-5xl text-4xl text-center pb-10 px-4 md:px-0">FREQUENTLY ASKED QUESTIONS (FAQ) </h1>
        <div className='flex justify-center my-10'>
          <div  className=' md:w-4/5 w-full mx-4 min-h-min gap-10 flex flex-col rounded p-6 border-teal-500 border-2 '>
               <div className='flex justify-between items-center w-full'>
                 <h1 className='w-11/12 font-bold'>Do I have to pay for participation?</h1>
                 <IoIosArrowDown className='text-xl font-bold cursor-pointer' onClick={closeOpen1}/>
               </div>
              {toggle1 && ( <h1 className='font-bold'>The registration for the hackathon is totally free of cost. Neither the organizing community nor any partner community has right to collect any kinds of fund for Registration. Though there will be no food and accommodation provided. We can alternatively arrange for it by charging some amount. You can contact Mr. Utkarsh Jha(9717563658) for the same.</h1>)}
          </div>
          </div>
        <div className='flex justify-center my-10'>
          <div  className=' md:w-4/5 w-full mx-4 min-h-min gap-10 flex flex-col rounded p-6 border-teal-500 border-2 '>
               <div className='flex justify-between items-center w-full'>
                 <h1 className='w-11/12 font-bold'>Do I need a team for participation?</h1>
                 <IoIosArrowDown className='text-xl font-bold cursor-pointer' onClick={closeOpen2}/>
               </div>
              {toggle2 && ( <h1 className='font-bold'>Yes, it is mandatory to have a team of 2-4 members for participation.</h1>)}
          </div>
          </div>
        <div className='flex justify-center my-10'>
          <div  className=' md:w-4/5 w-full mx-4 min-h-min gap-10 flex flex-col rounded p-6 border-teal-500 border-2 '>
               <div className='flex justify-between items-center w-full'>
                 <h1 className='w-11/12 font-bold'>Who can participate in the hackathon?</h1>
                 <IoIosArrowDown className='text-xl font-bold cursor-pointer' onClick={closeOpen3}/>
               </div>
              {toggle3 && ( <h1 className='font-bold'>Any student from any college in territory of India is welcome to participate. As long as you wish to learn something, we'll be waiting to see you. If you are under 18 years of age, we'll need a parental consent form.</h1>)}
          </div>
          </div>
        <div className='flex justify-center my-10'>
          <div  className=' md:w-4/5 w-full mx-4 min-h-min gap-10 flex flex-col rounded p-6 border-teal-500 border-2 '>
               <div className='flex justify-between items-center w-full'>
                 <h1 className='w-11/12 font-bold'>What if I don't have a team?</h1>
                 <IoIosArrowDown className='text-xl font-bold cursor-pointer' onClick={closeOpen4}/>
               </div>
              {toggle4 && ( <h1 className='font-bold'>Join our <a className="text-teal-500 underline" href="https://discord.gg/nbrHt5MX" rel="noreferrer" target="_blank"> discord server </a> and meet people in the #team-building channel.</h1>)}
          </div>
          </div>
          <div className='flex justify-center my-10'>
          <div  className=' md:w-4/5 w-full mx-4 min-h-min gap-10 flex flex-col rounded p-6 border-teal-500 border-2 '>
               <div className='flex justify-between items-center w-full'>
                 <h1 className='w-11/12 font-bold'>Can I bring a project that was built earlier?</h1>
                 <IoIosArrowDown className='text-xl font-bold cursor-pointer' onClick={closeOpen5}/>
               </div>
              {toggle5 && ( <h1 className='font-bold'>We apologize, but all the hackathon's projects should be developed during the event from scratch.</h1>)}
          </div>
          </div>
          <div className='flex justify-center my-10'>
          <div  className=' md:w-4/5 w-full mx-4 min-h-min gap-10 flex flex-col rounded p-6 border-teal-500 border-2 '>
               <div className='flex justify-between items-center w-full'>
                 <h1 className='w-11/12 font-bold'>What facilities will be provided to the participants?</h1>
                 <IoIosArrowDown className='text-xl font-bold cursor-pointer' onClick={closeOpen6}/>
               </div>
              {toggle6 && ( <h1 className='font-bold'>All the participants will be facilitated with the labs to work during the hackathon period only. No kind of accommodation and travel expenses will be sponsored by organizing community.</h1>)}
          </div>
          </div>
          <div className='flex justify-center my-10'>
          <div  className=' md:w-4/5 w-full mx-4 min-h-min gap-10 flex flex-col rounded p-6 border-teal-500 border-2 '>
               <div className='flex justify-between items-center w-full'>
                 <h1 className='w-11/12 font-bold'>Is there anything that I need to prepare?</h1>
                 <IoIosArrowDown className='text-xl font-bold cursor-pointer' onClick={closeOpen7}/>
               </div>
              {toggle7 && ( <h1 className='font-bold'>Yes, you must start working on your project as soon as you register and build up your coding skills.</h1>)}
          </div>
          </div>
      </div>
    </>
  )
}

export default FAQ
