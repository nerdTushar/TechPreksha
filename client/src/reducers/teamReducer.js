export const registerTeamReducer = (state={},action) => {
    switch(action.type){
        case 'TEAM_REGISTER_REQUEST' :
            return{
                loading : true
            }
        case 'TEAM_REGISTER_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'TEAM_REGISTER_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const submitProjectReducer = (state={},action) => {
    switch(action.type){
        case 'TEAM_PROJECT_SUBMIT_REQUEST' :
            return{
                loading : true
            }
        case 'TEAM_PROJECT_SUBMIT_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'TEAM_PROJECT_SUBMIT_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const loginTeamReducer = (state={},action) => {
    switch(action.type){
        case 'TEAM_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'TEAM_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentTeam : action.payload
            }
        case 'TEAM_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const getTeamByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'GET_TEAMBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_TEAMBYID_SUCCESS' :
          return {
              team : action.payload,
              loading : false
          }
      case 'GET_TEAMBYID_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const getProjectByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'GET_PROJECTBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_PROJECTBYID_SUCCESS' :
          return {
              project : action.payload,
              loading : false
          }
      case 'GET_PROJECTBYID_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const updateTeamByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'UPDATE_TEAMBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'UPDATE_TEAMBYID_SUCCESS' :
          return {
              updatesuccess : true,
              updateloading : false
          }
      case 'UPDATE_TEAMBYID_FAIL' :
          return {
              updateerror : action.payload,
              updateloading : false
          }
      default : return state
    }
};

export const getAllTeamsReducer = (state = {teams : []}, action) => {
    switch(action.type){
      case 'GET_TEAMS_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_TEAMS_SUCCESS' :
          return {
              teams : action.payload,
              loading : false
          }
      case 'GET_TEAMS_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const getAllProjectsReducer = (state = {projects : []}, action) => {
    switch(action.type){
      case 'GET_PROJECTS_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_PROJECTS_SUCCESS' :
          return {
              projects : action.payload,
              loading : false
          }
      case 'GET_PROJECTS_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};