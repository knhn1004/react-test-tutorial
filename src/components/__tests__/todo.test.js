import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../todo';
import '@testing-library/jest-dom'; // enable 'toBeInTheDocument'
import renderer from 'react-test-renderer'; // for snapshot

afterEach(cleanup);

it('should render non-completed todo', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false };
  render(<Todo {...todo} />);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash dishes');
  expect(todoElement).not.toContainHTML('<strike>');
});

it('should render completed todo', () => {
  const todo = { id: 2, title: 'wash car', completed: true };
  render(<Todo {...todo} />);
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash car');
  expect(todoElement).toContainHTML('<strike>');
});

it('matches snapshot', () => {
  const todo = { id: 2, title: 'wash car', completed: true };
  const tree = renderer.create(<Todo {...todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
