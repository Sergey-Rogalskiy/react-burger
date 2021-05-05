import PropTypes from 'prop-types';

import styles from './ingridient-details.module.css'



const IngridientDetails = (props) => {
  return (
    <>
    <div className={styles.modal}>
      <img src={props.data.image} className={styles.image} alt="Ingridient"/>
      <p className={`${styles.name} text text_type_main-medium`}>{props.data.name}</p>
      <p className={`${styles.name} text text_type_main-default`}>{props.data.type.repeat(40)} </p>
      <div className={`${styles.grid}  text_color_inactive pt-5`}>
        <p className="text text_type_main-default">Калорий,ккал</p>
        <p className="text text_type_main-default">Булки,г</p>
        <p className="text text_type_main-default">Жиры,г</p>
        <p className="text text_type_main-default">Углеводы,г</p>
        <p className="text text_type_digits-default p-3">{props.data.calories}</p>
        <p className="text text_type_digits-default p-3">{props.data.proteins}</p>
        <p className="text text_type_digits-default p-3">{props.data.fat}</p>
        <p className="text text_type_digits-default p-3">{props.data.carbohydrates}</p>
      </div>
    </div>
      
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
  data: ingridientPropTypes
}; 
export default IngridientDetails;

