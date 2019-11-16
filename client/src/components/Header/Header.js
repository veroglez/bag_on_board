import React, {} from 'react';
import { useStateValue } from 'common/context/contextHooks';
import { Button } from 'components';
import styles from './Header.module.scss';

const onClick = () => { window.location = '/new'; };

const Header = () => {
  const [state] = useStateValue();
  const { l10n } = state;

  return (
    <div className={styles.container}>
      <Button text={l10n.ADD} onClick={() => onClick()} />
    </div>
  );
};

export default Header;
