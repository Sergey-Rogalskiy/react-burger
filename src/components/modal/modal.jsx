import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

import modalStyles from './modal.module.css'

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
  const { children, header, onClose } = props;
  return ReactDOM.createPortal(
    (
      <>
        <div className={modalStyles.modal}>
          <h1 onClick={onClose}>
            {header}
            <CloseIcon type="primary" />
          </h1>
              {children}
        </div>
      </>
    ), 
    modalRoot
  );
} 


Modal.propTypes = {
  data: PropTypes.any
}; 

export default Modal;
