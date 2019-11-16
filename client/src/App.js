import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useStateValue } from 'common/context/contextHooks';
import C from 'common/constants';
import fetch from 'common/fetch';
import { Adder, CardList, Header } from './components';

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
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <CardList cards={state.cards} />
            )}
          />
          <Route
            path="/new"
            render={() => (
              <Adder />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
