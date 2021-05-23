import { 
    getIngridientsRequest, 
    getOrderRequest, } from '../real-service';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const TAB_SWITCH = 'TAB_SWITCH';

export const ADD_ITEM_TO_CONSTRUCTOR = 'ADD_ITEM_TO_CONSTRUCTOR';
export const DELETE_ITEM_FROM_CONSTRUCTOR = 'DELETE_ITEM_FROM_CONSTRUCTOR';
export const CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR = 'CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR';

export function getItems() {
  return function(dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST
    });
    getIngridientsRequest()
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ITEMS_SUCCESS,
          items: res.data
        });
      } else {
        dispatch({
          type: GET_ITEMS_FAILED
        });
      }
    })
    .catch(err => {
        dispatch({
          type: GET_ITEMS_FAILED
        });
    })
  };
}

export function getOrder() {
    return function(dispatch) {
      dispatch({
        type: GET_ORDER_REQUEST
      });
      getOrderRequest()
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            items: res.data
          });
        } else {
          dispatch({
            type: GET_ORDER_FAILED
          });
        }
      })
      .catch(err => {
          dispatch({
            type: GET_ORDER_FAILED
          });
      })
    };
  }