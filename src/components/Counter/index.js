import React from 'react';
import './index.css';
import Text from '../Text';

const Counter = () => (
  <div class="counter">
    <button class="button-icon">
      <i class="fa fa-minus" aria-hidden="true" />
    </button>
    <Text content="2" className="counter-text" />
    <button class="button-icon">
      <i class="fa fa-plus" aria-hidden="true" />
    </button>
  </div>
);

export default Counter;
