
import { 
  getOrderByIdRequest, 
} from '../real-service';
import { TOrder, AppThunk, AppDispatch } from '../../types';

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
  readonly payload: {orders: TOrder[]};
}

export interface IWsInitAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionFailedAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: any;
}

export interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: any;
}

export interface IWsSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
}

export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsInitAuthAction {
  readonly type: typeof WS_CONNECTION_AUTH_START;
}

export interface IWsConnectionAuthSuccessAction {
  readonly type: typeof WS_CONNECTION_AUTH_SUCCESS;
}

export interface IWsConnectionAuthFailedAction {
  readonly type: typeof WS_CONNECTION_AUTH_ERROR;
  readonly payload: any;
}

export interface IWsGetMessageAuthAction {
  readonly type: typeof WS_GET_MESSAGE_AUTH;
  readonly payload: any;
}

export interface IWsSendMessageAuthAction {
  readonly type: typeof WS_SEND_MESSAGE_AUTH;
}

export interface IWsConnectionAuthClosedAction {
  readonly type: typeof WS_CONNECTION_AUTH_CLOSED;
}

export type TFeedActions = 
IGetOrderByIdAction |
IGetOrderByIdFailedAction |
IGetOrderByIdSuccessAction|
IWsInitAction |
IWsConnectionSuccessAction |
IWsConnectionFailedAction |
IWsGetMessageAction |
IWsSendMessageAction |
IWsConnectionClosedAction |
IWsInitAuthAction |
IWsConnectionAuthSuccessAction |
IWsConnectionAuthFailedAction |
IWsGetMessageAuthAction |
IWsSendMessageAuthAction |
IWsConnectionAuthClosedAction;

export const wsInitAction = (): IWsInitAction => ({
  type: WS_CONNECTION_START
});

export const wsConnectionSuccessAction = (): IWsConnectionSuccessAction => ({
  type: WS_CONNECTION_SUCCESS
});

export const wsConnectionFailedAction = (payload:any): IWsConnectionFailedAction => ({
  type: WS_CONNECTION_ERROR,
  payload: payload
});

export const wsGetMessageAction = (payload:any): IWsGetMessageAction => ({
  type: WS_GET_MESSAGE,
  payload: payload
});

export const wsSendMessageAction = (): IWsSendMessageAction => ({
  type: WS_SEND_MESSAGE
});

export const wsConnectionClosedAction = (): IWsConnectionClosedAction => ({
  type: WS_CONNECTION_CLOSED
});

export const wsInitAuthAction = (): IWsInitAuthAction => ({
  type: WS_CONNECTION_AUTH_START
}); 

export const wsConnectionAuthSuccessAction = (): IWsConnectionAuthSuccessAction => ({
  type: WS_CONNECTION_AUTH_SUCCESS
});

export const wsConnectionAuthFailedAction = (payload:any): IWsConnectionAuthFailedAction => ({
  type: WS_CONNECTION_AUTH_ERROR,
  payload: payload
});

export const wsGetMessageAuthAction = (payload:any): IWsGetMessageAuthAction => ({
  type: WS_GET_MESSAGE_AUTH,
  payload: payload
});

export const wsSendMessageAuthAction = (): IWsSendMessageAuthAction => ({
  type: WS_SEND_MESSAGE_AUTH
});

export const wsConnectionAuthClosedAction = (): IWsConnectionAuthClosedAction => ({
  type: WS_CONNECTION_AUTH_CLOSED
});

export const getOrderByIdAction = (): IGetOrderByIdAction => ({
  type: ORDER_ID_REQUEST
});

export const getOrderByIdtOrderFailedAction = (): IGetOrderByIdFailedAction => ({
  type: ORDER_ID_FAILED
});

export const getOrderByIdSuccessAction = (res:any): IGetOrderByIdSuccessAction => ({
  type: ORDER_ID_SUCCESS,
  payload: res
});

export const getOrderById: AppThunk = (data: any) => (dispatch: AppDispatch) => {
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
}