import React from 'react';
// import { shape } from 'prop-types';
import { useStateValue } from 'common/context/contextHooks';
import { Counter, Button } from '..';


import style from './Adder.module.scss';

const Adder = () => {
  const [state] = useStateValue();
  const { l10n } = state;


  return (
    <div className={style.container}>
      <Counter />
      <div className={style.input}>
      </div>
      <Button text={l10n.ADD} />
    </div>
  );
};


export default Adder;