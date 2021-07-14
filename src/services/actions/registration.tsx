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
  import { AppThunk, AppDispatch } from '../../types';

  export const GET_FORGOT_PASSWORD_REQUEST:'GET_FORGOT_PASSWORD_REQUEST' = 'GET_FORGOT_PASSWORD_REQUEST';
  export const GET_FORGOT_PASSWORD_SUCCESS:'GET_FORGOT_PASSWORD_SUCCESS' = 'GET_FORGOT_PASSWORD_SUCCESS';
  export const GET_FORGOT_PASSWORD_FAILED:'GET_FORGOT_PASSWORD_FAILED' = 'GET_FORGOT_PASSWORD_FAILED';
  export const GET_REGISTER_REQUEST:'GET_REGISTER_REQUEST' = 'GET_REGISTER_REQUEST';
  export const GET_REGISTER_SUCCESS:'GET_REGISTER_SUCCESS' = 'GET_REGISTER_SUCCESS';
  export const GET_REGISTER_FAILED:'GET_REGISTER_FAILED' = 'GET_REGISTER_FAILED';
  export const GET_RESET_PASSWORD_REQUEST:'GET_RESET_PASSWORD_REQUEST' = 'GET_RESET_PASSWORD_REQUEST';
  export const GET_RESET_PASSWORD_SUCCESS:'GET_RESET_PASSWORD_SUCCESS' = 'GET_RESET_PASSWORD_SUCCESS';
  export const GET_RESET_PASSWORD_FAILED:'GET_RESET_PASSWORD_FAILED' = 'GET_RESET_PASSWORD_FAILED';
  export const GET_LOGIN_REQUEST:'GET_LOGIN_REQUEST' = 'GET_LOGIN_REQUEST';
  export const GET_LOGIN_SUCCESS:'GET_LOGIN_SUCCESS' = 'GET_LOGIN_SUCCESS';
  export const GET_LOGIN_FAILED:'GET_LOGIN_FAILED' = 'GET_LOGIN_FAILED';
  export const GET_LOGOUT_REQUEST:'GET_LOGOUT_REQUEST' = 'GET_LOGOUT_REQUEST';
  export const GET_LOGOUT_SUCCESS:'GET_LOGOUT_SUCCESS' = 'GET_LOGOUT_SUCCESS';
  export const GET_LOGOUT_FAILED:'GET_LOGOUT_FAILED' = 'GET_LOGOUT_FAILED';
  export const GET_TOKEN_REQUEST:'GET_TOKEN_REQUEST' = 'GET_TOKEN_REQUEST';
  export const GET_TOKEN_SUCCESS:'GET_TOKEN_SUCCESS' = 'GET_TOKEN_SUCCESS';
  export const GET_TOKEN_FAILED:'GET_TOKEN_FAILED' = 'GET_TOKEN_FAILED';
  export const GET_USER_REQUEST:'GET_USER_REQUEST' = 'GET_USER_REQUEST';
  export const GET_USER_SUCCESS:'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
  export const GET_USER_FAILED:'GET_USER_FAILED' = 'GET_USER_FAILED';
  export const PATCH_USER_REQUEST:'PATCH_USER_REQUEST' = 'PATCH_USER_REQUEST';
  export const PATCH_USER_SUCCESS:'PATCH_USER_SUCCESS' = 'PATCH_USER_SUCCESS';
  export const PATCH_USER_FAILED:'PATCH_USER_FAILED' = 'PATCH_USER_FAILED';

  export interface IGetForgotPasswordRequestAction {
    readonly type: typeof GET_FORGOT_PASSWORD_REQUEST;
  }
    export const getForgotPasswordRequestAction = (): IGetForgotPasswordRequestAction => ({
      type: GET_FORGOT_PASSWORD_REQUEST,
  });
    export interface IGetForgotPasswordSuccessAction {
    readonly type: typeof GET_FORGOT_PASSWORD_SUCCESS;
    payload: any;
  }
    export const getForgotPasswordSuccessAction = (payload: any): IGetForgotPasswordSuccessAction => ({
      type: GET_FORGOT_PASSWORD_SUCCESS,
      payload: payload,
  });
    export interface IGetForgotPasswordFailedAction {
    readonly type: typeof GET_FORGOT_PASSWORD_FAILED;
  }
    export const getForgotPasswordFailedAction = (): IGetForgotPasswordFailedAction => ({
      type: GET_FORGOT_PASSWORD_FAILED,
  });
    export interface IGetRegisterRequestAction {
    readonly type: typeof GET_REGISTER_REQUEST;
  }
    export const getRegisterequestAction = (): IGetRegisterRequestAction => ({
      type: GET_REGISTER_REQUEST,
  });
    export interface IGetRegisterSuccessAction {
    readonly type: typeof GET_REGISTER_SUCCESS;
    readonly payload: any;

  }
    export const getRegisterSuccessAction = (payload: any): IGetRegisterSuccessAction => ({
      type: GET_REGISTER_SUCCESS,
      payload: payload
  });
    export interface IGetRegisterFailedAction {
    readonly type: typeof GET_REGISTER_FAILED;
  }
    export const getRegisterFailedAction = (): IGetRegisterFailedAction => ({
      type: GET_REGISTER_FAILED,
  });
    export interface IGetResetPasswordRequestAction {
    readonly type: typeof GET_RESET_PASSWORD_REQUEST;
  }
    export const getResetPasswordRequestAction = (): IGetResetPasswordRequestAction => ({
      type: GET_RESET_PASSWORD_REQUEST,
  });
    export interface IGetResetPasswordSuccessAction {
    readonly type: typeof GET_RESET_PASSWORD_SUCCESS;
    payload: any;
  }
    export const getResetPasswordSuccessAction = (payload:any): IGetResetPasswordSuccessAction => ({
      type: GET_RESET_PASSWORD_SUCCESS,
      payload: payload
  });
    export interface IGetResetPasswordFailedAction {
    readonly type: typeof GET_RESET_PASSWORD_FAILED;
  }
    export const getResetPasswordFailedAction = (): IGetResetPasswordFailedAction => ({
      type: GET_RESET_PASSWORD_FAILED,
  });
    export interface IGetLoginRequestAction {
    readonly type: typeof GET_LOGIN_REQUEST;
  }
    export const getLoginRequestAction = (): IGetLoginRequestAction => ({
      type: GET_LOGIN_REQUEST,
  });
    export interface IGetLoginSuccessAction {
    readonly type: typeof GET_LOGIN_SUCCESS;
    readonly payload: any;
  }
    export const getLoginSuccessAction = (payload: any): IGetLoginSuccessAction => ({
      type: GET_LOGIN_SUCCESS,
      payload: payload,
  });
    export interface IGetLoginFailedAction {
    readonly type: typeof GET_LOGIN_FAILED;
  }
    export const getLoginFailedAction = (): IGetLoginFailedAction => ({
      type: GET_LOGIN_FAILED,
  });
    export interface IGetLogoutRequestAction {
    readonly type: typeof GET_LOGOUT_REQUEST;
  }
    export const getLogoutRequestAction = (): IGetLogoutRequestAction => ({
      type: GET_LOGOUT_REQUEST,
  });
    export interface IGetLogoutSuccessAction {
    readonly type: typeof GET_LOGOUT_SUCCESS;
  }
    export const getLogoutSuccessAction = (): IGetLogoutSuccessAction => ({
      type: GET_LOGOUT_SUCCESS,
  });
    export interface IGetLogoutFailedAction {
    readonly type: typeof GET_LOGOUT_FAILED;
  }
    export const getLogoutFailedAction = (): IGetLogoutFailedAction => ({
      type: GET_LOGOUT_FAILED,
  });
    export interface IGetTokenRequestAction {
    readonly type: typeof GET_TOKEN_REQUEST;
  }
    export const getTokenRequestAction = (): IGetTokenRequestAction => ({
      type: GET_TOKEN_REQUEST,
  });
    export interface IGetTokenSuccessAction {
    readonly type: typeof GET_TOKEN_SUCCESS;
  }
    export const getTokenSuccessAction = (): IGetTokenSuccessAction => ({
      type: GET_TOKEN_SUCCESS,
  });
    export interface IGetTokenFailedAction {
    readonly type: typeof GET_TOKEN_FAILED;
  }
    export const getTokenFailedAction = (): IGetTokenFailedAction => ({
      type: GET_TOKEN_FAILED,
  });
    export interface IGetUserRequestAction {
    readonly type: typeof GET_USER_REQUEST;
  }
    export const getUserRequestAction = (): IGetUserRequestAction => ({
      type: GET_USER_REQUEST,
  });
    export interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    payload: any;
  }
    export const getUserSuccessAction = (payload: any): IGetUserSuccessAction => ({
      type: GET_USER_SUCCESS,
      payload,
  });
    export interface IGetUserFailedAction {
    readonly type: typeof GET_USER_FAILED;
  }
    export const getUserFailedAction = (): IGetUserFailedAction => ({
      type: GET_USER_FAILED,
  });

  export type TRegistrationActions = 
  IGetForgotPasswordRequestAction |
  IGetForgotPasswordSuccessAction |
  IGetForgotPasswordFailedAction |
  IGetRegisterRequestAction |
  IGetRegisterSuccessAction |
  IGetRegisterFailedAction |
  IGetResetPasswordRequestAction |
  IGetResetPasswordSuccessAction |
  IGetResetPasswordFailedAction |
  IGetLoginRequestAction |
  IGetLoginSuccessAction |
  IGetLoginFailedAction |
  IGetLogoutRequestAction |
  IGetLogoutSuccessAction |
  IGetLogoutFailedAction |
  IGetTokenRequestAction |
  IGetTokenSuccessAction |
  IGetTokenFailedAction |
  IGetUserRequestAction |
  IGetUserSuccessAction |
  IGetUserFailedAction |
  IPatchUserAction |
  IPatchUserFailedAction | 
  IPatchUserSuccessAction;
  
  export interface IPatchUserAction {
    readonly type: typeof PATCH_USER_REQUEST;
  }

  export const patchUserAction = (): IPatchUserAction => ({
    type: PATCH_USER_REQUEST
  });
  
  
  export interface IPatchUserFailedAction {
    readonly type: typeof PATCH_USER_FAILED ;
  }
  export const patchUserFailedAction = ():IPatchUserFailedAction => ({
    type: PATCH_USER_FAILED
  });
  
  export interface IPatchUserSuccessAction {
    readonly type: typeof PATCH_USER_SUCCESS;
    readonly payload: any;
  }
  
  export const patchUserSuccessAction = (res:any): IPatchUserSuccessAction => ({
    type: PATCH_USER_SUCCESS,
    payload: res
  });
  
export const getRegister: AppThunk = (data: any) => (dispatch: AppDispatch) => {
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
}

export const getLogin: AppThunk = (data: any) => (dispatch: AppDispatch) => {
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
}

export const getLogout: AppThunk = (token: any) => (dispatch: AppDispatch) => {
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
}

export const getToken: AppThunk = (token: any) => (dispatch: AppDispatch) => {
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
}

export const getUser: AppThunk = (token: any) => (dispatch: AppDispatch) => {
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
}

export const patchUser: AppThunk = (data: any) => (dispatch: AppDispatch) => {
  const token = getCookie('accessToken')
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
}

interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const getForgotPassword: AppThunk = (data: any) => (dispatch: AppDispatch) => {

  const token = 'lala'
  localStorage.setItem('isForgotEmail', true.toString())
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
  }
  
export const getResetPassword: AppThunk = (data: any) => (dispatch: AppDispatch) => {
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
  }