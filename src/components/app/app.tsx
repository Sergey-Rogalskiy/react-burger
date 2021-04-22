import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header'
import MainPage from '../pages/main-page'


function App() {
  return (
    <main className={appStyles.app}>
      <AppHeader/>
      <MainPage />
    </main>
  );
}

export default App;
