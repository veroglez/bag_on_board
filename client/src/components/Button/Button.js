import React from 'react';
import { bool, func, string } from 'prop-types';
// import mix from '../../common/mix';
import styles from './Button.module.scss';

const Button = ({ disabled, id, onClick, text, ...inherit }) => (
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
  icon: bool,
  onClick: func,
  text: string,
};

Button.defaultProps = {
  id: undefined,
  disabled: false,
  icon: undefined,
  onClick: undefined,
  text: undefined,
};

export default Button;
