import { 
    getRegisterService, 
    getForgotPasswordService,
    getResetPasswordService,
    getLoginService,
    getLogoutService,
    getTokenService,
    getUserService,
    patchUserService
  } from '../real-service';
  import { getCookie, setCookie, deleteCookie} from '../utils';

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
  export const GET_TOKEN_REQUEST = 'GET_TOKEN_REQUEST';
  export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
  export const GET_TOKEN_FAILED = 'GET_TOKEN_FAILED';
  export const GET_USER_REQUEST = 'GET_USER_REQUEST';
  export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
  export const GET_USER_FAILED = 'GET_USER_FAILED';
  export const PATCH_USER_REQUEST = 'PATCH_USER_REQUEST';
  export const PATCH_USER_SUCCESS = 'PATCH_USER_SUCCESS';
  export const PATCH_USER_FAILED = 'PATCH_USER_FAILED';

  
export function getRegister(data) {
  return function(dispatch) {
    dispatch({
      type: GET_REGISTER_REQUEST
    });
    getRegisterService(data)
    .then(res => {
      if (res && res.success) {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1])
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
        setCookie('accessToken', res.accessToken.split('Bearer ')[1])
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
        deleteCookie('accessToken')
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

export function getToken(token) {
  return function(dispatch) {
    dispatch({
      type: GET_TOKEN_REQUEST
    });
    getTokenService(token)
    .then(res => {
      if (res && res.success) {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1])
        dispatch({
          type: GET_TOKEN_SUCCESS,
          payload: res
        });
      } else {
        dispatch({
          type: GET_TOKEN_FAILED,
          payload: res
        });
      }
    })
    .catch(err => {
        dispatch({
          type: GET_TOKEN_FAILED,
          payload: err
        });
    })
  };
}

export function getUser(token) {
  return function(dispatch) {
    dispatch({
      type: GET_USER_REQUEST
    });
    getUserService(token)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: res
        });
      } else {
        dispatch({
          type: GET_USER_FAILED,
          payload: res
        });
      }
    })
    .catch(err => {
        dispatch({
          type: GET_USER_FAILED,
          payload: err
        });
    })
  };
}

export function patchUser(data) {
  const token = getCookie('accessToken')
  return function(dispatch) {
    dispatch({
      type: PATCH_USER_REQUEST
    });
    patchUserService(token, data)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: PATCH_USER_SUCCESS,
          payload: res
        });
        alert('User information was updated successfully')
      } else {
        dispatch({
          type: PATCH_USER_FAILED,
          payload: res
        });
      }
    })
    .catch(err => {
        dispatch({
          type: PATCH_USER_FAILED,
          payload: err
        });
    })
  };
}
 

export function getForgotPassword(data) {
  const token = 'lala'
  localStorage.setItem('isForgotEmail', true)
    return function(dispatch) {
      dispatch({
        type: GET_FORGOT_PASSWORD_REQUEST
      });
      getForgotPasswordService(token, data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_FORGOT_PASSWORD_SUCCESS,
            payload: res
          });
        } else {
          dispatch({
            type: GET_FORGOT_PASSWORD_FAILED,
            payload: res
          });
        }
      })
      .catch(err => {
          dispatch({
            type: GET_FORGOT_PASSWORD_FAILED,
            payload: err
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
            payload: res
          });
        } else {
          dispatch({
            type: GET_RESET_PASSWORD_FAILED,
            payload: res
          });
        }
      })
      .catch(err => {
          dispatch({
            type: GET_RESET_PASSWORD_FAILED,
            payload: err
          });
      })
    };
  }