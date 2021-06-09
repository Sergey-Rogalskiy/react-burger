
  
  const initialState = {
    feedData: [
      {
        _id: 1,
        time: "Сегодня, 16:20 i-GMT+3",
        name: 'Colazione',
        ingridients: [
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
        _id: 3,
        time: "Вчера, 13:50 i-GMT+3",
        name: 'Pranzo',
        ingridients: [
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
        _id: 2,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingridients: [
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

    doneOrders: ['1','2','3','4','5'],
    cookingOrders: ['7','8','9','10'],
    totalOrders: 30,
    todayOrders: 10,
  };
  
  export const feedReducer = (state = initialState, action) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  };
  