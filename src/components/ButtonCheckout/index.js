import React from 'react';
import './index.css';
import Text from '../Text';

const ButtonCheckout = ({ contentText }) => (
  <button class="button-checkout">
    <Text className="button-checkout-text" content={contentText} />
    <i class="fa fa-long-arrow-right button-icon" aria-hidden="true" />
  </button>
);

export default ButtonCheckout;
