import React from 'react'
import AppHeader from '../app-header/app-header'
import MainPage from '../pages/main-page'


import appStyles from './app.module.css';

import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngridientDetails from '../ingridient-details/ingridient-details'

import { useSelector, useDispatch  } from 'react-redux'
import {
  getOrder
} from '../../services/actions/constructor'
import {
  setCurrentItemToView,
  
} from '../../services/actions/ingridients'


function App() {
  const [visible, setVisible] = React.useState(false)

  const dispatch = useDispatch()





  const chosenItems = useSelector(state => state.constructor.chosenItems)

  const openModal = (event, item) => {
      if (item !== undefined) {
        dispatch(setCurrentItemToView(item))
      } else {
        const dataIds = chosenItems.map(item => item._id)
        let data11 = {
          ingredients: dataIds
        }
        dispatch(getOrder(data11))
      }
      
      setVisible(true)
  }
  const closeModal = () => {
      dispatch(setCurrentItemToView(null))
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

  
  const currentItemToView = useSelector(state => state.ingridients.currentItemToView)


  const modal = (  
    <Modal header={!currentItemToView?"Ваш заказ": "Детали ингридента"} onClose={closeModal}> 
    {
      !currentItemToView 
      ?
      <OrderDetails/>
      :
      <IngridientDetails/>

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
      <MainPage 
        modal = {{visible, openModal, closeModal}}/>
      {visible && modal}
  
    </main>
  );
}

export default App;
