import { ErrorMessage } from '@hookform/error-message';
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
          pattern: {
            value: /^[0-9]{16}$/,
            message: 'Must be a valid card number with 16 characters',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Credit card number"
            variant="outlined"
            fullWidth
            helperText={<ErrorMessage errors={errors} name={'cardNumber'} />}
          />
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
              pattern: {
                value: /^[0-9]{3}$/,
                message: 'Must be a valid cvc',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="CVC"
                variant="outlined"
                helperText={<ErrorMessage errors={errors} name={'cvc'} />}
              />
            )}
          />
        </div>
        <div className="w-28">
          <Controller
            name="expiry"
            control={control}
            defaultValue={defaultValues.expiry}
            rules={{
              required: { value: true, message: 'Required' },
              pattern: {
                value: /^((0[1-9])|(1[0-2]))\/([0-9]{2})/,
                message: 'Must be a valid date with MM/YY format',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="expiry"
                variant="outlined"
                placeholder="MM/YY"
                helperText={<ErrorMessage errors={errors} name={'expiry'} />}
              />
            )}
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
