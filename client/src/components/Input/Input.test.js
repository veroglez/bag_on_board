
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Context from 'common/context/contextHooks';
import Input from './Input';

Enzyme.configure({ adapter: new Adapter() });

const STATE = {
  l10n: { PLUS: '+', MINUS: '-' },
  form: { name: 'Vero' },
};

const HOC = () => (
  <Context.StateContext.Provider value={[STATE]}>
    <Input />
  </Context.StateContext.Provider>
);

describe('<Input>', () => {
  it('render', () => {
    const tree = renderer.create(<HOC />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('dispath is called with', async () => {
    const dispatch = jest.fn();
    const stateUpdated = {
      type: 'update',
      payload: { form: { name: 'Vero' } },
    };
    const event = { target: { value: 'Vero' } };

    jest
      .spyOn(Context, 'useStateValue')
      .mockImplementation(() => [STATE, dispatch]);
    const wrapper = mount(<HOC />);
    wrapper.find('input').props().onChange(event);

    expect(dispatch).toHaveBeenCalledWith(stateUpdated);
  });
});
