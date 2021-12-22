import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RegisterForm from '.';

describe('Given a RegisterForm component', () => {
  describe('When rendered', () => {
    it('Then all form fields should be empty', () => {
      render(<RegisterForm />);

      const creditCardNumber = getTextFields('Credit card number');
      const cvc = getTextFields('CVC');
      const expiry = getTextFields('expiry');

      expect(creditCardNumber).toHaveValue('');
      expect(cvc).toHaveValue('');
      expect(expiry).toHaveValue('');
    });
  });
  describe('When all form fields are filled with validate values', () => {
    it('Then it should submit successfully with logged data', async () => {
      render(<RegisterForm />);

      const consoleMock = jest.spyOn(global.console, 'log');

      const creditCardNumber = getTextFields('Credit card number');
      const cvc = getTextFields('CVC');
      const expiry = getTextFields('expiry');

      const submit = screen.getByRole('button', {
        name: /submit/i,
      }) as HTMLButtonElement;

      fireEvent.change(creditCardNumber, {
        target: { value: '1234567890123456' },
      });

      fireEvent.change(cvc, { target: { value: '123' } });
      fireEvent.change(expiry, { target: { value: '12/23' } });
      fireEvent.submit(submit);
      await waitFor(() => {
        expect(consoleMock).toHaveBeenCalledWith({
          cardNumber: '1234567890123456',
          cvc: '123',
          expiry: '12/23',
        });
      });
    });
  });
});

const getTextFields = (name: string) => {
  return screen.getByRole('textbox', {
    name,
  }) as HTMLInputElement;
};
