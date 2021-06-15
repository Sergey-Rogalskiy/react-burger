import React from 'react'
import AppHeader from '../app-header/app-header'


import s from './app.module.css';

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
import {
  Error404,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  FeedPage,
  FeedIdPage,
  ProfilePage,
  ProfileOrdersPage,
  ProfileOrdersIdPage,
  IngridientsIdPage,
  MainPage,
} from '../pages'

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
    <>
      <Router>
      <AppHeader/>
        <Switch>
          <Route path="/" exact>
            <MainPage 
              modal = {{visible, openModal, closeModal}}/>
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact>
            <ResetPasswordPage />
          </Route>
          <Route path="/feed" exact>
            <FeedPage />
          </Route>
          <Route path="/feed/:id" exact>
            <FeedIdPage />
          </Route>
          <Route path="/profile/orders/:id" exact>
            <FeedIdPage />
          </Route>
          <Route path="/profile" >
            <ProfilePage />
          </Route>
          <Route path="/ingredients/:id" exact>
            <IngridientsIdPage />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
      {visible && modal}
  
    </>
  );
}

export default App;
