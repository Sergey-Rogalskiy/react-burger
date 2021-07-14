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

  export interface IgetforgotpasswordrequestAction {
    readonly type: typeof GET_FORGOT_PASSWORD_REQUEST;
  }
    export const getforgotpasswordrequestAction = (): IgetforgotpasswordrequestAction => ({
      type: GET_FORGOT_PASSWORD_REQUEST,
  });
    export interface IgetforgotpasswordsuccessAction {
    readonly type: typeof GET_FORGOT_PASSWORD_SUCCESS;
    payload: any;
  }
    export const getforgotpasswordsuccessAction = (payload: any): IgetforgotpasswordsuccessAction => ({
      type: GET_FORGOT_PASSWORD_SUCCESS,
      payload: payload,
  });
    export interface IgetforgotpasswordfailedAction {
    readonly type: typeof GET_FORGOT_PASSWORD_FAILED;
  }
    export const getforgotpasswordfailedAction = (): IgetforgotpasswordfailedAction => ({
      type: GET_FORGOT_PASSWORD_FAILED,
  });
    export interface IgetregisterrequestAction {
    readonly type: typeof GET_REGISTER_REQUEST;
  }
    export const getregisterrequestAction = (): IgetregisterrequestAction => ({
      type: GET_REGISTER_REQUEST,
  });
    export interface IgetregistersuccessAction {
    readonly type: typeof GET_REGISTER_SUCCESS;
    readonly payload: any;

  }
    export const getregistersuccessAction = (payload: any): IgetregistersuccessAction => ({
      type: GET_REGISTER_SUCCESS,
      payload: payload
  });
    export interface IgetregisterfailedAction {
    readonly type: typeof GET_REGISTER_FAILED;
  }
    export const getregisterfailedAction = (): IgetregisterfailedAction => ({
      type: GET_REGISTER_FAILED,
  });
    export interface IgetresetpasswordrequestAction {
    readonly type: typeof GET_RESET_PASSWORD_REQUEST;
  }
    export const getresetpasswordrequestAction = (): IgetresetpasswordrequestAction => ({
      type: GET_RESET_PASSWORD_REQUEST,
  });
    export interface IgetresetpasswordsuccessAction {
    readonly type: typeof GET_RESET_PASSWORD_SUCCESS;
    payload: any;
  }
    export const getresetpasswordsuccessAction = (payload:any): IgetresetpasswordsuccessAction => ({
      type: GET_RESET_PASSWORD_SUCCESS,
      payload: payload
  });
    export interface IgetresetpasswordfailedAction {
    readonly type: typeof GET_RESET_PASSWORD_FAILED;
  }
    export const getresetpasswordfailedAction = (): IgetresetpasswordfailedAction => ({
      type: GET_RESET_PASSWORD_FAILED,
  });
    export interface IgetloginrequestAction {
    readonly type: typeof GET_LOGIN_REQUEST;
  }
    export const getloginrequestAction = (): IgetloginrequestAction => ({
      type: GET_LOGIN_REQUEST,
  });
    export interface IgetloginsuccessAction {
    readonly type: typeof GET_LOGIN_SUCCESS;
    readonly payload: any;
  }
    export const getloginsuccessAction = (payload: any): IgetloginsuccessAction => ({
      type: GET_LOGIN_SUCCESS,
      payload: payload,
  });
    export interface IgetloginfailedAction {
    readonly type: typeof GET_LOGIN_FAILED;
  }
    export const getloginfailedAction = (): IgetloginfailedAction => ({
      type: GET_LOGIN_FAILED,
  });
    export interface IgetlogoutrequestAction {
    readonly type: typeof GET_LOGOUT_REQUEST;
  }
    export const getlogoutrequestAction = (): IgetlogoutrequestAction => ({
      type: GET_LOGOUT_REQUEST,
  });
    export interface IgetlogoutsuccessAction {
    readonly type: typeof GET_LOGOUT_SUCCESS;
  }
    export const getlogoutsuccessAction = (): IgetlogoutsuccessAction => ({
      type: GET_LOGOUT_SUCCESS,
  });
    export interface IgetlogoutfailedAction {
    readonly type: typeof GET_LOGOUT_FAILED;
  }
    export const getlogoutfailedAction = (): IgetlogoutfailedAction => ({
      type: GET_LOGOUT_FAILED,
  });
    export interface IgettokenrequestAction {
    readonly type: typeof GET_TOKEN_REQUEST;
  }
    export const gettokenrequestAction = (): IgettokenrequestAction => ({
      type: GET_TOKEN_REQUEST,
  });
    export interface IgettokensuccessAction {
    readonly type: typeof GET_TOKEN_SUCCESS;
  }
    export const gettokensuccessAction = (): IgettokensuccessAction => ({
      type: GET_TOKEN_SUCCESS,
  });
    export interface IgettokenfailedAction {
    readonly type: typeof GET_TOKEN_FAILED;
  }
    export const gettokenfailedAction = (): IgettokenfailedAction => ({
      type: GET_TOKEN_FAILED,
  });
    export interface IgetuserrequestAction {
    readonly type: typeof GET_USER_REQUEST;
  }
    export const getuserrequestAction = (): IgetuserrequestAction => ({
      type: GET_USER_REQUEST,
  });
    export interface IgetusersuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    payload: any;
  }
    export const getusersuccessAction = (payload: any): IgetusersuccessAction => ({
      type: GET_USER_SUCCESS,
      payload,
  });
    export interface IgetuserfailedAction {
    readonly type: typeof GET_USER_FAILED;
  }
    export const getuserfailedAction = (): IgetuserfailedAction => ({
      type: GET_USER_FAILED,
  });
    export interface IpatchuserrequestAction {
    readonly type: typeof PATCH_USER_REQUEST;
  }
    export const patchuserrequestAction = (): IpatchuserrequestAction => ({
      type: PATCH_USER_REQUEST,
  });

    export interface IpatchuserfailedAction {
    readonly type: typeof PATCH_USER_FAILED;
  }
    export const patchuserfailedAction = (): IpatchuserfailedAction => ({
      type: PATCH_USER_FAILED,
  });
  
  export type TRegistrationActions = 
  IgetforgotpasswordrequestAction |
  IgetforgotpasswordsuccessAction |
  IgetforgotpasswordfailedAction |
  IgetregisterrequestAction |
  IgetregistersuccessAction |
  IgetregisterfailedAction |
  IgetresetpasswordrequestAction |
  IgetresetpasswordsuccessAction |
  IgetresetpasswordfailedAction |
  IgetloginrequestAction |
  IgetloginsuccessAction |
  IgetloginfailedAction |
  IgetlogoutrequestAction |
  IgetlogoutsuccessAction |
  IgetlogoutfailedAction |
  IgettokenrequestAction |
  IgettokensuccessAction |
  IgettokenfailedAction |
  IgetuserrequestAction |
  IgetusersuccessAction |
  IgetuserfailedAction |
  IpatchuserrequestAction |
  IpatchuserfailedAction |
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
export function getRegister(data: any) {
  return function(dispatch: any) {
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

export function getLogin(data: any) {
  return function(dispatch: any) {
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

export function getLogout(token: any) {
  return function(dispatch: any) {
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

export function getToken(token: any) {
  return function(dispatch: any) {
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

export function getUser(token: any) {
  return function(dispatch: any) {
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

export function patchUser(data: any) {
  const token = getCookie('accessToken')
  return function(dispatch: any) {
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
interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export function getForgotPassword(data: any) {
  const token = 'lala'
  localStorage.setItem('isForgotEmail', true.toString())
    return function(dispatch: any) {
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
  
export function getResetPassword(data: any) {

    return function(dispatch: any) {
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