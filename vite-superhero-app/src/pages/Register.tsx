import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../redux/services/auth';
// import { useAppDispatch } from '../redux/hooks'

type FormValues = {
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const [registerUser, { data, isSuccess, isError }] = useRegisterMutation();

  useEffect(() => {
    if (isSuccess) navigate('/profile');
  }, [isSuccess]);

  const onSubmit = (data: FormValues) => {
    registerUser(data);
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input type='email' {...register('email', { required: true })} />
          {errors.email && <span>Email is required</span>}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input type='password' {...register('password', { required: true })} />
          {errors.password && <span>Password is required</span>}
        </fieldset>
        <button>Register</button>
        {isError && <p>Erreur lors de l&apos;inscription</p>}
        {isSuccess && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </form>
    </section>
  );
};

export default Register;
