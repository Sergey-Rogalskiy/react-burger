
import { 
  getOrderByIdRequest, 
} from '../real-service';

export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';

export const WS_CONNECTION_AUTH_START = 'WS_CONNECTION_AUTH_START';
export const WS_CONNECTION_AUTH_SUCCESS = 'WS_CONNECTION_AUTH_SUCCESS';
export const WS_CONNECTION_AUTH_ERROR = 'WS_CONNECTION_AUTH_ERROR';
export const WS_GET_MESSAGE_AUTH = 'WS_GET_MESSAGE_AUTH';
export const WS_SEND_MESSAGE_AUTH = 'WS_SEND_MESSAGE_AUTH';
export const WS_CONNECTION_AUTH_CLOSED = 'WS_CONNECTION_AUTH_CLOSED';

export const ORDER_ID_REQUEST = 'ORDER_ID_REQUEST';
export const ORDER_ID_SUCCESS = 'ORDER_ID_SUCCESS';
export const ORDER_ID_FAILED = 'ORDER_ID_FAILED';


export function wsInit() {
    return function(dispatch) {
      dispatch({
        type: WS_CONNECTION_START
      })
    }
  }
export function wsInitAuth() {
    return function(dispatch) {
      dispatch({
        type: WS_CONNECTION_AUTH_START
      })
    }
  }
  

export function getOrderById(data) {
    return function(dispatch) {
      dispatch({
        type: ORDER_ID_REQUEST
      });
      getOrderByIdRequest(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: ORDER_ID_SUCCESS,
            payload: res
          });
        } else {
          dispatch({
            type: ORDER_ID_FAILED
          });
        }
      })
      .catch(err => {
          dispatch({
            type: ORDER_ID_FAILED
          });
      })
    };
  }