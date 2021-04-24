import {
  ConstructorElement, 
  DragIcon, 
  Button,
  Counter, 
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import burgerConstructorStyles from './burger-constructor.module.css'

function BurgerConstructor(props) {
  let obj = props.data.filter(obj1 => obj1.type === "sauce");
  return (
    <>
      <div className={burgerConstructorStyles.container}>
        <ConstructorElement
            text={props.data[0].name}
            thumbnail={props.data[0].image}
            price={100}/>
      </div>
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
      <div className={burgerConstructorStyles.container}>
        <ConstructorElement
            text={props.data[0].name}
            thumbnail={props.data[0].image}
            price={100}/>
      </div>
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
