import React from 'react';
import './index.css';

import Text from '../Text';

const OrderDetailItem = ({ imageComponent, description, unitPrice }) => (
  <div class="order-detail-item">
    <div class="order-detail-item-image-container">{imageComponent}</div>
    <Text className="order-detail-item-description" content={description} />
    <Text className="order-detail-item-unitPrice" content={unitPrice} />
  </div>
);

export default OrderDetailItem;
