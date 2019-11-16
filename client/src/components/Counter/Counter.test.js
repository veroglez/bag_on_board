
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Context from 'common/context/contextHooks';
import Counter from './Counter';

Enzyme.configure({ adapter: new Adapter() });

const STATE = {
  l10n: { PLUS: '+', MINUS: '-' },
  form: { bags: 1 },
};

const HOC = () => (
  <Context.StateContext.Provider value={[STATE]}>
    <Counter />
  </Context.StateContext.Provider>
);

describe('<Counter>', () => {
  it('render', () => {
    const tree = renderer.create(<HOC />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('dispath is called with', async () => {
    const dispatch = jest.fn();
    const stateUpdated = {
      type: 'update',
      payload: { form: { bags: 2 } },
    };

    jest
      .spyOn(Context, 'useStateValue')
      .mockImplementation(() => [STATE, dispatch]);
    const wrapper = mount(<HOC />);
    wrapper.find('#buttonPlus').at(0).props().onClick();

    expect(dispatch).toHaveBeenCalledWith(stateUpdated);
  });
});
