import Ingridient from './ingridient' 

import burgerConstructorStyles from './burger-constructor.module.css'

const Ingridients = (props) => {
  const data = props
  

  return (
      <div 
        className={`${burgerConstructorStyles.overflow}  
        ${burgerConstructorStyles.test}`}
      >
        {
          data.items[0]
          ?
          data.items.map((item, index) => 
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