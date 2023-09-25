import React from 'react';
import coremembers from '../Coreteam-data';
import CoreProfileCard from './CoreProfileCard';
import ExtendedTeam from './ExtendedTeam';
import {NavLink} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';

const CoreTeam = () => {
  return (<>
    <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
    <div className='flex justify-center'>
        <div className='container'>
        <h1 className='text-gfgmaincolor font-black text-6xl text-center md:mb-24 mb-14'>CORE TEAM</h1>
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-20 gap-y-10 md:gap-y-14 px-12 md:px-20'>
    
          {coremembers && coremembers.map(member => (
            <CoreProfileCard key={member.id} coredata={member} />
          ))}
          
        </div>
        </div>
    </div>
    <ExtendedTeam />
    </>
  )
}

export default CoreTeam
