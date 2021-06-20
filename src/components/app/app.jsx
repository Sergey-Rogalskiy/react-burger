import React from 'react'
import AppHeader from '../app-header/app-header'

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

import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from 'react-router-dom';
import {
  Error404,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  FeedPage,
  FeedIdPage,
  ProfilePage,
  IngridientsIdPage,
  MainPage,
} from '../pages'
import { getToken, getUser } from '../../services/actions/registration'

import { ProtectedRoute, AuthProtectedRoute } from '../utils'

function App() {
  
  const history = useHistory()
  const location = useLocation()

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
        dispatch(getOrder(data11))
      }
      
      setVisible(true)
  }
  const closeModal = () => {
      dispatch(setCurrentItemToView(null))
      setVisible(false)
      history.push( {pathname: `/`})
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
      <IngridientDetails currentItemToView={currentItemToView}/>

    }
    </Modal>
  );

  React.useEffect(() => {
    if (localStorage.getItem('refreshToken'))
      dispatch(getToken(localStorage.getItem('refreshToken')))
  }, [])
  React.useEffect(() => {
    if (localStorage.getItem('refreshToken')) dispatch(getUser())
  }, [])


  // if (ingridientData.loading) {
  //   return (
  //     <Loader />
  //   )
  // }
  // if (ingridientData.error) {
  //   return (
  //     <>
  //       <ErrorIndicator />
  //     </>
  //   )
  // }
  const background = (history.action === "PUSH" || history.action === "REFRESH") && location?.state?.background

  
  return (
    <>
      <AppHeader/>
        <Switch location={background|| location}>
          <Route path="/" exact>
            <MainPage 
              modal = {{visible, openModal, closeModal}}/>
          </Route>
          <AuthProtectedRoute path="/login" exact>
            <LoginPage />
          </AuthProtectedRoute>
          <AuthProtectedRoute path="/register" exact>
            <RegisterPage />
          </AuthProtectedRoute>
          <AuthProtectedRoute path="/forgot-password" exact>
            <ForgotPasswordPage />
          </AuthProtectedRoute>
          <AuthProtectedRoute path="/reset-password" exact>
            <ResetPasswordPage />
          </AuthProtectedRoute>
          <Route path="/feed" exact>
            <FeedPage />
          </Route>
          <Route path="/feed/:id" exact>
            <FeedIdPage />
          </Route>
          <ProtectedRoute path="/profile/orders/:id" exact>
            <FeedIdPage />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" >
            <ProfilePage />
          </ProtectedRoute>
          <Route path="/ingredients/:id" exact>
            <IngridientsIdPage modal={modal}/>
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
        {background && (
          <>
            <Route path={'ingridients/:id'}>
              <IngridientsIdPage modal={false}/>
            </Route>
          </>
        )}
      {visible && modal}
  
    </>
  );
}

export default App;
