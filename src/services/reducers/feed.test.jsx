import { feedReducer } from "./feed";



  const initialState = {
    wsConnected: false,
    wsError: null,
    wsFeedData: [],
    
    wsAuthConnected: false,
    wsAuthError: null,
    wsFeedDataAuth: null,
  };

  

describe("feedReducer", () => {
  it("should return the initial state", () => {
    expect(feedReducer(undefined, {})).toEqual(
      initialState
    );
  })
})