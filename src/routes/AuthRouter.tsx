import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthRouter: React.FC = () => {
  return (
    <div className="auth--main">
      <div className="auth--main-box">
        <Switch>
          <Route exact path="/auth/login" isAuth={false} component={LoginScreen}></Route>
          <Route exact path="/auth/register" isAuth={false} component={SignUpScreen}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;
