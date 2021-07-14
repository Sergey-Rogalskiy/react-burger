import { FC } from 'react'
import Ingridient from './ingridient' 
import { TIngredient } from '../../types'

import burgerConstructorStyles from './burger-constructor.module.css'

type TProps = {
  items: TIngredient[]
}

const Ingridients: FC<TProps> = (props) => {
  const data = props
  

  return (
      <div 
        className={`${burgerConstructorStyles.overflow}  
        ${burgerConstructorStyles.test}`}
      >
        {
          data.items[0]
          ?
          data.items.map((item: TIngredient, index: number) => 
            <Ingridient 
              item={item} 
              index={index}
          />
          )
          :
          
          <div className={burgerConstructorStyles.template} >
            Сюда кидай ингридиенты
            </div>
        }
      </div>
  );
}

export default Ingridients;