import { 
    getRegisterService, 
    getForgotPasswordService,
    getResetPasswordService
  } from '../real-service';
    

  export const GET_FORGOT_PASSWORD_REQUEST = 'GET_FORGOT_PASSWORD_REQUEST';
  export const GET_FORGOT_PASSWORD_SUCCESS = 'GET_FORGOT_PASSWORD_SUCCESS';
  export const GET_FORGOT_PASSWORD_FAILED = 'GET_FORGOT_PASSWORD_FAILED';
  export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';
  export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
  export const GET_REGISTER_FAILED = 'GET_REGISTER_FAILED';
  export const GET_RESET_PASSWORD_REQUEST = 'GET_RESET_PASSWORD_REQUEST';
  export const GET_RESET_PASSWORD_SUCCESS = 'GET_RESET_PASSWORD_SUCCESS';
  export const GET_RESET_PASSWORD_FAILED = 'GET_RESET_PASSWORD_FAILED';


export function getForgotPassword(data) {
  const token = 'lala'
    return function(dispatch) {
      dispatch({
        type: GET_FORGOT_PASSWORD_REQUEST
      });
      getForgotPasswordService(token, data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_FORGOT_PASSWORD_SUCCESS,
            response: res
          });
        } else {
          dispatch({
            type: GET_FORGOT_PASSWORD_FAILED
          });
        }
      })
      .catch(err => {
          dispatch({
            type: GET_FORGOT_PASSWORD_FAILED
          });
      })
    };
  }
  
export function getRegister(data) {

    return function(dispatch) {
      dispatch({
        type: GET_REGISTER_REQUEST
      });
      getRegisterService(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_REGISTER_SUCCESS,
            response: res
          });
        } else {
          dispatch({
            type: GET_REGISTER_FAILED
          });
        }
      })
      .catch(err => {
          dispatch({
            type: GET_REGISTER_FAILED
          });
      })
    };
  }
  
export function getResetPassword(data) {

    return function(dispatch) {
      dispatch({
        type: GET_RESET_PASSWORD_REQUEST
      });
      getResetPasswordService(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_RESET_PASSWORD_SUCCESS,
            response: res
          });
        } else {
          dispatch({
            type: GET_RESET_PASSWORD_FAILED
          });
        }
      })
      .catch(err => {
          dispatch({
            type: GET_RESET_PASSWORD_FAILED
          });
      })
    };
  }

  