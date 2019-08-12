import React from 'react';
import './index.css';

const Score = ({ score }) => (
  <span class="score">
    <i class="fa fa-star" />
    {score}
  </span>
);

export default Score;
