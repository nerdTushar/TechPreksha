import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {registerTeamReducer,getProjectByIdReducer, getAllProjectsReducer, getAllTeamsReducer, loginTeamReducer, getTeamByIdReducer, updateTeamByIdReducer, submitProjectReducer} from './reducers/teamReducer';
import {loginAdminReducer} from './reducers/adminReducer';


const currentTeam = localStorage.getItem('currentTeam') ? JSON.parse(localStorage.getItem('currentTeam')) : null
const currentAdmin = localStorage.getItem('currentAdmin') ? JSON.parse(localStorage.getItem('currentAdmin')) : null

const rootReducer = combineReducers({
    registerTeamReducer,
    loginTeamReducer,
    loginAdminReducer,
    getTeamByIdReducer,
    getProjectByIdReducer,
    updateTeamByIdReducer,
    submitProjectReducer,
    getAllTeamsReducer,
    getAllProjectsReducer,
});

const initialState = {
    loginTeamReducer : {
        currentTeam : currentTeam
    },
    loginAdminReducer : {
        currentAdmin : currentAdmin
    },
};
const middleware = [thunk];

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;