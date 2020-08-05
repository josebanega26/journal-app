import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMsg, removeErrorMsg } from '../actions/uiActions';
import { RootState } from '../reducers/index';
const SignUpScreen = () => {
  const initalForm = {
    name: 'Jose',
    email: 'a@gmail.com',
    password: '123456',
    passwordConfirm: '123456'
  };
  const [registerForm, handlerForm, resetForm] = useForm(initalForm);
  const { name, email, password, passwordConfirm } = registerForm;
  const dispatch = useDispatch();

  const { msgError } = useSelector((state: RootState) => state.ui);

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (canSubmitForm()) {
      resetForm();
      dispatch(removeErrorMsg());
    }
  };
  const canSubmitForm = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorMsg('Name should have a least one char'));
      return false;
    }
    if (password.length < 5) {
      dispatch(setErrorMsg('Password should have a least 5 characters'));
      return false;
    }
    if (password !== passwordConfirm) {
      dispatch(setErrorMsg('Password should be Equal'));
      return false;
    }
    return true;
  };
  return (
    <React.Fragment>
      <h2 className="mb-2 d-flex center">Register</h2>
      {!!msgError && <div className="text-danger center"> {msgError}</div>}
      <form onSubmit={handleRegister}>
        <input
          type="name"
          value={name}
          placeholder="Full Name"
          name="name"
          id="auth--register-name"
          autoComplete="off"
          onChange={handlerForm}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          name="email"
          id="auth--register-email"
          autoComplete="off"
          onChange={handlerForm}
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          name="password"
          id="auth--register-password"
          onChange={handlerForm}
        />
        <input
          value={passwordConfirm}
          type="password"
          placeholder="Confirm password"
          name="passwordConfirm"
          id="auth--register-password-confirmation"
          autoComplete="off"
          onChange={handlerForm}
        />
        <div>
          <button type="submit" className="w-100">
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4 d-flex center">
        <Link className="link" to="/auth/login">
          Have you already a account?
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SignUpScreen;
