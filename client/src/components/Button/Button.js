import React from 'react';
import { bool, func, string } from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ disabled, id, onClick, text }) => (
  <button
    id={id}
    type="submit"
    className={styles.button}
    onClick={onClick}
    disabled={disabled}
  >
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  id: string,
  disabled: bool,
  onClick: func,
  text: string,
};

Button.defaultProps = {
  id: undefined,
  disabled: false,
  onClick: undefined,
  text: undefined,
};

export default Button;
