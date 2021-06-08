
  
  const initialState = {
    feedData: [
      {
        _id: 1,
        time: "Сегодня, 16:20 i-GMT+3",
        name: 'Colazione',
        ingridients: [
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/meat-02.png"
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png"

          },
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/core.png"
          }
        ],
        price: 200,
      },
      {
        _id: 3,
        time: "Вчера, 13:50 i-GMT+3",
        name: 'Pranzo',
        ingridients: [
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/meat-02.png"
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png"

          },
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/core.png"
          }
        ],
        price: 300,
      },
      {
        _id: 2,
        time: "2 дня назад, 21:53 i-GMT+3",
        name: 'Cena',
        ingridients: [
          {
            name: 'la zucchero',
            image: "https://code.s3.yandex.net/react/code/meat-02.png"
          },
          {
            name: 'la mele',
            image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png"

          },
          {
            name: 'il pane',
            image: "https://code.s3.yandex.net/react/code/core.png"
          }
        ],
        price: 400,
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
  