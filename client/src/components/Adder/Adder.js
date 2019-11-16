import React from 'react';
import { useStateValue } from 'common/context/contextHooks';
import { Counter, Button, Input } from '..';
import style from './Adder.module.scss';

const onSubmit = (event, { cards, form }, dispatch) => {
  event.preventDefault();
  dispatch({
    type: 'update',
    payload: {
      cards: [...cards, { ...form }],
    },
  });
};

const Adder = () => {
  const [state, dispatch] = useStateValue();
  const { l10n } = state;

  return (
    <form className={style.container}>
      <Counter />
      <Input />
      <Button id="ButtonForm" text={l10n.ADD} onClick={event => onSubmit(event, state, dispatch)} />
    </form>
  );
};

export default Adder;
