import React from 'react';
import './index.css';
import Text from '../Text';

const Total = ({ total }) => (
  <div class="total">
    <Text className="total-text" content="Total" />
    <Text className="total-value" content={total} />
  </div>
);

export default Total;
