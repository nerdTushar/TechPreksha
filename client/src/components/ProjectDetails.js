import React,{useEffect} from 'react'
import AdminHeader from './AdminHeader'
import {useDispatch,useSelector} from 'react-redux';
import {getAllProjects,deleteProject} from '../actions/teamAction';
import {AiFillDelete} from 'react-icons/ai';

const ProjectDetails = () => {
  const projectState = useSelector(state => state.getAllProjectsReducer);
    const {projects} = projectState;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllProjects());
    },[dispatch]);
  return (
    <>
      <AdminHeader />
        <div className='flex flex-col md:p-20 md:gap-20 gap-10 py-10'>
      <h1 className='text-5xl text-white font-black text-center hover:text-teal-500'>Project List</h1>
      <p className='text-center text-2xl text-white'>Total Projects &nbsp; :- &nbsp; {projects.length}</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-teal-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Project Id
                </th>
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
                  Project Abstract Link <br />
                  Project Youtube Link
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Delete
                </th>
            </tr>
        </thead>

        <tbody>
        {projects && projects.map(project => (
          <tr key={project._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{project._id}</th>
             <td className="px-6 py-4">{project.team_id}</td>
             <td className="px-6 py-4">{project.tname}</td>
             <td className="px-6 py-4">{project.pname}</td>
             <td className="px-6 py-4 flex flex-col gap-2">
             <a href={`${project.projectabstract}`} rel="noreferrer" target="_blank">{project.projectabstract}</a>
             <a href={`${project.projectyoutube}`} rel="noreferrer" target="_blank">{project.projectyoutube}</a>
             </td>
             <td className="px-6 py-4"><AiFillDelete style={{color : 'red',cursor : 'pointer'}} 
                onClick={() => {dispatch(deleteProject(project._id))}}
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

export default ProjectDetails
