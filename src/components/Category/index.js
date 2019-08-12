import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Text from '../Text';
import Icon from '../Icon';

const Category = ({ icon, name, id, isActive }) => (
  <div class={`category ${isActive ? 'active' : ''}`} key={id}>
    <div class={`category-icon ${!isActive ? 'category-icon-border' : ''}`}>
      <Icon text={name} source={icon} />
    </div>
    <Text className="category-text" content={name} />
  </div>
);

Category.defaultProps = {
  isActive: false
};

Category.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default Category;
