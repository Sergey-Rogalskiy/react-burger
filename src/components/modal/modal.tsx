import { FC } from 'react';
import ReactDOM from 'react-dom';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

import ModalOverlay from '../modal-overlay/modal-overlay'

import modalStyles from './modal.module.css'

const modalRoot = document.getElementById("react-modals");

type TProps = {
  header: string;
  children: any;
  onClose: any;
}

const Modal:FC<TProps> = (props) => {
  
  const { children, header, onClose } = props;
  return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay onClose={onClose}/>
        <div className={modalStyles.modal} id="modal">
          <h1 className={modalStyles.header}>
            {header}
            <CloseIcon type="primary" onClick={onClose}/>
          </h1>
              {children}
        </div>
      </>
    ), 
    // @ts-ignore: Unreachable code error
    modalRoot
  );
} 


export default Modal;
