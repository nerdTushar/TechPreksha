import React from 'react';
import eventmembers from '../Eventmentors-data';
import MentorProfileCard from './MentorProfileCard';

const EventMentor = () => {
  return (
    <>
        <div className='flex justify-center'>
        <div className='container'>
        <h1 className="text-gfgmaincolor font-['Jost'] md:text-6xl text-5xl text-center md:mb-24 mb-14">Event Mentors</h1>
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-20 gap-y-10 md:gap-y-14 px-12 md:px-20'>
    
          {eventmembers && eventmembers.map(member => (
            <MentorProfileCard key={member.id} mentordata={member} />
          ))}
          
        </div>
        </div>
    </div>
    </>
  )
}

export default EventMentor
