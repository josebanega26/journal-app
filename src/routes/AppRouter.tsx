import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JournalScreen from '../screens/JournalScreen/JournalScreen';
import NotFoundScreen from '../screens/NotFoundScreen/NotFoundScreen';
import AuthRouter from './AuthRouter';
// TODO: Implement private route when login works
// import PrivateRoute from './PrivateRoute';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter}></Route>
        <Route exact path="/" component={JournalScreen}></Route>
        <Route path="*" component={NotFoundScreen}></Route>
      </Switch>
    </Router>
  );
};
