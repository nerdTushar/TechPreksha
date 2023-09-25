import React from 'react';
import {NavLink} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';

const TermsPolicy = () => {
  return (
    <>
    <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className='flex flex-col items-center md:gap-20 gap-10 md:pb-20 pb-10'>
      <h1 className='text-white text-center text-5xl'>Terms & Conditions</h1>
      <div className='md:w-4/5 w-full px-4 md:px-0 flex flex-col gap-4'>
      <h1>1. Event is planned to be Conducted in 3 Rounds Namely:</h1>
      <h1 className='md:pl-8 pl-4'>1) Idea Submission Round (Online Mode)</h1>
      <h1 className='md:pl-8 pl-4'>2) Idea and Sample Prototype Presentation (Offline Mode)</h1>
      <h1 className='md:pl-8 pl-4'>3) Final Project Presentation (Offline Mode)</h1>
      <h1>2. There is not Participation/Entry Fees.</h1>
      <h1>3. Teams Qualifying 1st Round needs to confirm RSPV for offline event within given time period failing to so, will stand the cancellation of team and opportunity will be passed to next team on top of waiting list.</h1>
      <h1>4. After First Round 25 Teams will be selected for offline event and 10 Teams will be listed in waiting list.</h1>
      <h1>5. If any of selected team will fail to submit the RSPV then the team on the Top of Waiting List will selected for the next round.</h1>
      <h1>6. Team members need to plan and accommodate their trip for event themselves no kind of funding will be provided by Event Organization/Organizers/Sponsors.</h1>
      <h1>7. All Team will need to reach the venue by 9:00 venue till 5:00PM.</h1>
      <h1>8. All Team Members need to carry and produce their original govt. ID and College ID to the event whenever asked.</h1>
      <h1>9. We follow strict code of conduct and if any team member is found to be involved in illegal activities during the event then strict action will be taken against them.</h1>
      <h1>10.If any team member is found to be miss behave with any Member/Organizing Team and Community Manager/ Guest / Teacher Faculty and Staff of Dronacharya College of Engineering / Judge then whole team will be disqualified from all event held in future.</h1>
      <h1>11. If any team member is found to damage any property on the event site will be suspended from the event until he/she will submit the fine/compensate the loss.</h1>
      </div>
      </div>
    </>
  )
}

export default TermsPolicy
