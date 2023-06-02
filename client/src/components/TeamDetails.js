import React,{useState,useEffect} from "react";
import { AiFillEye, AiFillEdit, AiFillEyeInvisible, AiFillExclamationCircle, AiFillCheckCircle } from "react-icons/ai";
import { useFormik } from "formik";
import {editteamSchema} from '../schemas';
import { useDispatch, useSelector } from "react-redux";
import {deleteTeam,getTeamById,updateTeam} from '../actions/teamAction';
import UserHeader from "./UserHeader";
import Footer from "./Footer";
import Loader from './Loader';
import Error from './Error';
import { NavLink } from "react-router-dom";

const TeamDetails = () => {
  const [showPass, setShowPass] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const initialValues = {
    tname : "",
    pname : "",

    tlname : "",
    tlemail : "",
    tlnumber : "",
    tlrole : "",
    tlcollege : "",
    tlrollno : "",
    tlsemester : "",
    
    m2name : "",
    m2email : "",
    m2number : "",
    m2role : "",
    m2college : "",
    m2rollno : "",
    m2semester : "",

    m3name : "",
    m3email : "",
    m3number : "",
    m3role : "",
    m3college : "",
    m3rollno : "",
    m3semester : "",

    m4name : "",
    m4email : "",
    m4number : "",
    m4role : "",
    m4college : "",
    m4rollno : "",
    m4semester : "",

    password : "",
    agreeToTerms: false,
  };

  const dispatch = useDispatch();

  const teamState = useSelector((state) => state.loginTeamReducer);
  const { currentTeam } = teamState;

  const getTeamByState = useSelector(state => state.getTeamByIdReducer);
  const {team} = getTeamByState;
  
  const updateTeamState = useSelector(state => state.updateTeamByIdReducer);
  const {updateloading,updateerror} = updateTeamState;

  

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } =
  
    useFormik({
      initialValues,
      validationSchema: editteamSchema,
      onSubmit: (values, action) => {
        dispatch(updateTeam(values,currentTeam._id));
        action.resetForm();
      },
  });

  useEffect(() => {
    if(team){
      if(team._id === currentTeam._id){
        setValues({
          ...values,
          tname: team.tname,
          pname: team.pname,

          tlname: team.tlname,
          tlemail: team.tlemail,
          tlnumber: team.tlnumber,
          tlrole: team.tlrole,
          tlcollege: team.tlcollege,
          tlrollno: team.tlrollno,
          tlsemester: team.tlsemester,

          m2name: team.m2name,
          m2email: team.m2email,
          m2number: team.m2number,
          m2role: team.m2role,
          m2college: team.m2college,
          m2rollno: team.m2rollno,
          m2semester: team.m2semester,

          m3name: team.m3name,
          m3email: team.m3email,
          m3number: team.m3number,
          m3role: team.m3role,
          m3college: team.m3college,
          m3rollno: team.m3rollno,
          m3semester: team.m3semester,

          m4name: team.m4name,
          m4email: team.m4email,
          m4number: team.m4number,
          m4role: team.m4role,
          m4college: team.m4college,
          m4rollno: team.m4rollno,
          m4semester: team.m4semester,

          password: team.password,
        });
    }else{
      dispatch(getTeamById(currentTeam._id));
    } 
    }else{
      dispatch(getTeamById(currentTeam._id));
    }
    
  },[team,dispatch,currentTeam._id]);

  return (
    <>
      <UserHeader />
      {updateloading && (<Loader />)}
    {updateerror && (<Error error='Update Team Error'/>)}
      <div className="text-black flex text-center justify-center">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center pt-10">
            <div className="flex flex-col md:w-2/5 w-full md:px-0 px-4 gap-6">
              <p className="text-white flex items-center justify-center gap-4 text-2xl"><AiFillEdit/>Edit Team Details:</p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Team Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="tname"
                  value={values.tname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.tname === "" ? null : errors.tname && touched.tname ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.tname === "" && errors.tname && touched.tname ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.tname && touched.tname ? (
                <p className="text-red-500">{errors.tname}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Project Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="pname"
                  value={values.pname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.pname === "" ? null : errors.pname && touched.pname ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.pname === "" && errors.pname && touched.pname ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.pname && touched.pname ? (
                <p className="text-red-500">{errors.pname}</p>
              ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-6 md:w-2/5 w-full md:px-0 px-4 my-10">
              <p className="text-white text-2xl">Team Member 1 ( Leader ) :</p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Leader Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="tlname"
                  value={values.tlname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.tlname === "" ? null : errors.tlname && touched.tlname ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.tlname === "" && errors.tlname && touched.tlname ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.tlname && touched.tlname ? (
                <p className="text-red-500">{errors.tlname}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="email"
                  placeholder="Leader Email"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="tlemail"
                  value={values.tlemail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.tlemail === "" ? null : errors.tlemail && touched.tlemail ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.tlemail === "" && errors.tlemail && touched.tlemail ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.tlemail && touched.tlemail ? (
                <p className="text-red-500">{errors.tlemail}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="Leader Phone"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="tlnumber"
                  value={values.tlnumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.tlnumber === "" ? null : errors.tlnumber && touched.tlnumber ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.tlnumber === "" && errors.tlnumber && touched.tlnumber ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.tlnumber && touched.tlnumber ? (
                <p className="text-red-500">{errors.tlnumber}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Role"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="tlrole"
                  value={values.tlrole}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.tlrole === "" ? null : errors.tlrole && touched.tlrole ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.tlrole === "" && errors.tlrole && touched.tlrole ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.tlrole && touched.tlrole ? (
                <p className="text-red-500">{errors.tlrole}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="tlcollege"
                  value={values.tlcollege}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.tlcollege === "" ? null : errors.tlcollege && touched.tlcollege ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.tlcollege === "" && errors.tlcollege && touched.tlcollege ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.tlcollege && touched.tlcollege ? (
                <p className="text-red-500">{errors.tlcollege}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="Roll No"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="tlrollno"
                  value={values.tlrollno}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.tlrollno === "" ? null : errors.tlrollno && touched.tlrollno ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.tlrollno === "" && errors.tlrollno && touched.tlrollno ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.tlrollno && touched.tlrollno ? (
                <p className="text-red-500">{errors.tlrollno}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="Semester"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="tlsemester"
                  value={values.tlsemester}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.tlsemester === "" ? null : errors.tlsemester && touched.tlsemester ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.tlsemester === "" && errors.tlsemester && touched.tlsemester ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.tlsemester && touched.tlsemester ? (
                <p className="text-red-500">{errors.tlsemester}</p>
              ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-6 md:w-2/5 w-full md:px-0 px-4">
              <p className="text-white text-2xl">Team Member 2 </p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m2name"
                  value={values.m2name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m2name === "" ? null : errors.m2name && touched.m2name ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m2name === "" && errors.m2name && touched.m2name ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m2name && touched.m2name ? (
                <p className="text-red-500">{errors.m2name}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="email"
                  placeholder="Member Email"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m2email"
                  value={values.m2email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m2email === "" ? null : errors.m2email && touched.m2email ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m2email === "" && errors.m2email && touched.m2email ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m2email && touched.m2email ? (
                <p className="text-red-500">{errors.m2email}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="Member Phone"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m2number"
                  value={values.m2number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m2number === "" ? null : errors.m2number && touched.m2number ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m2number === "" && errors.m2number && touched.m2number ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m2number && touched.m2number ? (
                <p className="text-red-500">{errors.m2number}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Role"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m2role"
                  value={values.m2role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m2role === "" ? null : errors.m2role && touched.m2role ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m2role === "" && errors.m2role && touched.m2role ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m2role && touched.m2role ? (
                <p className="text-red-500">{errors.m2role}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m2college"
                  value={values.m2college}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m2college === "" ? null : errors.m2college && touched.m2college ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m2college === "" && errors.m2college && touched.m2college ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m2college && touched.m2college ? (
                <p className="text-red-500">{errors.m2college}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="College Roll No"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m2rollno"
                  value={values.m2rollno}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m2rollno === "" ? null : errors.m2rollno && touched.m2rollno ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m2rollno === "" && errors.m2rollno && touched.m2rollno ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m2rollno && touched.m2rollno ? (
                <p className="text-red-500">{errors.m2rollno}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="number"
                  placeholder="Semester"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m2semester"
                  value={values.m2semester}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m2semester === "" ? null : errors.m2semester && touched.m2semester ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m2semester === "" && errors.m2semester && touched.m2semester ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m2semester && touched.m2semester ? (
                <p className="text-red-500">{errors.m2semester}</p>
              ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-6 md:w-2/5 w-full md:px-0 px-4 my-10">
              <p className="text-white text-2xl">Team Member 3 ( Optional ) </p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m3name"
                  value={values.m3name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m3name === "" ? null : errors.m3name && touched.m3name ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m3name === "" && errors.m3name && touched.m3name ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m3name && touched.m3name ? (
                <p className="text-red-500">{errors.m3name}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="email"
                  placeholder="Member Email"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m3email"
                  value={values.m3email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m3email === "" ? null : errors.m3email && touched.m3email ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m3email === "" && errors.m3email && touched.m3email ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m3email && touched.m3email ? (
                <p className="text-red-500">{errors.m3email}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Phone"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m3number"
                  value={values.m3number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m3number === "" ? null : errors.m3number && touched.m3number ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m3number === "" && errors.m3number && touched.m3number ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m3number && touched.m3number ? (
                <p className="text-red-500">{errors.m3number}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Role"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m3role"
                  value={values.m3role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m3role === "" ? null : errors.m3role && touched.m3role ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m3role === "" && errors.m3role && touched.m3role ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m3role && touched.m3role ? (
                <p className="text-red-500">{errors.m3role}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m3college"
                  value={values.m3college}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m3college === "" ? null : errors.m3college && touched.m3college ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m3college === "" && errors.m3college && touched.m3college ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m3college && touched.m3college ? (
                <p className="text-red-500">{errors.m3college}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College Roll No"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m3rollno"
                  value={values.m3rollno}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m3rollno === "" ? null : errors.m3rollno && touched.m3rollno ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m3rollno === "" && errors.m3rollno && touched.m3rollno ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m3rollno && touched.m3rollno ? (
                <p className="text-red-500">{errors.m3rollno}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Semester"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m3semester"
                  value={values.m3semester}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m3semester === "" ? null : errors.m3semester && touched.m3semester ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m3semester === "" && errors.m3semester && touched.m3semester ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m3semester && touched.m3semester ? (
                <p className="text-red-500">{errors.m3semester}</p>
              ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-6 md:w-2/5 w-full md:px-0 px-4">
              <p className="text-white text-2xl">Team Member 4 ( Optional ) </p>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Name"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m4name"
                  value={values.m4name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m4name === "" ? null : errors.m4name && touched.m4name ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m4name === "" && errors.m4name && touched.m4name ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m4name && touched.m4name ? (
                <p className="text-red-500">{errors.m4name}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="email"
                  placeholder="Member Email"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m4email"
                  value={values.m4email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m4email === "" ? null : errors.m4email && touched.m4email ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m4email === "" && errors.m4email && touched.m4email ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m4email && touched.m4email ? (
                <p className="text-red-500">{errors.m4email}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Member Phone"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m4number"
                  value={values.m4number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m4number === "" ? null : errors.m4number && touched.m4number ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m4number === "" && errors.m4number && touched.m4number ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m4number && touched.m4number ? (
                <p className="text-red-500">{errors.m4number}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Role"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m4role"
                  value={values.m4role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m4role === "" ? null : errors.m4role && touched.m4role ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m4role === "" && errors.m4role && touched.m4role ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m4role && touched.m4role ? (
                <p className="text-red-500">{errors.m4role}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m4college"
                  value={values.m4college}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m4college === "" ? null : errors.m4college && touched.m4college ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m4college === "" && errors.m4college && touched.m4college ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m4college && touched.m4college ? (
                <p className="text-red-500">{errors.m4college}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="College Roll No"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m4rollno"
                  value={values.m4rollno}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m4rollno === "" ? null : errors.m4rollno && touched.m4rollno ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m4rollno === "" && errors.m4rollno && touched.m4rollno ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m4rollno && touched.m4rollno ? (
                <p className="text-red-500">{errors.m4rollno}</p>
              ) : null}
              </div>
              <div className="relative text-start">
                <input
                  type="text"
                  placeholder="Semester"
                  className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                  autoComplete="off"
                  name="m4semester"
                  value={values.m4semester}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {values.m4semester === "" ? null : errors.m4semester && touched.m4semester ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.m4semester === "" && errors.m4semester && touched.m4semester ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.m4semester && touched.m4semester ? (
                <p className="text-red-500">{errors.m4semester}</p>
              ) : null}
              </div>
              <div className="relative mt-10 text-start">
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                autoComplete="off"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="text-red-500">{errors.password}</p>
              ) : null}
              {showPass ? <AiFillEye onClick={handleTogglePasswordVisibility} className="fill-white absolute cursor-pointer right-4 text-xl top-3"/> : <AiFillEyeInvisible onClick={handleTogglePasswordVisibility} className="fill-teal-500 absolute right-4 text-xl top-3 cursor-pointer"/>}
            </div>
            <div className="text-start">
            <div className="flex justify-start items-center">
              <input
                type="checkbox"
                className="border-solid border-2 rounded-3xl border-black"
                name="agreeToTerms"
                checked={values.agreeToTerms}
                onChange={handleChange}
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
            {errors.agreeToTerms && touched.agreeToTerms && (
              <div className="text-red-500">{errors.agreeToTerms}</div>
            )}
            </div>
            </div>
            <div className="flex justify-between md:w-2/5 w-full px-4 md:px-0">
            
            {values.agreeToTerms === false ||
              (errors.agreeToTerms && touched.agreeToTerms) ? (
                <button className="my-10 bg-slate-200/20 text-black font-semibold md:w-1/3 w-[130px] py-2 rounded-full text-1xl hover:bg-teal-500/20 hover:text-slate-100">
              Update Team
            </button>
              ) : (
                <button className="my-10 bg-slate-200 text-black font-semibold md:w-1/3 w-[130px] py-2 rounded-full text-1xl hover:bg-teal-500 hover:text-slate-100">
                  Update Team
                </button>
            )}
            {values.agreeToTerms === false ||
              (errors.agreeToTerms && touched.agreeToTerms) ? (
                <button className="my-10 bg-slate-200/20 text-black font-semibold md:w-1/3 w-[130px] py-2 rounded-full text-1xl hover:bg-teal-500/20 hover:text-slate-100">
              Delete Team
            </button>
              ) : (
                <button onClick={() => {dispatch(deleteTeam(currentTeam._id))}} className="my-10 bg-slate-200 text-black font-semibold md:w-1/3 w-[130px] py-2 rounded-full text-1xl hover:bg-teal-500 hover:text-slate-100">
                  Delete Team
                </button>
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
