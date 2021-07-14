import { FC } from 'react';

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

export default ModalOverlay;
