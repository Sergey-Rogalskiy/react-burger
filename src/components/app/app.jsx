import AppHeader from '../app-header/app-header'
import MainPage from '../pages/main-page'

import data from '../utils/data'

import appStyles from './app.module.css';



function App() {
  return (
    <main className={appStyles.app}>
      <AppHeader/>
      <MainPage data={data}/>
    </main>
  );
}

export default App;
