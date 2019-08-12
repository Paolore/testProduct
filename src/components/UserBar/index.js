import React from 'react';
import './index.css';
import Login from '../Login/'

const UserBar = () => (
  <div class="user-bar">
    <Login  />
    <div class="user-notification">
      <span>3</span>
    </div>
  </div>
);

export default UserBar;
