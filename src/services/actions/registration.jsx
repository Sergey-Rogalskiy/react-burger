import { 
    getRegisterService, 
    getForgotPasswordService,
    getResetPasswordService,
    getLoginService,
    getLogoutService
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
  export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
  export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
  export const GET_LOGIN_FAILED = 'GET_LOGIN_FAILED';
  export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';
  export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';
  export const GET_LOGOUT_FAILED = 'GET_LOGOUT_FAILED';

  
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
          payload: res
        });
      } else {
        dispatch({
          type: GET_REGISTER_FAILED,
          payload: res
        });
      }
    })
    .catch(err => {
        dispatch({
          type: GET_REGISTER_FAILED,
          payload: err
        });
    })
  };
}

export function getLogin(data) {
  return function(dispatch) {
    dispatch({
      type: GET_LOGIN_REQUEST
    });
    getLoginService(data)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_LOGIN_SUCCESS,
          payload: res
        });
      } else {
        dispatch({
          type: GET_LOGIN_FAILED,
          payload: res
        });
      }
    })
    .catch(err => {
        dispatch({
          type: GET_LOGIN_FAILED,
          payload: err
        });
    })
  };
}

export function getLogout(token) {
  return function(dispatch) {
    dispatch({
      type: GET_LOGOUT_REQUEST
    });
    getLogoutService(token)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_LOGOUT_SUCCESS,
          payload: res
        });
      } else {
        dispatch({
          type: GET_LOGOUT_FAILED,
          payload: res
        });
      }
    })
    .catch(err => {
        dispatch({
          type: GET_LOGOUT_FAILED,
          payload: err
        });
    })
  };
}
  

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