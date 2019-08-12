import React from 'react';
import OrderDetailItem from '../OrderDetailItem';

import Hamburger from '../../assets/images/pexels-photo-156114.jpeg';
import Waffles from '../../assets/images/pexels-photo-376464.jpeg';
import Taquitos from '../../assets/images/pexels-photo-461198.jpeg';

const OrderDetailList = () => (
  <div class="order-detail-list">
    <OrderDetailItem
      imageComponent={
        <img class="order-detail-item-image" alt="Hamburger" src={Hamburger} />
      }
      description="1 x Hamburger"
      unitPrice="$9.99"
    />
    <OrderDetailItem
      imageComponent={
        <img class="order-detail-item-image" alt="Waffles" src={Waffles} />
      }
      description="1 x Waffles"
      unitPrice="$19.99"
    />
    <OrderDetailItem
      imageComponent={
        <img class="order-detail-item-image" alt="Taquitos" src={Taquitos} />
      }
      description="1 x Taquitos"
      unitPrice="$15.99"
    />
    <OrderDetailItem
      imageComponent={
        <div class="order-detail-item-delivery">
          <i class="fa fa-clock-o" aria-hidden="true" />
        </div>
      }
      description="Delivery"
      unitPrice="$0.00"
    />
  </div>
);

export default OrderDetailList;
