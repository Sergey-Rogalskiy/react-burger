
import {
  ConstructorElement, 
} from '@ya.praktikum/react-developer-burger-ui-components'


import burgerConstructorStyles from './burger-constructor.module.css'

const FixedBun = (props) => {
  const data = props

  return (
    <>
      {
      (data.buns.name) 
      ?
      <div className={burgerConstructorStyles.flex}>
        <div className={`${burgerConstructorStyles.center} pb-2`}>
          <ConstructorElement
              text={data.buns.name}
              thumbnail={data.buns.image}
              price={data.buns.price}
              type={data.type}
              isLocked={true}
          />
        </div>
      </div>
      : 
      <div></div>
      }
  </>
  );
}

export default FixedBun;
