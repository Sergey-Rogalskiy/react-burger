import Ingridient from './ingridient' 
import { TIngredient } from '../../types'

import burgerConstructorStyles from './burger-constructor.module.css'

type TProps = {
  items: TIngredient[]
}

const Ingridients = (props: TProps) => {
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
            key={index}
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