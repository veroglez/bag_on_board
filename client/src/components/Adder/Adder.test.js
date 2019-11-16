
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Context from 'common/context/contextHooks';
import Adder from './Adder';

Enzyme.configure({ adapter: new Adapter() });

const STATE = {
  l10n: { ADD: 'add' },
  cards: [
    { name: 'Vero', bags: 1 },
  ],
  form: { name: 'Veronica', bags: 2 },
};

const HOC = () => (
  <Context.StateContext.Provider value={[STATE]}>
    <Adder />
  </Context.StateContext.Provider>
);

describe('<Adder>', () => {
  it('render', () => {
    const tree = renderer.create(<HOC />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
