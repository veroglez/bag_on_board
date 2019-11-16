import React from 'react';
import { useStateValue } from 'common/context/contextHooks';
import { Counter, Button, Input } from '..';
import style from './Adder.module.scss';

const onSubmit = () => {
  console.log('onClick');
};

const Adder = () => {
  const [state] = useStateValue();
  const { l10n } = state;

  return (
    <form className={style.container}>
      <Counter />
      <Input />
      <Button text={l10n.ADD} onClick={() => onSubmit()} />
    </form>
  );
};

export default Adder;
