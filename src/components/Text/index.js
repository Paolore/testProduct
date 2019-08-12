import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ content, className }) => <p class={className}>{content}</p>;

Text.defaultProps = {
  className: ''
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Text;
