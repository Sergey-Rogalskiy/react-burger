import data from '../utils/data'
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  Counter, 
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import burgerConstructorStyles from './burger-constructor.module.css'

function BurgerConstructor() {
  let obj = data.filter(obj1 => obj1.type === "sauce");
  return (
    <>
    {
    obj.map((item) => (
      <div className={burgerConstructorStyles.container}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          thumbnail={item.image}
          price={100}/>
      </div>
    ))
    }
    <div className={burgerConstructorStyles.flex}>
      <div>
        Total: 3600 <CurrencyIcon type="primary" />
      </div>
      <Button type="primary">
        Офрмить заказ
      </Button>
    </div>
    </>
  );
}

export default BurgerConstructor;
