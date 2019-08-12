import React from 'react';
import './index.css';

import products from '../../data/products.json';

import Card from '../Card';
import Score from '../Score';
import Text from '../Text';
import Interval from '../Interval';

const ProductList = () => (
  <div class="product-list">
    {products.map(product => {
      return (
        <Card key={product.id}>
          <Card.Header>
            <div class="image-container">
              <img alt={product.name} src={product.image} />
              <Interval time={product.time.split('min')[0]} />
            </div>
          </Card.Header>
          <Card.Body>
            <div class="restaurant-info">
              <Card.Title>{product.name}</Card.Title>
              <div class="restaurant-details">
                <Score score={product.qualification} />
                <Text
                  content={`$ ${product.price}`}
                  className="restaurant-detail"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      );
    })}
  </div>
);

export default ProductList;
