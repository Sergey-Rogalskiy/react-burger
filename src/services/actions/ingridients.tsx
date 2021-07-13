import { 
    getIngridientsRequest, 
} from '../real-service';

export const GET_ITEMS_REQUEST:'GET_ITEMS_REQUEST' = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS:'GET_ITEMS_SUCCESS' = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED:'GET_ITEMS_FAILED' = 'GET_ITEMS_FAILED';
export const TAB_SWITCH:'TAB_SWITCH' = 'TAB_SWITCH';
export const SET_CURRENT_ITEM_TO_VIEW:'SET_CURRENT_ITEM_TO_VIEW' = 'SET_CURRENT_ITEM_TO_VIEW';

export type TIngredient = {
  readonly id: number;
  readonly password: string;
  readonly email: string;
  readonly name: string;
};

export interface IGetItemsAction {
  readonly type: typeof GET_ITEMS_REQUEST;
}

export interface IGetItemsFailedAction {
  readonly type: typeof GET_ITEMS_FAILED ;
}

export interface IGetItemsSuccessAction {
  readonly type: typeof GET_ITEMS_SUCCESS;
  readonly items: ReadonlyArray<TIngredient>;
}

export interface ITabSwitchAction {
  readonly type: typeof TAB_SWITCH;
  items: any
}

export interface ISetCurrentItemsToViewAction {
  readonly type: typeof SET_CURRENT_ITEM_TO_VIEW;
  currentItemToView: any
}

export type TFeedActions = 
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

export const tabSwitchAction = (res:any): ITabSwitchAction => ({
  type: TAB_SWITCH,
  items: res
});

export const setCurrentItemsToViewAction = (res:any): ISetCurrentItemsToViewAction => ({
  type: SET_CURRENT_ITEM_TO_VIEW,
  currentItemToView: res
});

export function setCurrentItemToView(currentItemToView: any) {
  return function(dispatch: any) {
    dispatch({
      type: SET_CURRENT_ITEM_TO_VIEW,
      currentItemToView: currentItemToView
    })
  }
}

export function getItems() {
  return function(dispatch: any) {
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
