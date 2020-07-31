import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import PublicRoute from './PublicRoute';

const AuthRouter: React.FC = () => {
  return (
    <Switch>
      Auth Router
      <PublicRoute isAuth={false} component={LoginScreen}></PublicRoute>
      <PublicRoute isAuth={false} component={SignUpScreen}></PublicRoute>
      <Redirect to="/"></Redirect>
    </Switch>
  );
};

export default AuthRouter;
