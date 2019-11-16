import React from 'react';
import renderer from 'react-test-renderer';
import * as Context from 'common/context/contextHooks';
import Header from './Header';

const STATE = {
  l10n: { ADD: 'add' },
  cards: [
    { name: 'Vero', bags: 2 },
  ],
};

const HOC = () => (
  <Context.StateContext.Provider value={[STATE]}>
    <Header />
  </Context.StateContext.Provider>
);

describe('<Header>', () => {
  it('renders', () => {
    const tree = renderer.create(<HOC />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
