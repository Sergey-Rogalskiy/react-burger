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
  } from '../actions/registration';
  
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

    user: {name: 'Mario', password: 'venice', email: 'ilovepeach@redflag.dendi' },
  };
  
  export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
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
          forgotPasswordData: action, 
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
        return { 
          ...state, 
          resetPasswordFailed: false, 
          resetPasswordData: action, 
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
      case GET_REGISTER_REQUEST: {
        return {
          ...state,
          resetPasswordRequest: true
        };
      }
      case GET_REGISTER_SUCCESS: {
        return { 
          ...state, 
          resetPasswordFailed: false, 
          resetPasswordData: action, 
          resetPasswordRequest: false 
        };
      }
      case GET_REGISTER_FAILED: {
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
  