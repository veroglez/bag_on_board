import React, { useEffect } from 'react';
import { useStateValue } from 'common/context/contextHooks';
import C from 'common/constants';
import fetch from 'common/fetch';
import { Header } from './components';

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
  const { l10n } = state;

  useEffect(() => { onFetch({ dispatch }); }, []);
 console.log(state)
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
