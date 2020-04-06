import React from 'react';
import './index.scss';


function required(value) {
  return value === ('' || null || undefined) ? 'Нужно заполнить' : ''
}

export default required;
