import React, {} from 'react';
import { bool, func, string } from 'prop-types';
import { useStateValue } from 'common/context/contextHooks';

// import mix from '../../common/mix';
import { Button } from 'components';
import styles from './Header.module.scss';


const Header = ({ disabled, onClick, text, ...inherit }) => {
  const [state] = useStateValue();
  const { l10n } = state;

  return (
    <div className={styles.container}>
      <Button text={l10n.ADD} />
    </div>
  );
};

Header.propTypes = {
  disabled: bool,
  icon: bool,
  onClick: func,
  text: string,
};

Header.defaultProps = {
  disabled: false,
  icon: undefined,
  onClick: undefined,
  text: undefined,
};

export default Header;
