
import {
  ConstructorElement, 
} from '@ya.praktikum/react-developer-burger-ui-components'
import { TIngredient } from '../../types'

import burgerConstructorStyles from './burger-constructor.module.css'

type TProps = {
  buns: TIngredient;
  type: "top" | 'bottom' | undefined
}

const FixedBun = (props: TProps) => {
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
      
      <div className={burgerConstructorStyles.template} >
        Кидай сюда булочки
        </div>
      }
  </>
  );
}

export default FixedBun;
