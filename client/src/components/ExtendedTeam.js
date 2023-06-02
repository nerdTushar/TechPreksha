import React from 'react';
import extendmembers from '../Extendteam-data';
import ExtendProfileCard from './ExtendProfileCard';

const ExtendedTeam = () => {
  return (
    <div className='flex justify-center'>
        <div className='container pb-20'>
        <h1 className='text-gfgmaincolor font-black text-6xl text-center md:my-24 my-14'>EXTENDED TEAM</h1>
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-20 gap-y-10 md:gap-y-14 px-12 md:px-20'>
    
          {extendmembers && extendmembers.map(extendmember => (
            <ExtendProfileCard key={extendmember.id} extenddata={extendmember} />
          ))}
          
        </div>
        </div>
    </div>
  )
}

export default ExtendedTeam
