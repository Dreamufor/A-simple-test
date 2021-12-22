import { Button, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="cardNumber"
        control={control}
        defaultValue={defaultValues.cardNumber}
        rules={{
          required: { value: true, message: 'Required' },
        }}
        render={({ field }) => (
          <TextField {...field} label="Credit card number" variant="outlined" size="small" fullWidth />
        )}
      />

      <div className="flex justify-end py-4 space-x-4">
        <div className="w-20">
          <Controller
            name="cvc"
            control={control}
            defaultValue={defaultValues.cvc}
            rules={{
              required: { value: true, message: 'Required' },
            }}
            render={({ field }) => <TextField {...field} label="CVC" variant="outlined" size="small" />}
          />
        </div>
        <div className="w-28">
          <Controller
            name="expiry"
            control={control}
            defaultValue={defaultValues.expiry}
            rules={{
              required: { value: true, message: 'Required' },
            }}
            render={({ field }) => <TextField {...field} label="expiry" variant="outlined" size="small" />}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button variant="outlined" fullWidth size="large" type="submit">
          submit
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
