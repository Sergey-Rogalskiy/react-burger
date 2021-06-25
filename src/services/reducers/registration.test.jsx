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

  it("should set userRequest (PATCH_USER_REQUEST)", () => {
    expect(
      registrationReducer(initialState, {
        type: PATCH_USER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        userRequest: true
      })
    );
  });

  it("should set user data (PATCH_USER_SUCCESS)", () => {
    expect(
      registrationReducer(initialState, {
        type: PATCH_USER_SUCCESS,
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

  it("should set userFailed (PATCH_USER_FAILED)", () => {
    expect(
      registrationReducer(initialState, {
        type: PATCH_USER_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        userFailed: {type: "PATCH_USER_FAILED"}, 
        userRequest: false,
        user: null,
      })
    );
  });

  it("should set registerRequest (GET_REGISTER_REQUEST)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_REGISTER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        registerRequest: true
      })
    );
  });

  it("should set user data (GET_REGISTER_SUCCESS)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_REGISTER_SUCCESS,
        payload: {
          user: {name: 'name', email: 'email'},
        }
      })
    ).toEqual(
      expect.objectContaining({
        user: {name: 'name', email: 'email'}, 
        registerFailed: false, 
        registerRequest: false 
      })
    );
  });

  it("should set userFailed (GET_REGISTER_FAILED)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_REGISTER_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        registerFailed: {type: "GET_REGISTER_FAILED"}, 
        registerRequest: false,
        user: null,
      })
    );
  });

  it("should set loginRequest (GET_LOGIN_REQUEST)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_LOGIN_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        loginRequest: true
      })
    );
  });

  it("should set user data (GET_LOGIN_SUCCESS)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_LOGIN_SUCCESS,
        payload: {
          user: {name: 'name', email: 'email'},
        }
      })
    ).toEqual(
      expect.objectContaining({
        user: {name: 'name', email: 'email'}, 
        loginFailed: false, 
        loginRequest: false 
      })
    );
  });

  it("should set loginFailed (GET_LOGIN_FAILED)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_LOGIN_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        loginFailed: {type: "GET_LOGIN_FAILED"}, 
        loginRequest: false , 
        user: null,
      })
    );
  });

  it("should set logoutRequest (GET_LOGOUT_REQUEST)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_LOGOUT_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        logoutRequest: true
      })
    );
  });

  it("should set user data to null (GET_LOGOUT_SUCCESS)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_LOGOUT_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        logoutFailed: false, 
        user: null,
        logoutRequest: false 
      })
    );
  });

  it("should set loginFailed (GET_LOGOUT_FAILED)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_LOGOUT_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        logoutFailed: {type: GET_LOGOUT_FAILED}, 
        logoutRequest: false , 
      })
    );
  });

  it("should set loginRequest (GET_TOKEN_REQUEST)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_TOKEN_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        tokenRequest: true
      })
    );
  });

  it("should set user data (GET_TOKEN_SUCCESS)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_TOKEN_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        tokenFailed: false, 
        tokenRequest: false 
      })
    );
  });

  it("should set tokenFailed (GET_TOKEN_FAILED)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_TOKEN_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        tokenFailed: {type: "GET_TOKEN_FAILED"}, 
        tokenRequest: false , 
      })
    );
  });

  it("should set loginRequest (GET_FORGOT_PASSWORD_REQUEST)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_FORGOT_PASSWORD_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        forgotPasswordRequest: true
      })
    );
  });

  it("should set user data (GET_FORGOT_PASSWORD_SUCCESS)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_FORGOT_PASSWORD_SUCCESS,
        payload: 'lalaALALALlala'
      })
    ).toEqual(
      expect.objectContaining({
        forgotPasswordFailed: false, 
        forgotPasswordData: 'lalaALALALlala', 
        forgotPasswordRequest: false
      })
    );
  });

  it("should set loginFailed (GET_FORGOT_PASSWORD_FAILED)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_FORGOT_PASSWORD_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        forgotPasswordFailed: true, 
        forgotPasswordRequest: false 
      })
    );
  });

  it("should set resetPasswordRequest (GET_RESET_PASSWORD_REQUEST)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_RESET_PASSWORD_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        resetPasswordRequest: true
      })
    );
  });

  it("should set resetPasswordData (GET_RESET_PASSWORD_SUCCESS)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_RESET_PASSWORD_SUCCESS,
        payload: 'lalaALALALlala'
      })
    ).toEqual(
      expect.objectContaining({
        resetPasswordFailed: false, 
        resetPasswordData: 'lalaALALALlala', 
        resetPasswordRequest: false 
      })
    );
  });

  it("should set resetPasswordFailed (GET_RESET_PASSWORD_FAILED)", () => {
    expect(
      registrationReducer(initialState, {
        type: GET_RESET_PASSWORD_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        resetPasswordFailed: true, 
        resetPasswordRequest: false 
      })
    );
  });

})
