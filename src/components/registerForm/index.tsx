import { Button, TextField } from '@mui/material';
import { FC } from 'react';

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
  return (
    <div className="w-full">
      <TextField label="Credit card number" variant="outlined" fullWidth />
      <div className="flex justify-end py-4 space-x-4">
        <div className="w-20">
          <TextField label="CVC" variant="outlined" />
        </div>
        <div className="w-28">
          <TextField label="expiry" variant="outlined" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button variant="outlined" fullWidth size="large">
          submit
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;
