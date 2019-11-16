import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

const text = 'Lorem ipsum';
const func = () => 'test';

describe('<Button>', () => {
  it('renders', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {text}', () => {
    const tree = renderer.create(<Button text={text} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Button disabled text={text} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onClick}', () => {
    const tree = renderer.create(<Button onClick={func} text={text} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
