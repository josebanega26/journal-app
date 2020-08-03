import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const LoginScreen = () => {
  const initalState = { email: '', password: '' };
  const [loginForm, handleForm, resetForm] = useForm(initalState);
  const { email = '', password = '' } = loginForm;
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = { ...loginForm };
    resetForm();
    console.log('loginForm :>> ', value);
  };
  return (
    <React.Fragment>
      <h2 className="mb-2 d-flex center">Login</h2>
      <form onSubmit={submitForm}>
        <input
          type="email"
          placeholder="joe@doe.com"
          onChange={handleForm}
          name="email"
          value={email}
          id="auth--login-email"
          autoComplete="off"
        />
        <input
          value={password}
          type="password"
          placeholder="*******"
          onChange={handleForm}
          name="password"
          id="auth--login-password"
        />
        <div>
          <button className="w-100" type="submit" id="login-submit-button">
            Submit
          </button>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
      </form>
      <div className="mt-4 d-flex center">
        <Link className="link" to="/auth/register">
          Create a new account
        </Link>
      </div>
    </React.Fragment>
  );
};

export default LoginScreen;
