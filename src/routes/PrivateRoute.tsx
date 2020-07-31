import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteProps {
  isAuth: boolean;
  component: any;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props: any) => (isAuth ? <Component {...props}></Component> : <Redirect to="/login" />)}></Route>
  );
};

export default PrivateRoute;
