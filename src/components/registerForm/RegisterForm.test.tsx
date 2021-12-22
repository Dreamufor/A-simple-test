import { render } from '@testing-library/react';
import RegisterForm from '.';

describe('Given a RegisterForm component', () => {
  render(<RegisterForm />);
  describe('When rendered', () => {
    it('Then all form fields should be empty', () => {});
  });
  describe('When all form fields are filled with validate values', () => {
    it('Then it should submit successfully with logged data', () => {});
  });
});
