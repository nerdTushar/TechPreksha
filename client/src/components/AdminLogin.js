import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiFillEye, AiFillEyeInvisible, AiFillExclamationCircle, AiFillCheckCircle } from "react-icons/ai";
import { useFormik } from "formik";
import { adminloginSchema } from "../schemas";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../actions/adminAction";
import Loader from "../components/Loader";
import Error from "../components/Error";

const initialValues = {
  adminname: "",
  admincode: "",
  password: "",
  agreeToTerms: false,
};

const AdminLogin = () => {
  const [showPass, setShowPass] = useState(false);
  const [showAdminCode, setShowAdminCode] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const handleToggleAdminCodeVisibility = () => {
    setShowAdminCode(!showAdminCode);
  };

  const dispatch = useDispatch();

  const adminloginState = useSelector((state) => state.loginAdminReducer);
  const { error, loading } = adminloginState;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: adminloginSchema,
      onSubmit: (values, action) => {
        dispatch(loginAdmin(values));
        action.resetForm();
      },
    });

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something Went Wrong" />}
      <div className="bg-login (2) md:gap-0 h-screen md:h-screen">
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-end md:mt-4 md:mr-20">
        <div className="flex flex-col gap-4 md:w-2/5 w-full px-4 md:px-0">
        <p className="text-white text-center text-4xl md:text-6xl">
          {" "}
          Admin LOG IN
        </p>
          <span className="flex flex-col md:mt-2 gap-2">
            {" "}
            <span className="text-2xl">Admin Name </span>{" "}
            <div className="relative text-start">
              <input
                type="text"
                placeholder="Admin Name"
                className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                autoComplete="off"
                name="adminname"
                value={values.adminname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.adminname === "" ? null : errors.adminname && touched.adminname ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.adminname === "" && errors.adminname && touched.adminname ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.adminname && touched.adminname ? (
                <p className="text-red-500">{errors.adminname}</p>
              ) : null}
            </div>
          </span>
          <span className="flex flex-col gap-2">
            {" "}
            <span className="text-2xl">Admin Secret Code </span>{" "}
            <div className="relative text-start">
              <input
                type={showAdminCode ? 'text' : 'password'}
                placeholder="Admin Secret Code"
                className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
                autoComplete="off"
                name="admincode"
                value={values.admincode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.admincode && touched.admincode ? (
                <p className="text-red-500">{errors.admincode}</p>
              ) : null}
              {showAdminCode ? <AiFillEye onClick={handleToggleAdminCodeVisibility} className="fill-white absolute cursor-pointer right-4 text-xl top-3"/> : <AiFillEyeInvisible onClick={handleToggleAdminCodeVisibility} className="fill-teal-500 absolute right-4 text-xl top-3 cursor-pointer"/>}
            </div>
          </span>
          <span className="flex flex-col gap-2">
            {" "}
            <span className="text-2xl">Admin Password </span>{" "}
            <div className="relative text-start">
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Admin Password"
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
          </span>
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
          <div className="flex justify-center md:mt-4 mt-2">
            {values.agreeToTerms === false ||
              (errors.agreeToTerms && touched.agreeToTerms) ? (
                <button className=" bg-slate-200/20 text-black font-semibold w-[150px] rounded-full  h-[45px] text-1xl hover:bg-teal-500/20 hover:text-slate-100 md:mx-1 mx-2 ">
                Login Admin
              </button>
              ) : (
                <button className=" bg-slate-200 text-black font-semibold w-[150px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-slate-100 md:mx-1 mx-2 ">
                Login Admin
              </button>
            )}
          </div>
        </div>
        <span className="text-white text-left mt-4 md:w-2/5 w-full px-4 md:px-0">
            Not Admin ? &nbsp;
            <NavLink
              to="/login"
              className="text-teal-500 hover:text-white font-black"
            >
              Login Team!
            </NavLink>
          </span>
        </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
