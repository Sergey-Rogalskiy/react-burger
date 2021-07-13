
import { 
  getOrderByIdRequest, 
} from '../real-service';

export const WS_CONNECTION_START:'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS:'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR:'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_GET_MESSAGE:'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE:'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
export const WS_CONNECTION_CLOSED:'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';

export const WS_CONNECTION_AUTH_START:'WS_CONNECTION_AUTH_START' = 'WS_CONNECTION_AUTH_START';
export const WS_CONNECTION_AUTH_SUCCESS:'WS_CONNECTION_AUTH_SUCCESS' = 'WS_CONNECTION_AUTH_SUCCESS';
export const WS_CONNECTION_AUTH_ERROR:'WS_CONNECTION_AUTH_ERROR' = 'WS_CONNECTION_AUTH_ERROR';
export const WS_GET_MESSAGE_AUTH:'WS_GET_MESSAGE_AUTH' = 'WS_GET_MESSAGE_AUTH';
export const WS_SEND_MESSAGE_AUTH:'WS_SEND_MESSAGE_AUTH' = 'WS_SEND_MESSAGE_AUTH';
export const WS_CONNECTION_AUTH_CLOSED:'WS_CONNECTION_AUTH_CLOSED' = 'WS_CONNECTION_AUTH_CLOSED';

export const ORDER_ID_REQUEST:'ORDER_ID_REQUEST' = 'ORDER_ID_REQUEST';
export const ORDER_ID_SUCCESS:'ORDER_ID_SUCCESS' = 'ORDER_ID_SUCCESS';
export const ORDER_ID_FAILED:'ORDER_ID_FAILED' = 'ORDER_ID_FAILED';


export interface IGetOrderByIdAction {
  readonly type: typeof ORDER_ID_REQUEST;
}

export interface IGetOrderByIdFailedAction {
  readonly type: typeof ORDER_ID_FAILED;
}

export interface IGetOrderByIdSuccessAction {
  readonly type: typeof ORDER_ID_SUCCESS;
  readonly order: TOrder;
}

export interface IWsInitAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsInitAuthAction {
  readonly type: typeof WS_CONNECTION_AUTH_START;
}

export type TFeedActions = 
IGetOrderByIdAction |
IGetOrderByIdFailedAction |
IGetOrderByIdSuccessAction|
IWsInitAction |
IWsInitAuthAction;

export type TOrder = {
  readonly id: number;
  readonly password: string;
  readonly email: string;
  readonly name: string;
};

export const wsInitAction = (): IWsInitAction => ({
  type: WS_CONNECTION_START
});

export const wsInitAuthAction = (): IWsInitAuthAction => ({
  type: WS_CONNECTION_AUTH_START
}); 

export const getOrderByIdAction = (): IGetOrderByIdAction => ({
  type: ORDER_ID_REQUEST
});

export const getOrderByIdtOrderFailedAction = (): IGetOrderByIdFailedAction => ({
  type: ORDER_ID_FAILED
});

export const getOrderByIdSuccessAction = (res:any): IGetOrderByIdSuccessAction => ({
  type: ORDER_ID_SUCCESS,
  order: res
});

export function getOrderById(data: any) {
  return function(dispatch: any) {
    dispatch(getOrderByIdAction());
    getOrderByIdRequest(data)
    .then(res => {
      if (res && res.success) {
        dispatch(getOrderByIdSuccessAction(res));
      } else {
        dispatch(getOrderByIdtOrderFailedAction());
      }
    })
    .catch(err => {
        dispatch(getOrderByIdtOrderFailedAction());
    })
  };
}

export function wsInit() {
    return function(dispatch: any) {
      dispatch(wsInitAction())
    }
  }
export function wsInitAuth() {
    return function(dispatch: any) {
      dispatch(wsInitAuthAction())
    }
  }