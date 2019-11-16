import React, { useEffect } from 'react';
import { useStateValue } from 'common/context/contextHooks';
import C from 'common/constants';
import fetch from 'common/fetch';

const { ENDPOINT } = C;

const onFetch = async ({ dispatch }) => {
  const service = 'cards';
  const cards = await fetch({ ENDPOINT, service }).catch(err => err);
  dispatch({
    type: 'update',
    payload: {
      cards,
    },
  });
};

const App = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => { onFetch({ dispatch }); }, []);
  return (
    <div className="App">
    </div>
  );
};

export default App;
