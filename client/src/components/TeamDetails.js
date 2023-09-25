import React,{useState,useEffect} from "react";
import { AiFillEye, AiFillEdit, AiFillEyeInvisible} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {deleteTeam,getTeamById,updateTeam} from '../actions/teamAction';
import UserHeader from "./UserHeader";
import Footer from "./Footer";
import Loader from './Loader';
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';

const TeamDetails = () => {
  const [tname,setTname] = useState("");
  const [pname,setPname] = useState("");

  const [tlname,setTlname] = useState("");
  const [tlemail,setTlemail] = useState("");
  const [tlnumber,setTlnumber] = useState("");
  const [tlrole,setTlrole] = useState("");
  const [tlcollege,setTlcollege] = useState("");
  const [tlrollno,setTlrollno] = useState("");
  const [tlsemester,setTlsemester] = useState("");

  const [m2name,setM2name] = useState("");
  const [m2email,setM2email] = useState("");
  const [m2number,setM2number] = useState("");
  const [m2role,setM2role] = useState("");
  const [m2college,setM2college] = useState("");
  const [m2rollno,setM2rollno] = useState("");
  const [m2semester,setM2semester] = useState("");

  const [m3name,setM3name] = useState("");
  const [m3email,setM3email] = useState("");
  const [m3number,setM3number] = useState("");
  const [m3role,setM3role] = useState("");
  const [m3college,setM3college] = useState("");
  const [m3rollno,setM3rollno] = useState("");
  const [m3semester,setM3semester] = useState("");

  const [m4name,setM4name] = useState("");
  const [m4email,setM4email] = useState("");
  const [m4number,setM4number] = useState("");
  const [m4role,setM4role] = useState("");
  const [m4college,setM4college] = useState("");
  const [m4rollno,setM4rollno] = useState("");
  const [m4semester,setM4semester] = useState("");

  const [password,setPassword] = useState("");
  const [agreeToTerms,setAgreeToTerms] = useState(false);

  const [showPass, setShowPass] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const dispatch = useDispatch();

  const teamState = useSelector((state) => state.loginTeamReducer);
  const { currentTeam } = teamState;

  const getTeamByState = useSelector(state => state.getTeamByIdReducer);
  const {team} = getTeamByState;
  
  const updateTeamState = useSelector(state => state.updateTeamByIdReducer);
  const {updateloading,updateerror} = updateTeamState;

  useEffect(() => {
    if(team){
      if(team._id === currentTeam._id){
        setTname(team.tname);
        setPname(team.pname);

        setTlname(team.tlname);
        setTlemail(team.tlemail);
        setTlnumber(team.tlnumber);
        setTlrole(team.tlrole);
        setTlcollege(team.tlcollege);
        setTlrollno(team.tlrollno);
        setTlsemester(team.tlsemester);

        setM2name(team.m2name);
        setM2email(team.m2email);
        setM2number(team.m2number);
        setM2role(team.m2role);
        setM2college(team.m2college);
        setM2rollno(team.m2rollno);
        setM2semester(team.m2semester);

        setM3name(team.m3name);
        setM3email(team.m3email);
        setM3number(team.m3number);
        setM3role(team.m3role);
        setM3college(team.m3college);
        setM3rollno(team.m3rollno);
        setM3semester(team.m3semester);

        setM4name(team.m4name);
        setM4email(team.m4email);
        setM4number(team.m4number);
        setM4role(team.m4role);
        setM4college(team.m4college);
        setM4rollno(team.m4rollno);
        setM4semester(team.m4semester);

        setPassword(team.password);
    }else{
      dispatch(getTeamById(currentTeam._id));
    } 
    }else{
      dispatch(getTeamById(currentTeam._id));
    }
    
  },[team,dispatch,currentTeam._id]);

  const updateTeamHandler = async(e) => {
    e.preventDefault();
    window.scrollTo({top:0,behavior:"smooth"});
    const teamData = {tname,pname,tlname,tlemail,tlnumber,tlrole,tlcollege,tlrollno,tlsemester,
      m2name,m2email,m2number,m2role,m2college,m2rollno,m2semester,
      m3name,m3email,m3number,m3role,m3college,m3rollno,m3semester,
      m4name,m4email,m4number,m4role,m4college,m4rollno,m4semester,password};
      dispatch(updateTeam(teamData,currentTeam._id));
      setAgreeToTerms(false);
  }

  return (
    <>
      <UserHeader />
      {updateloading && (<Loader />)}
      {updateerror && toast.error("Update Team Error", {
          position: toast.POSITION.TOP_RIGHT
      })}
      <div className="text-black flex text-center justify-center">
        <div className="w-full">
          <form className="w-full flex flex-col items-center pt-10">
            <div className="flex flex-col md:w-2/5 w-full md:px-0 px-4 gap-6">
              <p className="text-white flex items-center justify-center gap-4 text-2xl"><AiFillEdit/>Edit Team Details:</p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Team Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={tname}
                  onChange={e => setTname(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Project Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={pname}
                  onChange={e => setPname(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:w-2/5 w-full md:px-0 px-4 my-10">
              <p className="text-white text-2xl">Team Member 1 ( Leader ) :</p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Leader Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={tlname}
                  onChange={e => setTlname(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="email"
                  placeholder="Leader Email"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={tlemail}
                  onChange={e => setTlemail(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="Leader Phone"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={tlnumber}
                  onChange={e => setTlnumber(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Role"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={tlrole}
                  onChange={e => setTlrole(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={tlcollege}
                  onChange={e => setTlcollege(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Roll No"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={tlrollno}
                  onChange={e => setTlrollno(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="Semester"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={tlsemester}
                  onChange={e => setTlsemester(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:w-2/5 w-full md:px-0 px-4">
              <p className="text-white text-2xl">Team Member 2 </p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m2name}
                  onChange={e => setM2name(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="email"
                  placeholder="Member Email"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m2email}
                  onChange={e => setM2email(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="Member Phone"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m2number}
                  onChange={e => setM2number(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Role"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m2role}
                  onChange={e => setM2role(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m2college}
                  onChange={e => setM2college(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College Roll No"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m2rollno}
                  onChange={e => setM2rollno(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="Semester"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m2semester}
                  onChange={e => setM2semester(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:w-2/5 w-full md:px-0 px-4 my-10">
              <p className="text-white text-2xl">Team Member 3 ( Optional ) </p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m3name}
                  onChange={e => setM3name(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="email"
                  placeholder="Member Email"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m3email}
                  onChange={e => setM3email(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Phone"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m3number}
                  onChange={e => setM3number(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Role"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m3role}
                  onChange={e => setM3role(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m3college}
                  onChange={e => setM3college(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College Roll No"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m3rollno}
                  onChange={e => setM3rollno(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Semester"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m3semester}
                  onChange={e => setM3semester(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:w-2/5 w-full md:px-0 px-4">
              <p className="text-white text-2xl">Team Member 4 ( Optional ) </p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m4name}
                  onChange={e => setM4name(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="email"
                  placeholder="Member Email"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m4email}
                  onChange={e => setM4email(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Phone"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m4number}
                  onChange={e => setM4number(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Role"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m4role}
                  onChange={e => setM4role(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m4college}
                  onChange={e => setM4college(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College Roll No"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m4rollno}
                  onChange={e => setM4rollno(e.target.value)}
                />
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Semester"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  value={m4semester}
                  onChange={e => setM4semester(e.target.value)}
                />
              </div>
              <div className="relative mt-10 text-start">
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {showPass ? <AiFillEye onClick={handleTogglePasswordVisibility} className="fill-white absolute cursor-pointer right-4 text-xl top-3"/> : <AiFillEyeInvisible onClick={handleTogglePasswordVisibility} className="fill-teal-500 absolute right-4 text-xl top-3 cursor-pointer"/>}
            </div>
            <div className="text-start">
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
            </div>
            <div className="flex justify-between md:w-2/5 w-full px-4 md:px-0">
            
            {agreeToTerms === false ? (
                <h1 className="my-10 cursor-pointer bg-slate-200/20 text-black font-semibold md:w-1/3 w-[130px] py-2 rounded-full text-1xl hover:bg-teal-500/20 hover:text-slate-100">
              Update Team
            </h1>
              ) : (
                <button onClick={updateTeamHandler} className="my-10 bg-slate-200 text-black font-semibold md:w-1/3 w-[130px] py-2 rounded-full text-1xl hover:bg-teal-500 hover:text-slate-100">
                  Update Team
                </button>
            )}
            {agreeToTerms === false ? (
                <h1 className="my-10 cursor-pointer bg-slate-200/20 text-black font-semibold md:w-1/3 w-[130px] py-2 rounded-full text-1xl hover:bg-teal-500/20 hover:text-slate-100">
              Delete Team
            </h1>
              ) : (
                <h1 onClick={() => {dispatch(deleteTeam(currentTeam._id))}} className="my-10 bg-slate-200 text-black font-semibold md:w-1/3 w-[130px] py-2 rounded-full text-1xl cursor-pointer hover:bg-teal-500 hover:text-slate-100">
                  Delete Team
                </h1>
            )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamDetails;
