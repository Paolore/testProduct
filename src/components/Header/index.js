import React from 'react';
import './index.css';

import HeaderImage from '../../assets/images/headerimage.png';
import PartyPopper from '../../assets/images/d.png';
import Text from '../Text';

const Header = () => (
  <div class="header">
    <img class="header-image" alt="discount 30%" src={HeaderImage} />
    <Text
      className="header-title"
      content={
        <div>
          $0 delivery for 30 days!
          <img alt="Party pooper" src={PartyPopper} />
        </div>
      }
    />
    <Text
      className="header-subtitle"
      content="$0 delivery fee for orders over $10 for 30 days"
    />
    <div class="learn-more">
      <a href="/">
        <span>Learn more</span>
      </a>
      <i class="material-icons">arrow_forward</i>
    </div>
  </div>
);

export default Header;
