import { Button, TextField } from '@mui/material';
import { FC, useState } from 'react';

interface RegisterFormProps {}

interface FormInput {
  cardNumber: string;
  cvc: string;
  expiry: string;
}

const defaultValues: FormInput = {
  cardNumber: '',
  cvc: '',
  expiry: '',
};

const RegisterForm: FC<RegisterFormProps> = () => {
  const [input, setInput] = useState<FormInput>(defaultValues);

  return (
    <div className="w-full">
      <TextField
        label="Credit card number"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => {
          setInput((prev) => ({ ...prev, cardNumber: e.target.value }));
        }}
      />
      <div className="flex justify-end py-4 space-x-4">
        <div className="w-20">
          <TextField
            label="CVC"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setInput((prev) => ({ ...prev, cvc: e.target.value }));
            }}
          />
        </div>
        <div className="w-28">
          <TextField
            label="expiry"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setInput((prev) => ({ ...prev, expiry: e.target.value }));
            }}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => {
            console.log(input);
          }}
        >
          submit
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;
