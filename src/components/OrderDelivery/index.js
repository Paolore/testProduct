import React from 'react';
import './index.css';

import Text from '../Text';

const OrderDelivery = () => (
  <div class="order-delivery">
    <div class="order-delivery-container">
      <Text className="order-delivery-text" content="625 St Marks Ave" />
      <a href="/" class="order-delivery-link">
        Edit
      </a>
    </div>
    <div class="order-delivery-container">
      <div class="order-delivery-icon">
        <i class="fa fa-clock-o" aria-hidden="true" />
      </div>
      <Text className="order-delivery-time" content="35 min" />
      <a href="/" class="order-delivery-link">
        Choose time
      </a>
    </div>
  </div>
);

export default OrderDelivery;
