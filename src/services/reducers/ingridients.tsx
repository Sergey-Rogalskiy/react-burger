import {
    GET_ITEMS_FAILED,
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    TAB_SWITCH,
    SET_CURRENT_ITEM_TO_VIEW
  } from '../actions/ingridients';
  import {TIngredient, TOrder} from '../../types'
  import {TIngredientActions} from '../actions/ingridients'
  import {TCurrentItemToView} from '../../types'
  
    type TInitialState = {
      items: TIngredient[],
      itemsRequest: boolean,
      itemsFailed: boolean,
  
      currentItemToView: TCurrentItemToView | null,
    
      currentTab: 'buns' | 'sauces' | 'mains',
    }
  
  const initialState: TInitialState = {
    items: [],
    itemsRequest: false,
    itemsFailed: false,

    currentItemToView: null,
  
    currentTab: 'buns',
  };
  
  export const ingridientsReducer = (state = initialState, action:TIngredientActions): TInitialState => {
    switch (action.type) {
      case GET_ITEMS_REQUEST: {
        return {
          ...state,
          itemsRequest: true
        };
      }
      case GET_ITEMS_SUCCESS: {
        return { 
          ...state, 
          itemsFailed: false, 
          items: action.items, 
          itemsRequest: false 
        };
      }
      case GET_ITEMS_FAILED: {
        return { 
          ...state, 
          itemsFailed: true, 
          itemsRequest: false 
        };
      }
      case TAB_SWITCH: {
        return {
          ...state,
          currentTab: action.payload
        };
      }
      case SET_CURRENT_ITEM_TO_VIEW: {
        return { ...state, 
          currentItemToView: action.currentItemToView };
      }
      default: {
        return state;
      }
    }
  };
  
  // let data_buns = action.payload.filter(obj1 => obj1.type === "bun");
  // const buns = data_buns[Math.floor(Math.random() * 2)]
  // let totalPrice = buns.price * 2;
  // items.map(item => (totalPrice += item.price));
  