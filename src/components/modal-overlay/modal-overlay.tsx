import { FC } from 'react';
import PropTypes from 'prop-types';

import modalStyles from './modal-overlay.module.css'

type TProps = {
  onClose:()=>{}
}
const ModalOverlay: FC<TProps> = (props) => {
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
