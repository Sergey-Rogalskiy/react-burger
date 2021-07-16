import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_CONNECTION_AUTH_SUCCESS,
  WS_CONNECTION_AUTH_ERROR,
  WS_CONNECTION_AUTH_CLOSED,
  WS_GET_MESSAGE_AUTH,
  ORDER_ID_FAILED,
  ORDER_ID_REQUEST,
  ORDER_ID_SUCCESS
} from '../actions/feed';
import {TOrder} from '../../types'
import {TFeedActions} from '../actions/feed'

  type TInitialState = {
    wsConnected: boolean,
    wsError: {isTrusted:boolean} | null,
    wsFeedData: {orders: TOrder[], total: number, totalToday: number},

    wsAuthConnected: boolean,
    wsAuthError: {isTrusted:boolean} | null,
    wsFeedDataAuth: {orders: TOrder[]},

    orderIdRequest: boolean,
    orderIdFailed: boolean,
    orderId: TOrder | null,
  }

  const initialState:TInitialState = {

    wsConnected: false,
    wsError: null,
    wsFeedData: {orders: [], total: 0, totalToday: 0},

    wsAuthConnected: false,
    wsAuthError: null,
    wsFeedDataAuth: {orders: []},

    orderIdRequest: false,
    orderIdFailed: false,
    orderId: null
  };
  
  export const feedReducer = (state = initialState, action:TFeedActions):TInitialState => {
    switch (action.type) {
      case WS_CONNECTION_SUCCESS: {
        return {
          ...state,
          wsError: null,
          wsConnected: true
        };
      }
      case WS_CONNECTION_ERROR: {
        return {
          ...state,
          wsError: action.payload,
          wsConnected: false
        };
      }
      case WS_CONNECTION_CLOSED: {
        return {
          ...state,
          wsError: null,
          wsConnected: false
        };
      }
      case WS_GET_MESSAGE: {
        return {
          ...state,
          wsError: null,
          wsFeedData: action.payload
        };
      }
      case WS_CONNECTION_AUTH_SUCCESS: {
        return {
          ...state,
          wsAuthError: null,
          wsAuthConnected: true
        };
      }
      case WS_CONNECTION_AUTH_ERROR: {
        return {
          ...state,
          wsAuthError: action.payload,
          wsAuthConnected: false
        };
      }
      case WS_CONNECTION_AUTH_CLOSED: {
        return {
          ...state,
          wsAuthError: null,
          wsAuthConnected: false
        };
      }
      case WS_GET_MESSAGE_AUTH: {
        return {
          ...state,
          wsAuthError: null,
          wsFeedDataAuth: action.payload
        };
      }
      case ORDER_ID_REQUEST: {
        return {
          ...state,
          orderIdRequest: true
        };
      }
      case ORDER_ID_SUCCESS: {
        return { 
          ...state, 
          orderIdFailed: false,
          orderId: action.payload.orders[0], 
          orderIdRequest: false
        };
      }
      case ORDER_ID_FAILED: {
        return { 
          ...state, 
          orderIdFailed: true, 
          orderIdRequest: false 
        };
      }
      default: {
        return state;
      }
    }
  };
  