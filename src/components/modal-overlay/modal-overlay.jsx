import React from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import ListByType from './list-by-type/list-by-type'

import PropTypes from 'prop-types';

import burgerIngridientsStyles from './burger-ingridients.module.css'



const ModalOverlay = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        
      </div>
      
    </>
  );
}

ModalOverlay.propTypes = {
  data: PropTypes.any
}; 

export default ModalOverlay;
