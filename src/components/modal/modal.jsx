import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import modalStyles from './modal.module.css'

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
  const { children, header, onClose } = props;
  return ReactDOM.createPortal(
    (
      <>
        <div className={modalStyles.modal}>
          <h1 onClick={onClose}>{header}</h1>
              {children}
          </div>
        <div onClick={onClose} />
      </>
    ), 
    modalRoot
  );
} 


const ingridientPropTypes = PropTypes.shape({
  _id: PropTypes.number.isRequired,
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

Modal.propTypes = {
  data: PropTypes.arrayOf(ingridientPropTypes.isRequired)
}; 

export default Modal;
