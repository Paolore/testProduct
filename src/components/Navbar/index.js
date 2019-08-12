import React from 'react';
import './index.css';
import Text from '../Text';
import Search from '../Search';

const Navbar = () => (
  <div class="navigation">
    <div class="navigation-menu">
      <i class="material-icons">menu</i>
      <Text className="logo-name" content="Chukwudi" />
    </div>
    <Search />
  </div>
);

export default Navbar;
