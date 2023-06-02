import axios from 'axios';
import swal from 'sweetalert';

export const loginAdmin = (values) => async dispatch => {
    dispatch({type : 'ADMIN_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/admin/login',values);
        alert(`${response.data.adminname} Login Successfully`);
        swal(`${response.data.adminname} Login Successfully!`,"success")
        dispatch({type : 'ADMIN_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentAdmin', JSON.stringify(response.data));
        setTimeout(() => window.location.href = '/', 2000);
    } catch (error) {
        dispatch({type : 'ADMIN_LOGIN_FAIL',payload : error});
    }
};

export const logoutAdmin = () => dispatch => {
    localStorage.removeItem('currentAdmin');
    window.location.href = 'adminlogin';
};