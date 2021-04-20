import {
  ConstructorElement, 
  DragIcon, 
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

import burgerConstructorStyles from './burger-constructor.module.css'

function BurgerConstructor() {
  return (
    <>
      <ConstructorElement
      text="text"
      thumbnail="thumbnail"
      price={100}
    />
      <DragIcon type="primary" />
      <Button type="primary" />
    </>
  );
}

export default BurgerConstructor;
