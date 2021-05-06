import React from 'react'
import AppHeader from '../app-header/app-header'
import MainPage from '../pages/main-page'
import Loader from '../utils/loader'


import appStyles from './app.module.css';
import RealService from "../../services/real-service"
import ErrorIndicator from '../utils/error-indicator';


function App() {

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
      <MainPage data={state.ingridientData}/>
    </main>
  );
}

export default App;
