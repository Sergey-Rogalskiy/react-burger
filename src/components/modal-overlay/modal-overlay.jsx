import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import modalStyles from './modal-overlay.module.css'

const modalRoot = document.getElementById("react-modals");

const ModalOverlay = (props) => {
  const { onClose } = props;
  return ReactDOM.createPortal(
    (
      <>
        <div className={modalStyles.modal}  onClick={onClose}>
        </div>
      </>
    ), 
    modalRoot
  );
} 


ModalOverlay.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  onClose: PropTypes.func,
}; 

export default ModalOverlay;
