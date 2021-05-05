import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

import ModalOverlay from '../modal-overlay/modal-overlay'

import modalStyles from './modal.module.css'

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
  const { children, header, onClose } = props;
  return ReactDOM.createPortal(
    (
      <>
        <div className={modalStyles.modal}>
          <h1 className={modalStyles.header}>
            {header}
            <CloseIcon type="primary" onClick={onClose}/>
          </h1>
              {children}
              <ModalOverlay onClose={onClose}/>
        </div>
      </>
    ), 
    modalRoot
  );
} 


Modal.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  onClose: PropTypes.func,
}; 

export default Modal;
