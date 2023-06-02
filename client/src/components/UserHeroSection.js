import React,{useState,useEffect} from "react";
import Timer from "./Timer";
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import UserHeader from "./UserHeader";
import Footer from "./Footer";
import {getProjectById} from '../actions/teamAction';

export default function UserHerosection() {
  const [showSubmit,setShowSubmit] = useState(false);
  const teamState = useSelector((state) => state.loginTeamReducer);
  const { currentTeam } = teamState;

  const getProjectByState = useSelector(state => state.getProjectByIdReducer);
  const {project} = getProjectByState;

  const dispatch = useDispatch();

  useEffect(() => {
    if(currentTeam){
      if(project){
        setShowSubmit(true);
      }else{
        dispatch(getProjectById(currentTeam._id));
      }
    }
  },[project,dispatch,currentTeam]);

  return (<div className="flex flex-col justify-between h-full gap-20">
     <UserHeader />
     <div className="font-['Jost'] md:mx-10 ">
      {/* <video src='videos/neonblue.mp4' autoPlay={true} loop muted className='absolute top-0 left-0  object-cover'/> */}
      
        <div className="flex flex-col gap-8">
          <div className="flex md:flex-row flex-col md:px-10 px-2 justify-between">
            <div className="text-white flex flex-col justify-center gap-10">
              <p className="text-8xl text-center md:text-left ">
                Tech-प्रेक्षा
              </p>
              <p className="text-xl text-center md:text-left">
                Registration Closes In:
              </p>
              <Timer />
            </div>

            <div
              className="text-4xl font-bold flex flex-col text-center md:text-left gap-0"
            >
              {/* <div style={{ displaa flexDirection:"column", gap:10}}>  */}
              <NavLink to="/aboutevent">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  ABOUT EVENT{" "}
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/prizes">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  PRIZES{" "}
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/organizers">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  ORGANIZERS
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/sponsors">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  SPONSORS
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/techstacks">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  TECH & STACKS
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/schedule">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  SCHEDULE{" "}
                </span>
              </NavLink>{" "}
              <br />
              <NavLink to="/venue">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  VENUE{" "}
                </span>
              </NavLink>
              <br />
              <NavLink to="/faq">
                {" "}
                <span className="font-outline-1 text-black hover:text-white">
                  {" "}
                  FAQ{" "}
                </span>
              </NavLink>
              {/* </div> */}
            </div> 
          </div>
          <h1 className="color1 color2 md:text-6xl text-5xl text-center">Event Starts In</h1>
            <div className="flex gap-6 justify-center">
              <h1 className="md:text-6xl text-5xl color1">Event</h1>
              <h1 className="md:text-6xl text-5xl color2">Registered</h1>
              </div>
              {showSubmit ? (
                <div className="flex gap-6 justify-center">
              <h1 className="text-4xl color2">Project</h1>
              <h1 className="text-4xl color1">Submitted</h1>
              </div>
              ) : (
                <div className="flex justify-center">
              <NavLink to="/projectsubmit">
            <button className=" bg-white text-black font-semibold w-[150px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-white md:mx-1 mx-2 ">
              Project Submit
            </button>
            </NavLink>
              </div>
              )}
        </div>
    </div>
     
    <Footer />
    </div>
  );
}
