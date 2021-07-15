import { 
    getOrderRequest, 
  } from '../real-service';
import { getCookie } from '../utils';
import { TOrder, TIngredient, AppThunk, AppDispatch, TOrderResponse } from '../../types';

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
  readonly order: TOrderResponse|null;
}

export interface IOrderResetAction {
  readonly type: typeof ORDER_RESET;
}

export interface IAddItemToConstructorAction {
  readonly type: typeof ADD_ITEM_TO_CONSTRUCTOR;
  item: TIngredient
}

export interface IDeleteItemFromConstructorAction {
  readonly type: typeof DELETE_ITEM_FROM_CONSTRUCTOR;
  index: number
}

export interface IChangeOrderItemsInConstructorAction {
  readonly type: typeof CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR;
  dragIndex:number;
  hoverIndex:number;
}

export type TConstructorActions = 
IGetOrderAction |
IGetOrderFailedAction |
IGetOrderSuccessAction|
IOrderResetAction|
IAddItemToConstructorAction|
IDeleteItemFromConstructorAction|
IChangeOrderItemsInConstructorAction;


export const getOrderAction = (): IGetOrderAction => ({
  type: GET_ORDER_REQUEST
});

export const getOrderFailedAction = (): IGetOrderFailedAction => ({
  type: GET_ORDER_FAILED
});

export const getOrderSuccessAction = (res:TOrderResponse): IGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  order: res
});

export const orderResetAction = (): IOrderResetAction => ({
  type: ORDER_RESET,
});
export const addItemToConstructorAction = (item:any): IAddItemToConstructorAction => ({
  type: ADD_ITEM_TO_CONSTRUCTOR,
  item: item
});
export const deleteItemFromConstructorAction = (index:number): IDeleteItemFromConstructorAction => ({
  type: DELETE_ITEM_FROM_CONSTRUCTOR,
  index: index
});
export const changeOrderItemsInConstructorAction = (dragIndex:number,hoverIndex:number): IChangeOrderItemsInConstructorAction => ({
  type: CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR,
  dragIndex:dragIndex,
  hoverIndex:hoverIndex,
});

export const getOrder: AppThunk = (data: any) => (dispatch: AppDispatch) => {
  const accessToken = getCookie('accessToken')
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
  }