import axios from 'axios';
import { toast } from 'react-toastify';

export const registerTeam = (values) => async dispatch => {
    dispatch({type : 'TEAM_REGISTER_REQUEST'})
    try {
        await axios.post('/api/teams/register',values);
        dispatch({type : 'TEAM_REGISTER_SUCCESS'});
        toast.success(<h1>Team Registered Successfully!</h1>, {
            position: toast.POSITION.TOP_RIGHT
          });
    } catch (error) {
        dispatch({type : 'TEAM_REGISTER_FAIL',payload : error})
    }
};

export const loginTeam = (values) => async dispatch => {
    dispatch({type : 'TEAM_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/teams/login',values);
        dispatch({type : 'TEAM_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentTeam', JSON.stringify(response.data));
        toast.success(<h1>Team Login Successfully!</h1>, {
            position: toast.POSITION.TOP_RIGHT
          });
        setTimeout(() => window.location.href = '/', 1000);
    } catch (error) {
        dispatch({type : 'TEAM_LOGIN_FAIL',payload : error});
    }
};

export const logoutTeam = () => dispatch => {
    localStorage.removeItem('currentTeam');
    toast.success(<h1>Team Logout Successfully!</h1>, {
        position: toast.POSITION.TOP_RIGHT
    });
    setTimeout(() => window.location.href = '/login', 1000);
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
        dispatch({type : 'UPDATE_TEAMBYID_SUCCESS',payload : res.data});
        toast.success(<h1>Team Updated Successfully!</h1>, {
            position: toast.POSITION.TOP_RIGHT
          });
        setTimeout(() => window.location.href = '/teamdetails', 1000);
    } catch (err) {
        dispatch({type : 'UPDATE_TEAMBYID_FAIL',payload : err});
    }
};

export const deleteTeam = (teamId) => async (dispatch) => {
  try {
      await axios.post('/api/teams/deleteteam',{teamId});
      localStorage.removeItem('currentTeam');
      toast.success(<h1>Team Deleted Successfully!</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
      setTimeout(() => window.location.href = '/login', 1000);
  } catch (error) {
      toast.error(<h1>Error While Deleting Team</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
  }
};

export const deleteProject = (projectId) => async (dispatch) => {
  try {
      await axios.post('/api/teams/deleteproject',{projectId});
      toast.success(<h1>Project Deleted Successfully!</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
      window.location.href = '/projectdetails';
  } catch (error) {
      toast.error(<h1>Error While Deleting Project</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
  }
};

export const deleteTeamAdmin = (teamId) => async (dispatch) => {
  try {
      await axios.post('/api/teams/deleteteam',{teamId});
      localStorage.removeItem('currentTeam');
      toast.success(<h1>Team Deleted Successfully!</h1>, {
        position: toast.POSITION.TOP_RIGHT
      });
      setTimeout(() => window.location.href = '/', 1000);
  } catch (error) {
      toast.error(<h1>Error While Deleting Team</h1>, {
        position: toast.POSITION.TOP_RIGHT
    });
  }
};

export const submitProject = (team_id,tname,pname,projectabstract,projectyoutube) => async dispatch => {
    dispatch({type : 'TEAM_PROJECT_SUBMIT_REQUEST'})
    try {
        await axios.post('/api/teams/submitprojectlink',{team_id,tname,pname,projectabstract,projectyoutube});
        dispatch({type : 'TEAM_PROJECT_SUBMIT_SUCCESS'});
        toast.success(<h1>Project Abstract & Youtube Link Submitted Successfully!</h1>, {
            position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(() => window.location.href = '/', 1000);
    } catch (error) {
        dispatch({type : 'TEAM_PROJECT_SUBMIT_FAIL',payload : error})
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