import PropTypes from 'prop-types';
import styles from './ingridient-details.module.css'

const IngridientDetails = (props) => {
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

const ingridientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});


IngridientDetails.propTypes = {
  data: ingridientPropTypes.isRequired
}; 
export default IngridientDetails;

