import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteProps {
  isAuth: boolean;
  component: any;
  exact: any;
  path: string;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props: any) => (isAuth ? <Component {...props}></Component> : <Redirect to="/auth/login" />)}></Route>
  );
};

export default PrivateRoute;
