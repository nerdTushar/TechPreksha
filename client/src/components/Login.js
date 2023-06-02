import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiFillEye, AiFillEyeInvisible, AiFillExclamationCircle, AiFillCheckCircle } from "react-icons/ai";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useDispatch, useSelector } from "react-redux";
import { loginTeam } from "../actions/teamAction";
import Loader from "../components/Loader";
import Error from "../components/Error";

const initialValues = {
  tname: "",
  password: "",
  agreeToTerms: false,
};

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.loginTeamReducer);
  const { error, loading } = loginState;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        dispatch(loginTeam(values));
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
        <div className="flex flex-col gap-6 md:w-2/5 w-full px-4 md:px-0">
        <p className="text-white text-center text-4xl md:text-6xl">
          {" "}
          LOG IN
        </p>
          <span className="flex flex-col gap-6">
            {" "}
            <span className="text-2xl">Team Name </span>{" "}
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
          </span>
          <span className="flex flex-col gap-6">
            {" "}
            <span className="text-2xl">Password </span>{" "}
            <div className="relative text-start">
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
          <div className="flex justify-center mt-4">
            {values.agreeToTerms === false ||
              (errors.agreeToTerms && touched.agreeToTerms) ? (
                <button className=" bg-slate-200/20 text-black font-semibold w-[120px] rounded-full  h-[45px] text-1xl hover:bg-teal-500/20 hover:text-slate-100 md:mx-1 mx-2 ">
                Login
              </button>
              ) : (
                <button className=" bg-slate-200 text-black font-semibold w-[120px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-slate-100 md:mx-1 mx-2 ">
                Login
              </button>
            )}
          </div>
        </div>
        <span className="text-white text-left mt-10 md:w-2/5 w-full px-4 md:px-0">
            Team Not Registered ? &nbsp;
            <NavLink
              to="/form"
              className="text-teal-500 hover:text-white font-black"
            >
              Register!
            </NavLink>
          </span>
        <span className="text-white text-left mt-6 md:w-2/5 w-full px-4 md:px-0">
            Is Admin ? &nbsp;
            <NavLink
              to="/adminlogin"
              className="text-teal-500 hover:text-white font-black"
            >
              Admin Log in!
            </NavLink>
          </span>
        </div>
        </form>
      </div>
    </>
  );
};

export default Login;
