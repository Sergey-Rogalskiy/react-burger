import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngridients from '../burger-ingridients/burger-ingridients'

import mainPageStyles from './main-page.module.css'

function MainPage() {
  return (
    <>
  <div className={mainPageStyles.row}>
    <div className={mainPageStyles.column}>
      Соберите бургер
    </div>
  </div>
      <div className={mainPageStyles.row}>
        <div className={mainPageStyles.column}>
          <BurgerIngridients/>
        </div>
        <div className={mainPageStyles.column}>
          <BurgerConstructor/>
        </div>
      </div>
    </>
  );
}

export default MainPage;
