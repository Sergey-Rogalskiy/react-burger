import {
    GET_ITEMS_FAILED,
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    TAB_SWITCH,
    ADD_ITEM_TO_CONSTRUCTOR,
    DELETE_ITEM_FROM_CONSTRUCTOR,
    CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR
  } from '../actions/app';
  
  const initialState = {
    items: [],
    itemsRequest: false,
    itemsFailed: false,

    order: null,
    orderRequest: false,
    orderFailed: false,
  
    chosenItems: [],
    chosenBuns: {},

    currentItemToView: null,
  
    currentTab: 'buns',
    totalPrice: 0,
    totalPriceBuns: 0
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
        const priceItems =  state.chosenItems.reduce((a, b) => a + b.price, 0)
        const priceBuns =  state.chosenBuns.price
        let totalPrice = priceBuns+priceItems
        if (!priceItems) {
          totalPrice = priceBuns
        }
        if (!priceBuns) {
          totalPrice = priceItems
        }
        if (action.item.type === "bun") {
          return { 
            ...state, 
            chosenBuns: action.item,
            totalPrice
          };
        }
        return { 
          ...state, 
          chosenItems: [...state.chosenItems, action.item],
          totalPrice
        };
      }
      case DELETE_ITEM_FROM_CONSTRUCTOR: {
        return { ...state, 
          chosenItems: [...state.chosenItems].filter(el => el._id !== action.item._id) };
      }
      case CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR: {
        console.log('aaaaaa')
        
      const dragCard = state.chosenItems[action.dragIndex];
        return { 
          ...state, 
          chosenItems: [...state.chosenItems,
                        [action.dragIndex, 1],
                        [action.hoverIndex, 0, dragCard]
            ]
        };
      }
      default: {
        return state;
      }
    }
  };
  