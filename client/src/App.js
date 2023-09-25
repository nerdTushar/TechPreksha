import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Herosection from "./components/Herosection";
import Aboutevent from "./components/Aboutevent";
import Contact from "./components/Contact";
import Venue from "./components/Venue";
import Prize from './components/Prize';
import Form from './components/Form';
import Login from "./components/Login";
import Schedule from "./components/Schedule";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import CoreTeam from "./components/CoreTeam";
import AdminLogin from "./components/AdminLogin";
import { useSelector } from "react-redux";
import TeamDetails from "./components/TeamDetails";
import ProjectSubmit from "./components/ProjectSubmit";
import TermsPolicy from "./components/TermsPolicy";
import UserHeroSection from "./components/UserHeroSection";
import AdminPortal from "./components/AdminPortal";
import ProjectDetails from "./components/ProjectDetails";
import FAQ from "./components/FAQ";
import GetTeamInfo from './components/GetTeamInfo';
import Sponsors from "./components/Sponsors";
import TechStacks from './components/TechStacks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

	const teamState = useSelector((state) => state.loginTeamReducer);
	const { currentTeam } = teamState;

	const adminState = useSelector((state) => state.loginAdminReducer);
	const { currentAdmin } = adminState;

  return(
	<>
	<Router>
        <Routes>
		    {currentTeam ? (<>
				<Route exact path="/" element={<UserHeroSection/>} />
                <Route exact path="/teamdetails" element={<TeamDetails/>}/>
                <Route exact path="/projectsubmit" element={<ProjectSubmit/>}/>
			</>) : (currentAdmin ? (<>
				<Route exact path="/" element={<AdminPortal/>} />
				<Route exact path="/projectdetails" element={<ProjectDetails/>} />
				<Route exact path="/getteaminfo/:teamId" element={<GetTeamInfo/>}/>
			</>) : (
				<>
				<Route exact path="/" element={<Herosection/>} />
                <Route exact path="/form" element={<Form/>} />
			    <Route exact path="/login" element={<Login/>} />
			    <Route exact path="/adminlogin" element={<AdminLogin/>}/>
			</>
			))}
			<Route exact path="/prizes" element={<Prize/>} />
			<Route exact path="/faq" element={<FAQ/>} />
			<Route exact path="/venue" element={<Venue/>} />
			<Route exact path="/aboutevent" element={<Aboutevent/>} />
			<Route exact path="/termspolicy" element={<TermsPolicy/>}/>
			<Route exact path="/schedule" element={<Schedule/>}/>
			<Route exact path="/day1" element={<Day1/>}/>
			<Route exact path="/day2" element={<Day2/>}/>
			<Route exact path="/day3" element={<Day3/>}/>
			<Route exact path="/organizers" element={<CoreTeam/>}/>
			<Route exact path="/contacts" element={<Contact/>}/>
			<Route exact path="/sponsors" element={<Sponsors/>}/>
			<Route exact path="/techstacks" element={<TechStacks/>}/>
		</Routes>
	</Router>
	<ToastContainer />
	</>
  ) 
};

export default App;
