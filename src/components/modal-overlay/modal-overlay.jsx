import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import modalStyles from './modal-overlay.module.css'


const ModalOverlay = (props) => {
  return (
    <div 
      className={modalStyles.modal_overlay} 
      onClick={props.onClose}>
    </div>
  );
} 

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
}; 

export default ModalOverlay;
