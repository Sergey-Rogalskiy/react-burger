import PropTypes from 'prop-types';

import modalStyles from './modal-overlay.module.css'


const ModalOverlay = (props: {onClose:()=>{}}) => {
  return (
    <div 
      className={modalStyles.modal_overlay} 
      onClick={props.onClose}>
    </div>
  );
} 

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}; 

export default ModalOverlay;
