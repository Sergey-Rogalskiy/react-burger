import React from 'react'
import AppHeader from '../app-header/app-header'
import MainPage from '../pages/main-page'
import Loader from '../utils/loader'


import appStyles from './app.module.css';
// import RealService from "../../services/real-service"
import ErrorIndicator from '../utils/error-indicator';

import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngridientDetails from '../ingridient-details/ingridient-details'

import {
  IngridientDataContext, 
  CurrentIngridientsContext
} from '../../context/app-context'

import { useSelector, useDispatch  } from 'react-redux'
import {getOrder} from "../../services/actions/app"

function App() {
  const [ingridient, setIngridient] = React.useState(null)
  const [visible, setVisible] = React.useState(false)

  const dispatch = useDispatch()

  const constructorInitialState = { 
    items: null, 
    buns: null,
    totalPrice: null,
    orderNumber: null,
  };

  const [constructorState , constructorDispatcher] = 
  React.useReducer(reducer, constructorInitialState);

  function reducer(state, action) {
    switch (action.type) {
      case "set":
        const items = [
          action.payload[Math.floor(Math.random() * 12)+2],
          action.payload[Math.floor(Math.random() * 12)+2],
          action.payload[Math.floor(Math.random() * 12)+2],
        ]
        
        let data_buns = action.payload.filter(obj1 => obj1.type === "bun");
        const buns = data_buns[Math.floor(Math.random() * 2)]
        let totalPrice = buns.price * 2;
        items.map(item => (totalPrice += item.price));
        return {
          ...state, 
          items,
          buns,
          totalPrice};
        case "setOrderNumber":
          return { 
            ...state,
            orderNumber: action.payload,
          };
        case "reset":
          return { constructorInitialState };
      default:
        throw new Error(`Wrong type of action: ${action.type}`);
    }
  }

  //!!!const Service = new RealService()

  const data = useSelector(state => state.app.items)
  const openModal = (item) => {
      item.type !== 'click' ? setIngridient(item) : setIngridient(null)
      const dataIds = data.map(item => item._id)
      let data11 = {
        ingredients: dataIds
      }
      dispatch(getOrder())
      // //!!! Service.postOrder('token', data11)
      // .then(data => {
      //   if (data.success) {
      //     constructorDispatcher({type: 'setOrderNumber', payload: data.order.number}); 
      //   }
      // })
      // .catch(error => 
      //   console.log(data)
      // )

      setVisible(true)
  }
  const closeModal = () => {
      setVisible(false)
  }
  React.useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    }
  });
  const handleKeyUp = (e) => {
    const keys = {
      27: () => {
        e.preventDefault();
        closeModal();
        window.removeEventListener('keyup', handleKeyUp, false);
      },
    };
    if (keys[e.keyCode]) { keys[e.keyCode](); }
  }

  
  // const [ingridientData, setIngridientData] = React.useState({ 
  //     ingridientData: null,
  //     loading: true,
  //     error: null,
  // })

  // React.useEffect(() => {
  //   setIngridientData({...ingridientData, loading: true});

  //       // ///!!!Service.getIngridients('token')
  //       //   .then(data => {
  //       //     if (data.success) {
  //       //       setIngridientData({...ingridientData, loading: false, ingridientData: data.data});
 
  //       //       constructorDispatcher({type: 'set', payload: data.data});
  //       //     }
  //       //   })
  //       //   .catch(error => 
  //       //     setIngridientData({...ingridientData, loading: false, error})
  //       //   )
  // }, [])

  const modal = (
    <Modal header={!ingridient?"Ваш заказ": "Детали ингридента"} onClose={closeModal}> 
    {
      !ingridient
      ?
      <OrderDetails data={{order_id: constructorState.orderNumber}}/>
      :
      <IngridientDetails data={ingridient}/>
    }
    </Modal>
  );


  // if (ingridientData.loading) {
  //   return (
  //     <Loader />
  //   )
  // }
  // if (ingridientData.error) {
  //   return (
  //     <>
  //       {console.log(ingridientData.error)}
  //       <ErrorIndicator />
  //     </>
  //   )
  // }
  return (
    <main className={appStyles.app}>
      <AppHeader/>
      {/* <IngridientDataContext.Provider value={ingridientData.ingridientData}>
        <CurrentIngridientsContext.Provider value={{constructorState}}> */}
          <MainPage 
            modal = {{visible, openModal, closeModal}}/>
        {/* </CurrentIngridientsContext.Provider>
      </IngridientDataContext.Provider> */}
      
      {visible && modal}
  
    </main>
  );
}

export default App;
