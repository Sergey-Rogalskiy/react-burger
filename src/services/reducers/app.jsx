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
        var chosenItems = [...state.chosenItems]
        chosenItems.splice(action.index, 1)
        return { ...state, 
          chosenItems: chosenItems };
      }
      case CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR: {
        const dragCard = state.chosenItems[action.dragIndex];
        const hoverCard = state.chosenItems[action.hoverIndex];

        if (dragCard){
          const newArray = [
            ...state.chosenItems,
          ]
          newArray[action.hoverIndex] = dragCard
          newArray[action.dragIndex] = hoverCard

          return { 
            ...state, 
            chosenItems: newArray
          };
        }
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