import styles from './ingridient-details.module.css'
import {TIngredient} from '../../types'

type TProps = {
  currentItemToView: {item?: TIngredient}
}

const IngridientDetails = (props: TProps) => {
  const currentItemToView = props.currentItemToView

  return (
    <>
      {
        currentItemToView?.item
        ?
        <>
        <div className={styles.modal}>
          <img src={currentItemToView.item.image} className={styles.image} alt="Ingridient"/>
          <p className={`${styles.name} text text_type_main-medium`}>{currentItemToView.item.name}</p>
          <p className={`${styles.name} text text_type_main-default`}>Данные отсутствуют в API </p>
          <div className={`${styles.grid}  text_color_inactive pt-5`}>
            <p className="text text_type_main-default">Калорий,ккал</p>
            <p className="text text_type_main-default">Булки,г</p>
            <p className="text text_type_main-default">Жиры,г</p>
            <p className="text text_type_main-default">Углеводы,г</p>
            <p className="text text_type_digits-default p-3">{currentItemToView.item.calories}</p>
            <p className="text text_type_digits-default p-3">{currentItemToView.item.proteins}</p>
            <p className="text text_type_digits-default p-3">{currentItemToView.item.fat}</p>
            <p className="text text_type_digits-default p-3">{currentItemToView.item.carbohydrates}</p>
          </div>
        </div>
        </>
        :
        <div>Дай подумать о мармышках</div>
      }
    </>
  );
}


export default IngridientDetails;

