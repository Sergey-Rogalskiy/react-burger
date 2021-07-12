import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_CONNECTION_AUTH_SUCCESS,
  WS_CONNECTION_AUTH_ERROR,
  WS_CONNECTION_AUTH_CLOSED,
  WS_GET_MESSAGE_AUTH,
  ORDER_ID_FAILED,
  ORDER_ID_REQUEST,
  ORDER_ID_SUCCESS
} from '../actions/feed';

  const initialState = {
    feedData: [
      {
        _id: 1,
        time: "Сегодня, 16:20 i-GMT+3",
        name: 'Colazione',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 100,
            type: 'bun',
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type : 'sauce'
          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 300,
            type: 'main'
          }
        ],
        price: 200,
        isDone: true
      },
      {
        _id: 2,
        time: "Вчера, 13:50 i-GMT+3",
        name: 'Pranzo',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 300,
            type: 'bun',
          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 100,
            type : 'sauce'
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type: 'main'

          },
        ],
        price: 300,
        isDone: false
      },
      {
        _id: 3,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 100,
            type: 'bun',
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type : 'sauce'

          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 300,
            type: 'main'
          }
        ],
        price: 400,
        isDone: true
      },
      {
        _id: 3,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 100,
            type: 'bun',
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type : 'sauce'

          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 300,
            type: 'main'
          }
        ],
        price: 400,
        isDone: true
      },
      {
        _id: 3,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 100,
            type: 'bun',
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type : 'sauce'

          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 300,
            type: 'main'
          }
        ],
        price: 400,
        isDone: true
      },
      {
        _id: 3,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 100,
            type: 'bun',
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type : 'sauce'

          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 300,
            type: 'main'
          }
        ],
        price: 400,
        isDone: true
      },
      {
        _id: 3,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 100,
            type: 'bun',
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type : 'sauce'

          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 300,
            type: 'main'
          }
        ],
        price: 400,
        isDone: true
      },
      {
        _id: 3,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 100,
            type: 'bun',
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type : 'sauce'

          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 300,
            type: 'main'
          }
        ],
        price: 400,
        isDone: true
      },
      {
        _id: 3,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 100,
            type: 'bun',
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type : 'sauce'

          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 300,
            type: 'main'
          }
        ],
        price: 400,
        isDone: true
      },
      {
        _id: 3,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingredients: [
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            price: 100,
            type: 'bun',
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            price: 200,
            type : 'sauce'

          },
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/core.png",
            price: 300,
            type: 'main'
          }
        ],
        price: 400,
        isDone: true
      },
    ],
    feedRequest: false,
    feedFailed: false,

    wsConnected: false,
    wsError: null,
    wsFeedData: [],

    wsAuthConnected: false,
    wsAuthError: null,
    wsFeedDataAuth: null,

    doneOrders: ['1','2','3','4','5'],
    cookingOrders: ['7','8','9','10'],
    totalOrders: 30,
    todayOrders: 10,
  };
  
  export const feedReducer = (state = initialState, action) => {
    switch (action.type) {
      case WS_CONNECTION_SUCCESS: {
        return {
          ...state,
          wsError: null,
          wsConnected: true
        };
      }
      case WS_CONNECTION_ERROR: {
        return {
          ...state,
          wsError: action.payload,
          wsConnected: false
        };
      }
      case WS_CONNECTION_CLOSED: {
        return {
          ...state,
          wsError: null,
          wsConnected: false
        };
      }
      case WS_GET_MESSAGE: {
        return {
          ...state,
          wsError: null,
          wsFeedData: action.payload
        };
      }
      case WS_CONNECTION_AUTH_SUCCESS: {
        return {
          ...state,
          wsAuthError: null,
          wsAuthConnected: true
        };
      }
      case WS_CONNECTION_AUTH_ERROR: {
        return {
          ...state,
          wsAuthError: action.payload,
          wsAuthConnected: false
        };
      }
      case WS_CONNECTION_AUTH_CLOSED: {
        return {
          ...state,
          wsAuthError: null,
          wsAuthConnected: false
        };
      }
      case WS_GET_MESSAGE_AUTH: {
        return {
          ...state,
          wsAuthError: null,
          wsFeedDataAuth: action.payload
        };
      }
      case ORDER_ID_REQUEST: {
        return {
          ...state,
          orderIdRequest: true
        };
      }
      case ORDER_ID_SUCCESS: {
        return { 
          ...state, 
          orderIdFailed: false,
          orderId: action.payload.orders[0], 
          orderIdRequest: false
        };
      }
      case ORDER_ID_FAILED: {
        return { 
          ...state, 
          orderIdFailed: true, 
          orderIdRequest: false 
        };
      }
      default: {
        return state;
      }
    }
  };
  