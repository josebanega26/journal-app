import React from 'react';
import { Link } from 'react-router-dom';

const SignUpScreen = () => {
  return (
    <React.Fragment>
      <h2 className='mb-2 d-flex center'>Register</h2>
      <form>
        <input
          type='name'
          placeholder='Full Name'
          name='name'
          id='auth--register-name'
          autoComplete='off'
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          id='auth--register-email'
          autoComplete='off'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          id='auth--register-password'
        />
        <input
          type='password'
          placeholder='Confirm password'
          name='password-confirm'
          id='auth--register-password-confirmation'
          autoComplete='off'
        />
        <div>
          <button type='submit' className='w-100'>
            Submit
          </button>
        </div>
      </form>
      <div className='mt-4 d-flex center'>
        <Link className='link' to='/auth/login'>Have you already a account?</Link>
      </div>
    </React.Fragment>
  );
};

export default SignUpScreen;
