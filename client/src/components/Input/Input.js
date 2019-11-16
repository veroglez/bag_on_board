import React from 'react';
import { useStateValue } from 'common/context/contextHooks';

const onChange = (event, dispatch, { form }) => {
  dispatch({
    type: 'update',
    payload: {
      form: { ...form, name: event.target.value },
    },
  });
};

const Counter = () => {
  const [state, dispatch] = useStateValue();
  const { l10n } = state;

  return (
    <input
      type="text"
      name="name"
      value={state.value}
      onChange={event => onChange(event, dispatch, state)}
    />
  );
};

export default Counter;