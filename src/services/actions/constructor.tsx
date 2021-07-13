import { 
    getOrderRequest, 
  } from '../real-service';
import { getCookie } from '../utils';
    

export const GET_ORDER_REQUEST:'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS:'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED:'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';

export const ADD_ITEM_TO_CONSTRUCTOR:'ADD_ITEM_TO_CONSTRUCTOR' = 'ADD_ITEM_TO_CONSTRUCTOR';
export const DELETE_ITEM_FROM_CONSTRUCTOR:'DELETE_ITEM_FROM_CONSTRUCTOR' = 'DELETE_ITEM_FROM_CONSTRUCTOR';
export const CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR:'CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR' = 'CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR';

export const ORDER_RESET:'ORDER_RESET' = 'ORDER_RESET';

export interface IGetOrderAction {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_FAILED;
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: TOrder;
}

export type TConstructorActions = 
IGetOrderAction |
IGetOrderFailedAction |
IGetOrderSuccessAction;

export type TOrder = {
  readonly id: number;
  readonly password: string;
  readonly email: string;
  readonly name: string;
};

export const getOrderAction = (): IGetOrderAction => ({
  type: GET_ORDER_REQUEST
});

export const getOrderFailedAction = (): IGetOrderFailedAction => ({
  type: GET_ORDER_FAILED
});

export const getOrderSuccessAction = (res:any): IGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  order: res
});

export function getOrder(data: any) {
  const accessToken = getCookie('accessToken')
    return function(dispatch: any) {
      dispatch(getOrderAction());
      getOrderRequest(accessToken, data)
      .then(res => {
        if (res && res.success) {
          dispatch(getOrderSuccessAction(res));
        } else {
          dispatch(getOrderFailedAction());
        }
      })
      .catch(err => {
          dispatch(getOrderFailedAction());
      })
    };
  }