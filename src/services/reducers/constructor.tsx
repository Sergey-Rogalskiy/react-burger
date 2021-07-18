import {
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    ADD_ITEM_TO_CONSTRUCTOR,
    DELETE_ITEM_FROM_CONSTRUCTOR,
    CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR,
  } from '../actions/constructor';
  
import {TIngredient, TOrder, TChosenBuns, TOrderResponse} from '../../types'
import {TConstructorActions} from '../actions/constructor'

  type TInitialState = {
    order: TOrderResponse | null,
    orderRequest: boolean,
    orderFailed: boolean,
  
    chosenItems: TIngredient[],
    chosenBuns: TIngredient | TChosenBuns,

    totalPrice: number,
    totalPriceBuns: number
  }

  const initialState: TInitialState = {

    order: null,
    orderRequest: false,
    orderFailed: false,
  
    chosenItems: [],
    chosenBuns: {price: 0, name:'name',image:'image', _id:'_id'},

    totalPrice: 0,
    totalPriceBuns: 0
  };
  
  export const constructorReducer = (state = initialState, action: TConstructorActions):TInitialState  => {
    switch (action.type) {

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

      case ADD_ITEM_TO_CONSTRUCTOR: {
        if (action.item.type === "bun") {
          let priceItems = 0
          if (state.chosenItems[0]) {
            priceItems = state.chosenItems.reduce((a, b) => a + b.price, 0)
          }
          const totalPrice = action.item.price * 2 +priceItems
          return { 
            ...state, 
            chosenBuns: action.item,
            totalPrice
          };
        }

        let priceBuns = 0
        if (state.chosenBuns) {
          priceBuns = state.chosenBuns.price * 2
        }
        const newItems = [...state.chosenItems, action.item]
        const priceItems = newItems.reduce((a, b) => a + b.price, 0)
        const totalPrice = priceBuns+priceItems
        return { 
          ...state, 
          chosenItems: newItems,
          totalPrice
        }
      }
      case DELETE_ITEM_FROM_CONSTRUCTOR: {
        var chosenItems = [...state.chosenItems]
        chosenItems.splice(action.index, 1)
        
        const priceForNewItems = chosenItems.reduce((a, b) => a + b.price, 0)
        const priceBuns =  state.chosenBuns.price * 2
        let totalPrice = priceBuns+priceForNewItems

        return { ...state, 
          chosenItems: chosenItems,
          totalPrice
         };
      }
      case CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR: {
        const dragCard = state.chosenItems[action.dragIndex];
        if (dragCard){
          const newArray = [
            ...state.chosenItems,
          ]
          newArray.splice(action.dragIndex, 1)
          newArray.splice(action.hoverIndex, 0, dragCard)

          return { 
            ...state, 
            chosenItems: newArray
          };
        } else {
          return state;
        }
      }
      default: {
        return state;
      }
    }
  };
  