import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PublicRouteProps {
  isAuth: boolean;
  component: any;
  path: string;
  exact: any;
}
const PublicRoute: React.FC<PublicRouteProps> = ({
  isAuth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuth ? <Component {...props}></Component> : <Redirect to='/' />
      }
    ></Route>
  );
};

export default PublicRoute;
