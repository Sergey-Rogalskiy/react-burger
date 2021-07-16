import { 
    getIngridientsRequest, 
} from '../real-service';
import { TIngredient, AppThunk, AppDispatch, TCurrentItemToView } from '../../types';
export const GET_ITEMS_REQUEST:'GET_ITEMS_REQUEST' = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS:'GET_ITEMS_SUCCESS' = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED:'GET_ITEMS_FAILED' = 'GET_ITEMS_FAILED';
export const TAB_SWITCH:'TAB_SWITCH' = 'TAB_SWITCH';
export const SET_CURRENT_ITEM_TO_VIEW:'SET_CURRENT_ITEM_TO_VIEW' = 'SET_CURRENT_ITEM_TO_VIEW';


export interface IGetItemsAction {
  readonly type: typeof GET_ITEMS_REQUEST;
}

export interface IGetItemsFailedAction {
  readonly type: typeof GET_ITEMS_FAILED ;
}

export interface IGetItemsSuccessAction {
  readonly type: typeof GET_ITEMS_SUCCESS;
  readonly items: Array<TIngredient>;
}

export interface ITabSwitchAction {
  readonly type: typeof TAB_SWITCH;
  payload: 'buns' | 'sauces' | 'mains'
}

export interface ISetCurrentItemsToViewAction {
  readonly type: typeof SET_CURRENT_ITEM_TO_VIEW;
  currentItemToView: any
}

export type TIngredientActions = 
IGetItemsAction |
IGetItemsFailedAction |
IGetItemsSuccessAction|
ITabSwitchAction |
ISetCurrentItemsToViewAction;

export const getItemsAction = (): IGetItemsAction => ({
  type: GET_ITEMS_REQUEST
});

export const getItemsFailedAction = (): IGetItemsFailedAction => ({
  type: GET_ITEMS_FAILED
});

export const getItemsSuccessAction = (res:any): IGetItemsSuccessAction => ({
  type: GET_ITEMS_SUCCESS,
  items: res
});

export const tabSwitchAction = (res:'buns' | 'sauces' | 'mains'): ITabSwitchAction => ({
  type: TAB_SWITCH,
  payload: res
});

export const setCurrentItemsToViewAction = (res:any): ISetCurrentItemsToViewAction => ({
  type: SET_CURRENT_ITEM_TO_VIEW,
  currentItemToView: res
});

export function setCurrentItemToView(currentItemToView: any) {
  return function(dispatch: AppDispatch) {
    dispatch(setCurrentItemsToViewAction(currentItemToView))
  }
}

export const getItems: AppThunk = () => (dispatch: AppDispatch) => {
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
}
