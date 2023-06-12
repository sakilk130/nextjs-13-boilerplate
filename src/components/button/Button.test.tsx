import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

test('renders button with correct label', () => {
  const label = 'Click me';
  render(<Button>{label}</Button>);
  const buttonElement = screen.getByText(label);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick function when clicked', () => {
  const onClickMock = jest.fn();
  render(<Button onClick={onClickMock}>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});
