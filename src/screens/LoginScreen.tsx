import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <React.Fragment>
      <h2 className='mb-2 d-flex center'>Login</h2>
      <form>
        <input
          type='email'
          placeholder='joe@doe.com'
          name='email'
          id='auth--login-email'
          autoComplete='off'
        />
        <input
          type='password'
          placeholder='*******'
          name='password'
          id='auth--login-password'
        />
        <div>
          <button className='w-100'>Submit</button>
          <div className='google-btn'>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
      </form>
      <div className='mt-4 d-flex center'>
        <Link className='link' to='/auth/register'>
          Create a new account
        </Link>
      </div>
    </React.Fragment>
  );
};

export default LoginScreen;
