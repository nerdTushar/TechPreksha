import axios from 'axios';
import swal from 'sweetalert';

export const registerTeam = (values) => async dispatch => {
    dispatch({type : 'TEAM_REGISTER_REQUEST'})
    try {
        await axios.post('/api/teams/register',values);
        alert(`${values.tname} Registered Successfully`);
        swal(`${values.tname} Registered Successfully!`,"success");
        dispatch({type : 'TEAM_REGISTER_SUCCESS'});
        setTimeout(() => window.location.href = '/login', 2000);
    } catch (error) {
        dispatch({type : 'TEAM_REGISTER_FAIL',payload : error})
    }
};

export const loginTeam = (values) => async dispatch => {
    dispatch({type : 'TEAM_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/teams/login',values);
        alert(`${response.data.tname} Login Successfully`);
        swal(`${response.data.tname} Login Successfully!`,"success")
        dispatch({type : 'TEAM_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentTeam', JSON.stringify(response.data));
        setTimeout(() => window.location.href = '/', 2000);
        
    } catch (error) {
        dispatch({type : 'TEAM_LOGIN_FAIL',payload : error});
    }
};

export const logoutTeam = () => dispatch => {
    localStorage.removeItem('currentTeam');
    window.location.href = '/login';
};

export const getTeamById = (teamId) => async (dispatch) => {
    dispatch({type : 'GET_TEAMBYID_REQUEST'});
    try {
        const res = await axios.post('/api/teams/getteambyid',{teamId});
        dispatch({type : 'GET_TEAMBYID_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_TEAMBYID_FAIL',payload : err});
    }
};

export const getProjectById = (team_id) => async (dispatch) => {
    dispatch({type : 'GET_PROJECTBYID_REQUEST'});
    try {
        const res = await axios.post('/api/teams/getprojectbyid',{team_id});
        dispatch({type : 'GET_PROJECTBYID_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_PROJECTBYID_FAIL',payload : err});
    }
};

export const updateTeam = (updatedTeam,_id) => async (dispatch) => {
    dispatch({type : 'UPDATE_TEAMBYID_REQUEST'});
    try {
        const res = await axios.post('/api/teams/updateteam',{updatedTeam,_id});
        alert(`Team Updated Successfully`);
        swal(`Team Updated Successfully!`,"success");
        dispatch({type : 'UPDATE_TEAMBYID_SUCCESS',payload : res.data});
        setTimeout(() => window.location.href = '/teamdetails', 2000);
    } catch (err) {
        dispatch({type : 'UPDATE_TEAMBYID_FAIL',payload : err});
    }
};

export const deleteTeam = (teamId) => async (dispatch) => {
  try {
      await axios.post('/api/teams/deleteteam',{teamId});
      alert(`Team Deleted Successfully`);
      swal("Team Deleted Successfully!","success");
      localStorage.removeItem('currentTeam');
      window.location.href = '/login';
  } catch (error) {
      swal("Error While Deleting Team");
  }
};

export const deleteProject = (projectId) => async (dispatch) => {
  try {
      await axios.post('/api/teams/deleteproject',{projectId});
      alert(`Project Deleted Successfully`);
      swal("Project Deleted Successfully!","success");
      window.location.href = '/projectdetails';
  } catch (error) {
      swal("Error While Deleting Project");
  }
};

export const deleteTeamAdmin = (teamId) => async (dispatch) => {
  try {
      await axios.post('/api/teams/deleteteam',{teamId});
      alert(`Team Deleted Successfully`);
      swal("Team Deleted Successfully!","success");
      localStorage.removeItem('currentTeam');
      window.location.href = '/';
  } catch (error) {
      swal("Error While Deleting Team");
  }
};

export const submitProject = (team_id,tname,pname,projectabstract,projectyoutube) => async dispatch => {
    dispatch({type : 'TEAM_PROJECT_YOUTUBE_SUBMIT_REQUEST'})
    try {
        await axios.post('/api/teams/submitprojectyoutubelink',{team_id,tname,pname,projectabstract,projectyoutube});
        alert(`${tname} Project Abstract & Youtube Link Submitted Successfully`);
        swal(`${tname} Project Abstract & Youtube Link Submitted Successfully!`,"success");
        dispatch({type : 'TEAM_PROJECT_YOUTUBE_SUBMIT_SUCCESS'});
        setTimeout(() => window.location.href = '/', 2000);
    } catch (error) {
        dispatch({type : 'TEAM_PROJECT_YOUTUBE_SUBMIT_FAIL',payload : error})
    }
};

export const getAllTeams = () => async (dispatch) => {
    dispatch({type : 'GET_TEAMS_REQUEST'});
    try {
        const res = await axios.get('/api/teams/getallteams');
        dispatch({type : 'GET_TEAMS_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_TEAMS_FAIL',payload : err});
    }
};

export const getAllProjects = () => async (dispatch) => {
    dispatch({type : 'GET_PROJECTS_REQUEST'});
    try {
        const res = await axios.get('/api/teams/getallprojects');
        dispatch({type : 'GET_PROJECTS_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_PROJECTS_FAIL',payload : err});
    }
};