import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import burgerConstructorStyles from './burger-constructor.module.css'

function BurgerConstructor(props) {
  // let obj = props.data.filter(obj1 => obj1.type === "sauce");
  let obj = props.data;
  return (
    <div className={burgerConstructorStyles.flex}>
      <div className={`${burgerConstructorStyles.right} mr-5`}>
        <ConstructorElement
            text={props.data[0].name}
            thumbnail={props.data[0].image}
            price={100}/>
      </div>
      <div className={`${burgerConstructorStyles.overflow}`}>
        {
        obj.map((item) => (
          <div className={` ${burgerConstructorStyles.right}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              thumbnail={item.image}
              price={100}/>
          </div>
        ))
        }
      </div>
      <div className={`${burgerConstructorStyles.right} mr-5`}>
        <ConstructorElement
            text={props.data[0].name}
            thumbnail={props.data[0].image}
            price={100}/>
      </div>
      <div className={`${burgerConstructorStyles.flex} ${burgerConstructorStyles.right}`}>
        <div className={burgerConstructorStyles.right}>
          Total: 3600 <CurrencyIcon type="primary" />
        </div>
        <Button type="primary">
          Офрмить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
