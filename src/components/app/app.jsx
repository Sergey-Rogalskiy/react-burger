import React from 'react'
import AppHeader from '../app-header/app-header'


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

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/main-page'

function App() {
  const [visible, setVisible] = React.useState(false)

  const dispatch = useDispatch()





  const chosenBuns = useSelector(state => state.burgerConstructor.chosenBuns)
  const chosenItems = useSelector(state => state.burgerConstructor.chosenItems)

  const openModal = (event, item) => {
      if (item !== undefined) {
        dispatch(setCurrentItemToView(item))
      } else {
        const dataIds = chosenItems.map(item => item._id)
        dataIds.push(chosenBuns._id)
        dataIds.splice(1, 0, chosenBuns._id)
        let data11 = {
          ingredients: dataIds
        }
        console.log()
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
      <Router>
        <Switch>
          <Route path="/">
            <MainPage 
              modal = {{visible, openModal, closeModal}}/>
          </Route>
        </Switch>
      </Router>
      {visible && modal}
  
    </main>
  );
}

export default App;
