import React from 'react';
import './index.css';

import CardHeader from '../CardHeader';
import CardBody from '../CardBody';
import CardTitle from '../CardTitle';

const Card = ({ children }) => <div class="card">{children}</div>;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;

export default Card;
