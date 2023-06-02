import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {getTeamById} from '../actions/teamAction';
import { useParams } from 'react-router-dom';

const GetTeamInfo = () => {
    const {teamId} = useParams();
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

  const dispatch = useDispatch();

  const getTeamByState = useSelector(state => state.getTeamByIdReducer);
  const {team} = getTeamByState;

  useEffect(() => {
    if(team){
      if(team._id === teamId){
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
        
    }else{
      dispatch(getTeamById(teamId));
    } 
    }else{
      dispatch(getTeamById(teamId));
    }
    
  },[team,dispatch,teamId]);

  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="flex flex-col items-center md:px-0 px-4 pb-20">
        <div className="md:text-xl flex flex-col gap-4">
        <div>
        <h1><span className="text-teal-500 font-semibold">Team ID : &nbsp; </span> {teamId}</h1>
      <h1><span className="text-teal-500 font-semibold">Team Name : &nbsp; </span> {tname}</h1>
      <h1><span className="text-teal-500 font-semibold">Project Name : &nbsp; </span> {pname}</h1>
        </div>
       
      <div>
      <h1><span className="text-teal-500 font-semibold">Team Leader Name : &nbsp; </span> {tlname}</h1>
      <h1><span className="text-teal-500 font-semibold">Team Leader Email : &nbsp; </span> {tlemail}</h1>
      <h1><span className="text-teal-500 font-semibold">Team Leader Number : &nbsp; </span> {tlnumber}</h1>
      <h1><span className="text-teal-500 font-semibold">Team Leader Role : &nbsp; </span> {tlrole}</h1>
      <h1><span className="text-teal-500 font-semibold">Team Leader College : &nbsp; </span> {tlcollege}</h1>
      <h1><span className="text-teal-500 font-semibold">Team Leader Roll No. : &nbsp; </span> {tlrollno}</h1>
      <h1><span className="text-teal-500 font-semibold">Team Leader Semester : &nbsp; </span> {tlsemester}</h1>
      </div>

      <div>
      <h1><span className="text-teal-500 font-semibold">2nd Team Member Name : &nbsp; </span> {m2name}</h1>
      <h1><span className="text-teal-500 font-semibold">2nd Team Member Email : &nbsp; </span> {m2email}</h1>
      <h1><span className="text-teal-500 font-semibold">2nd Team Member Number : &nbsp; </span> {m2number}</h1>
      <h1><span className="text-teal-500 font-semibold">2nd Team Member Role : &nbsp; </span> {m2role}</h1>
      <h1><span className="text-teal-500 font-semibold">2nd Team Member College : &nbsp; </span> {m2college}</h1>
      <h1><span className="text-teal-500 font-semibold">2nd Team Member Roll No. : &nbsp; </span> {m2rollno}</h1>
      <h1><span className="text-teal-500 font-semibold">2nd Team Member Semester : &nbsp; </span> {m2semester}</h1>
      </div>

      <div>
      <h1><span className="text-teal-500 font-semibold">3rd Team Member Name : &nbsp; </span> {m3name}</h1>
      <h1><span className="text-teal-500 font-semibold">3rd Team Member Email : &nbsp; </span> {m3email}</h1>
      <h1><span className="text-teal-500 font-semibold">3rd Team Member Number : &nbsp; </span> {m3number}</h1>
      <h1><span className="text-teal-500 font-semibold">3rd Team Member Role : &nbsp; </span> {m3role}</h1>
      <h1><span className="text-teal-500 font-semibold">3rd Team Member College : &nbsp; </span> {m3college}</h1>
      <h1><span className="text-teal-500 font-semibold">3rd Team Member Roll No. : &nbsp; </span> {m3rollno}</h1>
      <h1><span className="text-teal-500 font-semibold">3rd Team Member Semester : &nbsp; </span> {m3semester}</h1>
      </div>

      <div>
      <h1><span className="text-teal-500 font-semibold">4th Team Member Name : &nbsp; </span> {m4name}</h1>
      <h1><span className="text-teal-500 font-semibold">4th Team Member Email : &nbsp; </span> {m4email}</h1>
      <h1><span className="text-teal-500 font-semibold">4th Team Member Number : &nbsp; </span> {m4number}</h1>
      <h1><span className="text-teal-500 font-semibold">4th Team Member Role : &nbsp; </span> {m4role}</h1>
      <h1><span className="text-teal-500 font-semibold">4th Team Member College : &nbsp; </span> {m4college}</h1>
      <h1><span className="text-teal-500 font-semibold">4th Team Member Roll No. : &nbsp; </span> {m4rollno}</h1>
      <h1><span className="text-teal-500 font-semibold">4th Team Member Semester : &nbsp; </span> {m4semester}</h1>
      </div>
        </div>
      </div>
    </>
  )
}

export default GetTeamInfo
