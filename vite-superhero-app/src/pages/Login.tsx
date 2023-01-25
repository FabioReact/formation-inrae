import React, { useRef, useState } from 'react';

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState('test');

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(usernameRef.current?.value, password);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='username'>Username</label>
          <input ref={usernameRef} type='text' id='username' />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password</label>
          <input type='text' id='password' value={password} onChange={onChangePassword} />
        </fieldset>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Login;
