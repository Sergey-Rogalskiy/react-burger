import { createExportDeclaration } from 'typescript';
import {
    GET_ITEMS_FAILED,
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    TAB_SWITCH,
    SET_CURRENT_ITEM_TO_VIEW
  } from '../actions/ingridients';
  import { ingridientsReducer } from './ingridients';
  
  const initialState = {
    items: [],
    itemsRequest: false,
    itemsFailed: false,

    currentItemToView: null,
  
    currentTab: 'buns',
  };
  
describe("ingridientReducer", () => {
  it("should return the initial state", () => {
    expect(ingridientsReducer(undefined, {})).toEqual(
      initialState
    );
  })

  it("should set itemsRequest (GET_ITEMS_REQUEST)", () => {
    expect(
      ingridientsReducer(initialState, {
        type: GET_ITEMS_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        itemsRequest: true,
      })
    );
  });

  it("should set items data (GET_ITEMS_SUCCESS)", () => {
    expect(
      ingridientsReducer(initialState, {
        type: GET_ITEMS_SUCCESS,
        items: {item: 1}
      })
    ).toEqual(
      expect.objectContaining({
        itemsFailed: false,
        items: {item: 1}, 
        itemsRequest: false
      })
    );
  });

  it("should set itemsFailed (GET_ITEMS_FAILED)", () => {
    expect(
      ingridientsReducer(initialState, {
        type: GET_ITEMS_FAILED
      })
    ).toEqual(
      expect.objectContaining({
        itemsFailed: true, 
        itemsRequest: false 
      })
    );
  });

  it("should set currentTab (TAB_SWITCH)", () => {
    expect(
      ingridientsReducer(initialState, {
        type: TAB_SWITCH,
        payload: 'one'
      })
    ).toEqual(
      expect.objectContaining({
        currentTab: 'one'
      })
    );
  });

  it("should set currentItemToView (SET_CURRENT_ITEM_TO_VIEW)", () => {
    expect(
      ingridientsReducer(initialState, {
        type: SET_CURRENT_ITEM_TO_VIEW,
        currentItemToView: 'currentItemToView'
      })
    ).toEqual(
      expect.objectContaining({
        ...initialState,
        currentItemToView: 'currentItemToView'
      })
    );
  });
})
