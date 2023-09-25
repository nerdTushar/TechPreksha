import React from 'react';
import internalmembers from '../Internaljudges-data';
import JudgeProfileCard from './JudgeProfileCard';

const InternalJudge = () => {
  return (
    <>
        <div className='flex justify-center'>
        <div className='container'>
        <h1 className="text-gfgmaincolor font-['Jost'] md:text-6xl text-5xl text-center md:mb-24 mb-14">Internal Judges</h1>
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-24 gap-y-10 md:gap-y-14 px-12 md:px-20'>
    
          {internalmembers && internalmembers.map(member => (
            <JudgeProfileCard key={member.id} judgedata={member} />
          ))}
          
        </div>
        </div>
    </div>
    </>
  )
}

export default InternalJudge
