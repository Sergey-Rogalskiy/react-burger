import {
    GET_ITEMS_FAILED,
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    TAB_SWITCH,
    ADD_ITEM_TO_CONSTRUCTOR,
    DELETE_ITEM_FROM_CONSTRUCTOR
  } from '../actions/app';
  
  const initialState = {
    items: [{id: 11, type: "bun", name:"HMMMM", price: 200000}],
    itemsRequest: false,
    itemsFailed: false,

    order: null,
    orderRequest: false,
    orderFailed: false,
  
    chosenItems: [],

    currentItemToView: null,
  
    currentTab: 'buns'
  };
  
  export const appReducer = (state = initialState, action) => {
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
      case GET_ORDER_REQUEST: {
        return {
          ...state,
          orderRequest: true
        };
      }
      case GET_ORDER_SUCCESS: {
        return { 
          ...state, 
          orderFailed: false,
          order: action.order, 
          orderRequest: false
        };
      }
      case GET_ORDER_FAILED: {
        return { 
          ...state, 
          orderFailed: true, 
          orderRequest: false 
        };
      }
      case TAB_SWITCH: {
        return {
          ...state,
          currentTab: action.payload
        };
      }
      case ADD_ITEM_TO_CONSTRUCTOR: {
        return { ...state, 
          chosenItems: [...state.chosenItems, action.item]
        };
      }
      
      case DELETE_ITEM_FROM_CONSTRUCTOR: {
        return { ...state, 
          chosenItems: [...state.chosenItems].filter(el => el._id !== action.item._id) };
      }
      default: {
        return state;
      }
    }
  };
  