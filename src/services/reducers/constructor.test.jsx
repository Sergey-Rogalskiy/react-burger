import {
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    ADD_ITEM_TO_CONSTRUCTOR,
    DELETE_ITEM_FROM_CONSTRUCTOR,
    CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR,
    ORDER_RESET,
  } from '../actions/constructor';
  import { constructorReducer } from './constructor';

  const initialState = {

    order: null,
    orderRequest: false,
    orderFailed: false,
  
    chosenItems: [],
    chosenBuns: {},

    totalPrice: 0,
    totalPriceBuns: 0
  };

  

describe("constructorReducer", () => {
  it("should return the initial state", () => {
    expect(constructorReducer(undefined, {})).toEqual(
      initialState
    );
  })

  it("should set orderRequest (GET_ORDER_REQUEST)", () => {
    expect(
      constructorReducer(initialState, {
        type: GET_ORDER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        orderRequest: true,
      })
    );
  });

  it("should set order data (GET_ORDER_SUCCESS)", () => {
    expect(
      constructorReducer(initialState, {
        type: GET_ORDER_SUCCESS,
        order: {order: 1}
      })
    ).toEqual(
      expect.objectContaining({
        orderFailed: false,
        order: {order: 1}, 
        orderRequest: false
      })
    );
  });

  it("should set orderFailed (GET_ORDER_FAILED)", () => {
    expect(
      constructorReducer(initialState, {
        type: GET_ORDER_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        orderFailed: true, 
        orderRequest: false 
      })
    );
  });

  it("should set order to null (ORDER_RESET)", () => {
    expect(
      constructorReducer(initialState, {
        type: ORDER_RESET
      })
    ).toEqual(
      expect.objectContaining({
        orderFailed: false,
        order: null, 
        orderRequest: false
      })
    );
  });

  it("should add bun to constructor (ADD_ITEM_TO_CONSTRUCTOR)", () => {
    expect(
      constructorReducer(initialState, {
        type: ADD_ITEM_TO_CONSTRUCTOR,
        item: {type: 'bun', price: 50}
      })
    ).toEqual(
      expect.objectContaining({
        chosenBuns: {type: 'bun', price: 50},
        totalPrice: 100
      })
    );
  });

  it("should add not bun to constructor (ADD_ITEM_TO_CONSTRUCTOR)", () => {
    expect(
      constructorReducer(initialState, {
        type: ADD_ITEM_TO_CONSTRUCTOR,
        item: {type: 'not bun', price: 200}
      })
    ).toEqual(
      expect.objectContaining({
        chosenItems: [{type: 'not bun', price: 200}],
        totalPrice: NaN
      })
    );
  });

  const initialStateForDeletingAndChange = {
    chosenBuns: {price: 50},
    chosenItems: [
      {
        id: 1,
        name: 'la mela',
        price: 25
      },
      {
        id: 2,
        name: 'il pane',
        price: 75
      }
    ],
    totalPrice: 100
  }
  it("should delete item from constructor (DELETE_ITEM_FROM_CONSTRUCTOR)", () => {
    expect(
      constructorReducer(initialStateForDeletingAndChange, {
        type: DELETE_ITEM_FROM_CONSTRUCTOR,
        index: 0
      })
    ).toEqual(
      expect.objectContaining({
        chosenBuns: {price: 50},
        chosenItems: [
          {
            id: 2,
            name: 'il pane',
            price: 75
          }
        ],
        totalPrice: 175
      })
    );
  });
  it("should change items in constructor (CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR)", () => {
    expect(
      constructorReducer(initialStateForDeletingAndChange, {
        type: CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR,
        dragIndex: 0,
        hoverIndex: 1
      })
    ).toEqual(
      expect.objectContaining({
        chosenBuns: {price: 50},
        chosenItems: [
          {
            id: 2,
            name: 'il pane',
            price: 75
          },
          {
            id: 1,
            name: 'la mela',
            price: 25
          }
        ],
        totalPrice: 100
      })
    );
  });

});