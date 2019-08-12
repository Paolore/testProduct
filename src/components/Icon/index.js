import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ source, text }) => <img class="icon" alt={text} src={source} />;

Icon.propTypes = {
  source: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Icon;
