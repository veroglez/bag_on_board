import React from 'react';
import { Button } from 'components';
import { useStateValue } from 'common/context/contextHooks';
import style from './Counter.module.scss';

const managePassenger = (dispatch, { form }, action) => {
  const counterBags = action === '+' ? form.bags + 1 : form.bags - 1;
  dispatch({
    type: 'update',
    payload: {
      form: { ...form, bags: counterBags },
    },
  });
};

const Counter = () => {
  const [state, dispatch] = useStateValue();
  const { l10n, form } = state;

  return (
    <div className={style.container}>
      <Button
        id="buttonMinus"
        text={l10n.MINUS}
        onClick={() => form.bags >= 0 && managePassenger(dispatch, state, '-')}
        disabled={form.bags === 0}
      />
      <p className={style.text}>{form.bags}</p>
      <Button
        id="buttonPlus"
        text={l10n.PLUS}
        onClick={() => managePassenger(dispatch, state, '+')}
        disabled={form.bags >= 5}
      />
    </div>
  );
};

export default Counter;
