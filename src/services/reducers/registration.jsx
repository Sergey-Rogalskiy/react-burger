import {
  GET_FORGOT_PASSWORD_REQUEST,
  GET_FORGOT_PASSWORD_SUCCESS,
  GET_FORGOT_PASSWORD_FAILED,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAILED,
  GET_RESET_PASSWORD_REQUEST,
  GET_RESET_PASSWORD_SUCCESS,
  GET_RESET_PASSWORD_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILED,
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_LOGOUT_FAILED,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
  } from '../actions/registration';

  import { setCookie, deleteCookie } from '../utils';
  
  const initialState = {
    forgotPasswordData: null,
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,

    resetPasswordData: null,
    resetPasswordRequest: false,
    resetPasswordFailed: false,

    registerData: null,
    registerRequest: false,
    registerFailed: false,

    loginData: null,
    loginRequest: false,
    loginFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    tokenRequest: false,
    tokenFailed: false,

    userRequest: false,
    userFailed: false,
    user: null, 

  };
  
  export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_REQUEST: {
        return {
          ...state,
          userRequest: true
        };
      }
      case GET_USER_SUCCESS: {
        return { 
          ...state, 
          userFailed: false, 
          user: action.payload.user, 
          userRequest: false 
        };
      }
      case GET_USER_FAILED: {
        return { 
          ...state, 
          userFailed: action, 
          userRequest: false,
          user: null,
        };
      }
      case PATCH_USER_REQUEST: {
        return {
          ...state,
          userRequest: true
        };
      }
      case PATCH_USER_SUCCESS: {
        return { 
          ...state, 
          userFailed: false, 
          user: action.payload.user, 
          userRequest: false 
        };
      }
      case PATCH_USER_FAILED: {
        return { 
          ...state, 
          userFailed: action, 
          userRequest: false,
          user: null, 
        };
      }
      case GET_REGISTER_REQUEST: {
        return {
          ...state,
          registerRequest: true
        };
      }
      case GET_REGISTER_SUCCESS: {
        localStorage.setItem('refreshToken', action.payload.refreshToken)
        return { 
          ...state, 
          registerFailed: false, 
          user: action.payload.user, 
          registerRequest: false 
        };
      }
      case GET_REGISTER_FAILED: {
        return { 
          ...state, 
          registerFailed: action, 
          registerRequest: false,
          user: null,
        };
      }
      case GET_LOGIN_REQUEST: {
        return {
          ...state,
          loginRequest: true
        };
      }
      case GET_LOGIN_SUCCESS: {
        localStorage.setItem('refreshToken', action.payload.refreshToken)
        return { 
          ...state, 
          loginFailed: false, 
          user: action.payload.user, 
          loginRequest: false 
        };
      }
      case GET_LOGIN_FAILED: {
        return { 
          ...state, 
          loginFailed: action, 
          loginRequest: false , 
          user: null,
        };
      }
      case GET_LOGOUT_REQUEST: {
        return {
          ...state,
          logoutRequest: true
        };
      }
      case GET_LOGOUT_SUCCESS: {
        localStorage.removeItem('refreshToken')
        deleteCookie('accessToken')
        return { 
          ...state, 
          logoutFailed: false, 
          user: null,
          logoutRequest: false 
        };
      }
      case GET_LOGOUT_FAILED: {
        return { 
          ...state, 
          logoutFailed: action, 
          logoutRequest: false , 
        };
      }
      case GET_TOKEN_REQUEST: {
        return {
          ...state,
          tokenRequest: true
        };
      }
      case GET_TOKEN_SUCCESS: {
        return { 
          ...state, 
          tokenFailed: false, 
          tokenRequest: false 
        };
      }
      case GET_TOKEN_FAILED: {
        return { 
          ...state, 
          tokenFailed: action, 
          tokenRequest: false , 
        };
      }
      case GET_FORGOT_PASSWORD_REQUEST: {
        return {
          ...state,
          forgotPasswordRequest: true
        };
      }
      case GET_FORGOT_PASSWORD_SUCCESS: {
        return { 
          ...state, 
          forgotPasswordFailed: false, 
          forgotPasswordData: action.payload, 
          forgotPasswordRequest: false 
        };
      }
      case GET_FORGOT_PASSWORD_FAILED: {
        return { 
          ...state, 
          forgotPasswordFailed: true, 
          forgotPasswordRequest: false 
        };
      }
      case GET_RESET_PASSWORD_REQUEST: {
        return {
          ...state,
          resetPasswordRequest: true
        };
      }
      case GET_RESET_PASSWORD_SUCCESS: {
        localStorage.removeItem('isForgotEmail')
        return { 
          ...state, 
          resetPasswordFailed: false, 
          resetPasswordData: action.payload, 
          resetPasswordRequest: false 
        };
      }
      case GET_RESET_PASSWORD_FAILED: {
        return { 
          ...state, 
          resetPasswordFailed: true, 
          resetPasswordRequest: false 
        };
      }
      default: {
        return state;
      }
    }
  };
  
  // let data_buns = action.payload.filter(obj1 => obj1.type === "bun");
  // const buns = data_buns[Math.floor(Math.random() * 2)]
  // let totalPrice = buns.price * 2;
  // items.map(item => (totalPrice += item.price));
  