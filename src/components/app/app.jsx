import React from 'react'
import AppHeader from '../app-header/app-header'
import MainPage from '../pages/main-page'


import appStyles from './app.module.css';

import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngridientDetails from '../ingridient-details/ingridient-details'

import { useSelector, useDispatch  } from 'react-redux'
import {getOrder} from "../../services/actions/app"



function App() {
  const [ingridient, setIngridient] = React.useState(null)
  const [visible, setVisible] = React.useState(false)

  const dispatch = useDispatch()


  const order = useSelector(state => state.app.order)



  const items = useSelector(state => state.app.items)

  const openModal = (item) => {
      item.type !== 'click' ? setIngridient(item) : setIngridient(null)
      const dataIds = items.map(item => item._id)
      let data11 = {
        ingredients: dataIds
      }
      dispatch(getOrder(data11))

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

  

  const modal = (
    <Modal header={!ingridient?"Ваш заказ": "Детали ингридента"} onClose={closeModal}> 
    {
      !ingridient && order
      ?
      <OrderDetails data={{order_id: order.orderNumber}}/>
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
