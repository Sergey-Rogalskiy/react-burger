import React from 'react'
import AppHeader from '../app-header/app-header'
import MainPage from '../pages/main-page'
import Loader from '../utils/loader'


import appStyles from './app.module.css';
import RealService from "../../services/real-service"
import ErrorIndicator from '../utils/error-indicator';

import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngridientDetails from '../ingridient-details/ingridient-details'



function App() {
  const [ingridient, setIngridient] = React.useState(null)

  const [visible, setVisible] = React.useState(false)

  const openModal = (item) => {
      item.type !== 'click' ? setIngridient(item) : setIngridient(null)
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

  const Service = new RealService()
  
  const [state, setState] = React.useState({ 
      ingridientData: null,
      loading: true,
      error: null,
  })

  React.useEffect(() => {
        setState({...state, loading: true});

        Service.getIngridients('token')
          .then(data => {
            if (data.success) {
              setState({...state, loading: false, ingridientData: data.data});
            }
          })
          .catch(error => 
            setState({...state, loading: false, error})
          )
  }, [])

  const modal = (
    <Modal header={!ingridient?"&nbsp;": "Детали ингридента"} onClose={closeModal}> 
    {
      !ingridient
      ?
      <OrderDetails data={{order_id: "030654"}}/>
      :
      <IngridientDetails data={ingridient}/>
    }
    </Modal>
  );

  const modal2 = (
    <Modal header="Детали ингридента" onClose={closeModal}> 
    </Modal>
  );
  

  if (state.loading) {
    return (
      <Loader />
    )
  }
  if (state.error) {
    return (
      <ErrorIndicator />
    )
  }
  return (
    <main className={appStyles.app}>
      <AppHeader/>
      <MainPage 
      data={state.ingridientData}
      modal = {{visible, openModal, closeModal}}/>
      
  {visible && modal}
  
    </main>
  );
}

export default App;
