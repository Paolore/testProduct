import React from 'react';
import './index.css';
import ArrowRight from '../../assets/icons/118740.svg';
import categories from '../../data/categories.json';

import Category from '../Category';

const CategoryList = () => (
  <div class="category-list-container">
    <div class="category-list">
      {categories.map(category => {
        const isActive = category.name === 'All';
        return <Category {...category} isActive={isActive} />;
      })}
    </div>
    <div class="category-next">
      <img alt="arrow-right" src={ArrowRight} />
    </div>
  </div>
);

export default CategoryList;
