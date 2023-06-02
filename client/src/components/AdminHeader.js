import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {logoutAdmin} from '../actions/adminAction';

const AdminHeader = () => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="pt-8">
        <nav className="bg-white/30 backdrop-blur-md opacity-75 md:mx-8 py-2 md:px-1 mx-2 md:rounded-full flex justify-between items-center ">
          <div>
            <img
              src="../images/Myproject.png"
              width="50px"
              alt="not valid"
              className="mx-2"
            />
          </div>
          
          <div className="flex md:flex-row flex-col gap-2">
            <NavLink to="/">
            <button className=" bg-white text-black font-semibold w-[150px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-white md:mx-1 mx-2 ">
              Dashboard
            </button>
            </NavLink>
            <NavLink to="/projectdetails">
            <button className=" bg-white text-black font-semibold w-[150px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-white md:mx-1 mx-2 ">
              Project Details
            </button>
            </NavLink>
            <button onClick={() => {dispatch(logoutAdmin())}} className=" bg-white text-black font-semibold w-[120px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-white md:mx-1 mx-2 ">
              Logout
            </button>
            </div>
        </nav>
      </div>
    </>
  );
};

export default AdminHeader;
