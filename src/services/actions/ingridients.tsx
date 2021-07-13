import { 
    getIngridientsRequest, 
} from '../real-service';

export const GET_ITEMS_REQUEST:'GET_ITEMS_REQUEST' = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS:'GET_ITEMS_SUCCESS' = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED:'GET_ITEMS_FAILED' = 'GET_ITEMS_FAILED';

export const TAB_SWITCH:'TAB_SWITCH' = 'TAB_SWITCH';

export const SET_CURRENT_ITEM_TO_VIEW:'SET_CURRENT_ITEM_TO_VIEW' = 'SET_CURRENT_ITEM_TO_VIEW';

export function setCurrentItemToView(currentItemToView) {
  return function(dispatch) {
    dispatch({
      type: SET_CURRENT_ITEM_TO_VIEW,
      currentItemToView: currentItemToView
    })
  }
}

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
