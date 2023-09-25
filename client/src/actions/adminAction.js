import axios from 'axios';
import { toast } from 'react-toastify';

export const loginAdmin = (values) => async dispatch => {
    dispatch({type : 'ADMIN_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/admin/login',values);
        dispatch({type : 'ADMIN_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentAdmin', JSON.stringify(response.data));
        toast.success(<h1>Admin Login Successfully!</h1>, {
            position: toast.POSITION.TOP_RIGHT
          });
        setTimeout(() => window.location.href = '/', 1000);
    } catch (error) {
        dispatch({type : 'ADMIN_LOGIN_FAIL',payload : error});
    }
};

export const logoutAdmin = () => dispatch => {
    localStorage.removeItem('currentAdmin');
    toast.success(<h1>Admin Logout Successfully!</h1>, {
        position: toast.POSITION.TOP_RIGHT
    });
    setTimeout(() => window.location.href = '/adminlogin', 1000);
};