import React from 'react'
import AppHeader from '../app-header/app-header'

import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngridientDetails from '../ingridient-details/ingridient-details'
import OrderDetailsModal from  '../order-details-modal/order-details-modal'

import { useSelector, useDispatch  } from 'react-redux'
import {
  getOrder
} from '../../services/actions/constructor'
import {
  setCurrentItemToView,
} from '../../services/actions/ingridients'

import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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

import {
  ORDER_RESET,
} from '../../services/actions/constructor';

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
        const data11 = {
          ingredients: dataIds
        }
        dispatch(getOrder(data11))
      }
      
      setVisible(true)
  }
  const closeModal = () => {
      dispatch(setCurrentItemToView(null))
      setVisible(false)
      dispatch({type: ORDER_RESET});
      if (location?.state?.background?.pathname) {
        history.push(`${location.state.background.pathname}`)
      }
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
      },
    };
    if (keys[e.keyCode]) { keys[e.keyCode](); }
  }

  
  const currentItemToView = useSelector(state => state.ingridients.currentItemToView)
 
  const modal = (
    <>
      
      <Modal header={ 
          currentItemToView?.type === 'order' ? (
            'Детали заказа'
          ) : (
            currentItemToView?.type === 'ingridient' ? (
              'Детали ингридиента'
            ) : (
              'Детали заказа'
            )
          )
        } 
        onClose={closeModal}> 
        {
          !currentItemToView?.item
          ?
          <OrderDetails/>
          :
          currentItemToView?.type === 'ingridient'
          ?
          <IngridientDetails currentItemToView={currentItemToView}/>
          :
          <OrderDetailsModal currentItemToView={currentItemToView}/>
        }
      </Modal>
    </>
  );

  React.useEffect(() => {
    if (localStorage.getItem('refreshToken'))
      dispatch(getToken(localStorage.getItem('refreshToken')))
  }, [dispatch])
  React.useEffect(() => {
    if (localStorage.getItem('refreshToken')) dispatch(getUser())
  }, [dispatch])

  const background = (history.action === "PUSH" || history.action === "REFRESH") && location?.state?.background
  return (
    <>
      <AppHeader/>
        <Switch location={background|| location}>
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
            <FeedPage 
              modal = {{openModal}}/>
          </Route>
          <Route path="/feed/:id" >
            <FeedIdPage  />
          </Route>
          <ProtectedRoute path="/profile/orders/:id" exact>
            <FeedIdPage 
              modal = {{openModal}}/>
          </ProtectedRoute>
          <ProtectedRoute path="/profile" >
            <ProfilePage 
              modal = {{openModal}}/>
          </ProtectedRoute>
          <Route path="/ingredients/:id" exact>
            <IngridientsIdPage />
          </Route>
          <Route path="/" exact>
            <MainPage 
              modal = {{openModal}}/>
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
        {background && (
            <Route path={'ingridients/:id'}>
              <IngridientsIdPage modal={false}/>
            </Route>
        )}
        {background && (
            <Route path='feed/:id' exact>
              <FeedIdPage modal={false}/>
            </Route>
        )}
        {background && (
            <Route path='profile/orders/:id' exact>
              <FeedIdPage modal={false}/>
            </Route>
        )}
      {visible && modal}
  
    </>
  );
}

export default App;
