import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose} from "react-icons/ai";
import {submitProject} from '../actions/teamAction';
import { toast } from 'react-toastify';

const ProjectSubmit = () => {
    const [projectabstract,setProjectAbstract] = useState("");
    const [projectyoutube,setProjectYoutube] = useState("");
    const [agreeToTerms,setAgreeToTerms] = useState(false);

    const teamState = useSelector((state) => state.loginTeamReducer);
    const { currentTeam } = teamState;

    const dispatch = useDispatch();

    const submitProjectHandler = async(e) => {
      e.preventDefault();
      if(projectabstract === "" || projectyoutube === ""){
        toast.error("Empty input details.", {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(projectabstract)){
        toast.error(<h1>Invalid project abstract link</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(projectyoutube)){
        toast.error(<h1>Invalid project youtube link</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else{
        dispatch(submitProject(currentTeam._id,currentTeam.tname,currentTeam.pname,projectabstract,projectyoutube));
        setProjectAbstract("");
        setProjectYoutube("");
      }
      setAgreeToTerms(false);
    }

  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="flex flex-col gap-20 md:pt-24 pb-40">
      <h1 className="text-5xl text-center">Project Submission</h1>
      <form>
        <div className="flex flex-col items-center gap-10">
        <span className="flex flex-col gap-2 md:w-3/5 w-full px-4 md:px-0">
          {" "}
          <span className="text-2xl">Project Abstract Link </span>{" "}
          <span className="text-sm">
          Note: Please add a Google drive link containing pdf of your project abstract.{" "}
          </span>{" "}
          <div className="relative text-start">
            <input
              type="text"
              placeholder="Enter the project abstract link"
              className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
              value={projectabstract}
              onChange={e => setProjectAbstract(e.target.value)}
            />
          </div>
        </span>
        <span className="flex flex-col gap-2 md:w-3/5 w-full md:px-0 px-4">
          {" "}
          <span className="text-2xl">Project Youtube Link </span>{" "}
          <span className="text-sm">
            Note : You have to create a video of your project explaining
            briefly not more than 10 minutes and upload it on the youtube
            and provide us the link.{" "}
          </span>{" "}
          <div className="relative text-start">
            <input
              type="text"
              placeholder="Enter the project youtube link"
              className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
              value={projectyoutube}
              onChange={e => setProjectYoutube(e.target.value)}
            />
          </div>
        </span>
        <div className="text-start md:w-3/5 w-full px-4 md:px-0">
          <div className="flex justify-start items-center">
            <input
              type="checkbox"
              className="border-solid cursor-pointer border-2 rounded-3xl border-black"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              style={{ accentColor: "#308d42" }}
            />
            <span className="ml-2 text-white flex">
              I accept the &nbsp;{" "}
              <NavLink to='/termspolicy' className="flex text-teal-500 hover:text-white font-bold">
                <p>
                  Terms of Use
                </p>
                &nbsp; & &nbsp;
                <p>
                  Privacy Policy
                </p>
                </NavLink>
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {agreeToTerms === false ? (
            <h1 className=" bg-slate-200/20 flex justify-center items-center cursor-pointer text-black font-semibold w-[250px] rounded-full  h-[45px] text-1xl hover:bg-teal-500/20 hover:text-slate-100 md:mx-1 mx-2 ">
              <span>Submit Project</span>
            </h1>
          ) : (
            <button onClick={submitProjectHandler} className=" bg-slate-200 text-black font-semibold w-[250px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-slate-100 md:mx-1 mx-2 ">
              Submit Project
            </button>
          )}
        </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default ProjectSubmit;
