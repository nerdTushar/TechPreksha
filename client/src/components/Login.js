import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { loginTeam } from "../actions/teamAction";
import Loader from "../components/Loader";
import { toast } from 'react-toastify';

const Login = () => {
  const [tname,setTname] = useState("");
  const [password,setPassword] = useState("");
  const [agreeToTerms,setAgreeToTerms] = useState(false);

  const [showPass, setShowPass] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.loginTeamReducer);
  const { error, loading } = loginState;

  const loginTeamHandler = async(e) => {
    e.preventDefault();
    window.scrollTo({top:0,behavior:"smooth"});
    if(tname === "" || password === ""){
      toast.error("Empty input details.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }else if(!/^[A-Za-z0-9 _]{5,20}$/.test(tname)){
      // team name
      toast.error(<h1>Enter valid team name <br /> i.e. "My Team" short & sweet</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
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
    }else{
      const loginTeamData = {tname, password};
      dispatch(loginTeam(loginTeamData));
      setTname("");
      setPassword("");
      setAgreeToTerms(false);
    }
  }

  return (
    <>
      {loading && <Loader />}
      {error && toast.error("Something Went Wrong", {
          position: toast.POSITION.TOP_RIGHT
        })}
      <div className="bg-login (2) md:gap-0 h-screen md:h-screen">
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
        <form>
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
                value={tname}
                onChange={e => setTname(e.target.value)}
              />
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
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {showPass ? <AiFillEye onClick={handleTogglePasswordVisibility} className="fill-white absolute cursor-pointer right-4 text-xl top-3"/> : <AiFillEyeInvisible onClick={handleTogglePasswordVisibility} className="fill-teal-500 absolute right-4 text-xl top-3 cursor-pointer"/>}
            </div>
          </span>
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
          <div className="flex justify-center mt-4">
            {agreeToTerms === false ? (
                <h1 className="bg-slate-200/20 flex justify-center items-center cursor-pointer text-black font-semibold w-[120px] rounded-full  h-[45px] text-1xl hover:bg-teal-500/20 hover:text-slate-100 md:mx-1 mx-2 ">
                <span>Login</span>
              </h1>
              ) : (
                <button onClick={loginTeamHandler} className=" bg-slate-200 text-black font-semibold w-[120px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-slate-100 md:mx-1 mx-2 ">
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
