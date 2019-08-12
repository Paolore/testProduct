import React from 'react';

import './index.css';

//Components
import Text from '../../components/Text';
import OrderDelivery from '../../components/OrderDelivery';
import OrderDetailList from '../../components/OrderDetailList';
import Total from '../../components/Total';
import Counter from '../../components/Counter';
import ButtonCheckout from '../../components/ButtonCheckout';

const OrderPage = () => (
  <div class="order-page">
    <Text className="order-page-detail-title" content="My 😎 Order" />
    <div class="order-page-details">
      <OrderDelivery />
      <OrderDetailList />
    </div>
    <Total total="$45.97" />
    <div class="order-page-checkout">
      <div class="order-page-counter">
        <Text className="order-page-persons" content="Persons" />
        <Counter />
      </div>
      <ButtonCheckout contentText="Checkout" />
    </div>
  </div>
);

export default OrderPage;
