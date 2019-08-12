import React from 'react';
import './index.css';
const Interval = ({ time, measure = 'min' }) => (
  <div class="interval">
    <span class="time">{time}</span>
    <span class="measure">{measure}</span>
  </div>
);

export default Interval;
