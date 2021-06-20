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
  import { registrationReducer } from './registration';

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

    accessToken: null, 
    refreshToken: null, 
  };
  
  
describe("registrationReducer", () => {
  it("should return the initial state", () => {
    expect(registrationReducer(undefined, {})).toEqual(
      initialState
    );
  })

  it("should set userRequest (GET_USER_REQUEST)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_USER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        userRequest: true
      })
    );
  });

  it("should set user data (GET_USER_SUCCESS)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_USER_SUCCESS,
        payload: {user: {name: 'name', email: 'email'}}
      })
    ).toEqual(
      expect.objectContaining({
        userFailed: false, 
        user: {name: 'name', email: 'email'}, 
        userRequest: false 
      })
    );
  });

  it("should set userFailed (GET_USER_FAILED)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_USER_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        userFailed: {type: "GET_USER_FAILED"}, 
        userRequest: false,
        user: null,
      })
    );
  });

})

