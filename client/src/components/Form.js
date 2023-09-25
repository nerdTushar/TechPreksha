import React,{useState} from "react";
import { AiOutlineClose, AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {registerTeam} from '../actions/teamAction';
import Loader from "./Loader";
import { toast } from 'react-toastify';

const Form = () => {
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
  const [confirm_password,setConfirm_password] = useState("");
  const [agreeToTerms,setAgreeToTerms] = useState(false);

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const dispatch = useDispatch();

  const registerState = useSelector((state) => state.registerTeamReducer);
  const { error, loading } = registerState;

  const registerTeamHandler = async(e) => {
    e.preventDefault();
    window.scrollTo({top:0,behavior:"smooth"});
    if(tname === ""||pname === ""||tlname === ""||tlemail === ""||tlnumber === ""||tlrole === ""||tlcollege === ""||tlrollno === ""||tlsemester === ""||
      m2name === ""||m2email === ""||m2number === ""||m2role === ""||m2college === ""||m2rollno === ""||m2semester === ""||
      password === ""||confirm_password === ""){
      toast.error("Empty input details.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9 _]{5,20}$/.test(tname)){
      // team name
      toast.error(<h1>Enter valid team name <br /> i.e. "My Team" short & sweet</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9 _]{5,20}$/.test(pname)){
      // project name
      toast.error(<h1>Invalid project name</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z-' ]{3,20}$/.test(tlname)){
      // team leader name
      toast.error(<h1>Invalid team leader name</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(tlemail)){
      // team leader email
      toast.error(<h1>Invalid team leader email</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[0-9]{10}$/.test(tlnumber)){
      // team leader phone
      toast.error(<h1>Invalid team leader phone number</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9 _-]{5,20}$/.test(tlrole)){
      // team leader role
      toast.error(<h1>Invalid team leader role</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9\s.,'-]{2,45}$/.test(tlcollege)){
      // team leader college name
      toast.error(<h1>Invalid team leader college name</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9-]{1,10}$/.test(tlrollno)){
      // team leader college roll no
      toast.error(<h1>Invalid team leader college roll no</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[1-9]{1,1}$/.test(tlsemester)){
      // team leader semester
      toast.error(<h1>Invalid team leader college semester</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z-' ]{3,20}$/.test(m2name)){
      // member 2 name
      toast.error(<h1>Invalid member 2 name</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(m2email)){
      // member 2 email
      toast.error(<h1>Invalid member 2 email</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[0-9]{10}$/.test(m2number)){
      // member 2 phone
      toast.error(<h1>Invalid member 2 phone number</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9 _-]{5,20}$/.test(m2role)){
      // member 2 role
      toast.error(<h1>Invalid member 2 role</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9\s.,'-]{2,45}$/.test(m2college)){
      // member 2 college name
      toast.error(<h1>Invalid member 2 college name</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9-]{1,10}$/.test(m2rollno)){
      // member 2 college roll no
      toast.error(<h1>Invalid member 2 college roll no</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[1-9]{1,1}$/.test(m2semester)){
      // member 2 semester
      toast.error(<h1>Invalid member 2 college semester</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(m3name !== ""||m3email !== ""||m3number !== ""||m3role !== ""||m3college !== ""||
            m3rollno !== ""||m3semester !== ""){
      // for member 3
      if(m3name === ""||m3email === ""||m3number === ""||m3role === ""||m3college === ""||
         m3rollno === ""||m3semester === ""){
          toast.error("Empty input details of member 3.", {
            position: toast.POSITION.TOP_RIGHT
          });
      }else if(!/^[A-Za-z-' ]{3,20}$/.test(m3name)){
        // member 3 name
        toast.error(<h1>Invalid member 3 name</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(m3email)){
        // member 3 email
        toast.error(<h1>Invalid member 3 email</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[0-9]{10}$/.test(m3number)){
        // member 3 phone
        toast.error(<h1>Invalid member 3 phone number</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[A-Za-z0-9 _-]{5,20}$/.test(m3role)){
        // member 3 role
        toast.error(<h1>Invalid member 3 role</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[A-Za-z0-9\s.,'-]{2,45}$/.test(m3college)){
        // member 3 college name
        toast.error(<h1>Invalid member 3 college name</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[A-Za-z0-9-]{1,10}$/.test(m3rollno)){
        // member 3 college roll no
        toast.error(<h1>Invalid member 3 college roll no</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[1-9]{1,1}$/.test(m3semester)){
        // member 3 semester
        toast.error(<h1>Invalid member 3 college semester</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }else if(m4name !== ""||m4email !== ""||m4number !== ""||m4role !== ""||m4college !== ""||
    m4rollno !== ""||m4semester !== ""){
      // for member 4
      if(m3name === ""||m3email === ""||m3number === ""||m3role === ""||m3college === ""||
      m3rollno === ""||m3semester === ""){
        toast.error("Empty input details of member 3.", {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(m4name === ""||m4email === ""||m4number === ""||m4role === ""||m4college === ""||
      m4rollno === ""||m4semester === ""){
        toast.error("Empty input details of member 4.", {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[A-Za-z-' ]{3,20}$/.test(m4name)){
        // member 4 name
        toast.error(<h1>Invalid member 4 name</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(m4email)){
        // member 4 email
        toast.error(<h1>Invalid member 4 email</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[0-9]{10}$/.test(m4number)){
        // member 4 phone
        toast.error(<h1>Invalid member 4 phone number</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[A-Za-z0-9 _-]{5,20}$/.test(m4role)){
        // member 4 role
        toast.error(<h1>Invalid member 4 role</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[A-Za-z0-9\s.,'-]{2,45}$/.test(m4college)){
        // member 4 college name
        toast.error(<h1>Invalid member 4 college name</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[A-Za-z0-9-]{1,10}$/.test(m4rollno)){
        // member 4 college roll no
        toast.error(<h1>Invalid member 4 college roll no</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }else if(!/^[1-9]{1,1}$/.test(m4semester)){
        // member 4 semester
        toast.error(<h1>Invalid member 4 college semester</h1>, {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=*!])(?!.*\s).{8,20}$/.test(password)){
      // password
      toast.error(<h1>Invalid password <br /> 
      At least one uppercase letter (A-Z) <br />
      At least one lowercase letter (a-z) <br />
      At least one digit (0-9) <br />
      At least one special character <br />
      No any whitespace characters <br />
      Range between 8 to 20 characters</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(password !== confirm_password){
      toast.error("Password do not match.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }else{
      const team = {tname,pname,tlname,tlemail,tlnumber,tlrole,tlcollege,tlrollno,tlsemester,
                    m2name,m2email,m2number,m2role,m2college,m2rollno,m2semester,
                    m3name,m3email,m3number,m3role,m3college,m3rollno,m3semester,
                    m4name,m4email,m4number,m4role,m4college,m4rollno,m4semester,password,confirm_password};
      dispatch(registerTeam(team));
      setTname("");
      setPname("");

      setTlname("");
      setTlemail("");
      setTlnumber("");
      setTlrole("");
      setTlcollege("");
      setTlrollno("");
      setTlsemester("");

      setM2name("");
      setM2email("");
      setM2number("");
      setM2role("");
      setM2college("");
      setM2rollno("");
      setM2semester("");

      setM3name("");
      setM3email("");
      setM3number("");
      setM3role("");
      setM3college("");
      setM3rollno("");
      setM3semester("");

      setM4name("");
      setM4email("");
      setM4number("");
      setM4role("");
      setM4college("");
      setM4rollno("");
      setM4semester("");

      setPassword("");
      setConfirm_password("");

      setAgreeToTerms(false);
    }
  }

  return (
    <>
      {loading && <Loader />}
      {error && toast.error(<h1>Something Went Wrong</h1>, {
          position: toast.POSITION.TOP_RIGHT
        })}
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="text-black flex text-center justify-center">
        <div className="w-full">
          <p className="text-white md:text-6xl text-5xl">Register Now</p>

          <form className="w-full flex flex-col items-center pt-10">
            <div className="flex flex-col md:w-2/5 w-full md:px-0 px-4 gap-6">
              <p className="text-white text-2xl">Team Details:</p>
              <p className="text-white"> Note : Minimum 2 team members compulsory including team leader.</p>
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
            <div className="relative text-start">
              <input
                type={showConfirmPass ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                value={confirm_password}
                onChange={e => setConfirm_password(e.target.value)}
              />
              {showConfirmPass ? <AiFillEye onClick={handleToggleConfirmPasswordVisibility} className="fill-white absolute cursor-pointer right-4 text-xl top-3"/> : <AiFillEyeInvisible onClick={handleToggleConfirmPasswordVisibility} className="fill-teal-500 absolute right-4 text-xl top-3 cursor-pointer"/>}
            </div>
            <div className="text-start">
            <div className="flex justify-start items-center">
              <input
                type="checkbox"
                className="border-solid cursor-pointer border-2 rounded-3xl border-black"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
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
            {agreeToTerms === false ? (
                <h1 className="my-10 bg-slate-200/20 cursor-pointer text-black font-semibold md:w-1/6 w-1/2 py-2 rounded-full text-1xl hover:bg-teal-500/20 hover:text-slate-100">
              Register Team
            </h1>
              ) : (
                <button onClick={registerTeamHandler} className="my-10 bg-slate-200 text-black font-semibold md:w-1/6 w-1/2 py-2 rounded-full text-1xl hover:bg-teal-500 hover:text-slate-100">
                  Register Team
                </button>
            )}
            <span className="text-white text-left mb-20 md:w-2/5 w-full px-4 md:px-0">
            Already Has Team Registered ? &nbsp;
            <NavLink
              to="/login"
              className="text-teal-500 hover:text-white font-black"
            >
              Log in!
            </NavLink>
          </span>
          </form>
        </div>
      </div>
    
    </>
  );
};

export default Form;
