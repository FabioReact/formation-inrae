import { useForm } from 'react-hook-form';
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


  const onSubmit = (data: FormValues) => console.log(data);

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
      </form>
    </section>
  );
};

export default Register;
