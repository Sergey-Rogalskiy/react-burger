import { 
    getOrderRequest, 
  } from '../real-service';
import { getCookie } from '../utils';
    

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const ADD_ITEM_TO_CONSTRUCTOR = 'ADD_ITEM_TO_CONSTRUCTOR';
export const DELETE_ITEM_FROM_CONSTRUCTOR = 'DELETE_ITEM_FROM_CONSTRUCTOR';
export const CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR = 'CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR';

export const ORDER_RESET = 'ORDER_RESET';

export function getOrder(data) {
  const accessToken = getCookie('accessToken')
    return function(dispatch) {
      dispatch({
        type: GET_ORDER_REQUEST
      });
      getOrderRequest(accessToken, data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res
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