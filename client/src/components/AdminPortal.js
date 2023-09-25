import React,{useEffect} from 'react'
import AdminHeader from './AdminHeader'
import {useDispatch,useSelector} from 'react-redux';
import {getAllTeams,deleteTeamAdmin} from '../actions/teamAction';
import {AiFillDelete} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const AdminPortal = () => {
  const teamState = useSelector(state => state.getAllTeamsReducer);
    const {teams} = teamState;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllTeams());
    },[dispatch]);
  return (
    <>
      <AdminHeader />
        <div className='flex flex-col md:p-20 md:gap-20 gap-10 py-10'>
      <h1 className='text-5xl text-white font-black text-center hover:text-teal-500'>Team List</h1>
      <p className='text-center text-2xl text-white'>Total Teams &nbsp; :- &nbsp; {teams.length}</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-teal-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Team Id
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Team Name
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Project Name
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  T. L. Name
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  T. L. Contact
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                 Team Info
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Delete
                </th>
            </tr>
        </thead>

        <tbody>
        {teams && teams.map(team => (
          <tr key={team._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{team._id}</th>
             <td className="px-6 py-4">{team.tname}</td>
             <td className="px-6 py-4">{team.pname}</td>
             <td className="px-6 py-4">{team.tlname}</td>
             <td className="px-6 py-4">{team.tlnumber}</td>
             <td className="px-6 py-4">
             <NavLink to={`/getteaminfo/${team._id}`}>
             <button className='bg-teal-500 hover:bg-teal-800 w-24 px-4 py-2 rounded-3xl text-white'>Get Info</button>
             </NavLink>
             </td>
             <td className="px-6 py-4"><AiFillDelete style={{color : 'red',cursor : 'pointer'}} 
                onClick={() => {dispatch(deleteTeamAdmin(team._id))}}
              /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
    </>
  )
}

export default AdminPortal
