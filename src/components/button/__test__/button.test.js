import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without crashing', () => {
  const wrapper = document.createElement('div');
  ReactDOM.render(<Button></Button>, wrapper);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="click me"></Button>);
  // data-testid
  expect(getByTestId('button')).toHaveTextContent('click me');
});

it('matches snapshot 1', () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot()
});

it('matches snapshot 2', () => {
  const tree = renderer.create(<Button label="click me"></Button>).toJSON();
  expect(tree).toMatchSnapshot()
});
