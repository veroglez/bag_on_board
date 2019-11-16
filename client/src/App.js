import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useStateValue } from 'common/context/contextHooks';
import C from 'common/constants';
import fetch from 'common/fetch';
import { CardList, Button, Header } from './components';

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
  console.log(state)

  useEffect(() => { onFetch({ dispatch }); }, []);
 console.log(state)
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={({ match, location, history }) => (
              <CardList cards={state.cards} />
            )}
          />
          <Route
            path="/new"
            render={({ match, location }) => (
              <Button text="new" />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
