import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JournalScreen from '../screens/JournalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import AuthRouter from './AuthRouter';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/authActions';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// TODO: Implement private route when login works
// import PrivateRoute from './PrivateRoute';

export const AppRouter = () => {
  const { loading } = useSelector((state: RootState) => state.ui);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName as string));
        setIsAuthenticated(true);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);
  return (
    <div>
      {loading && <Spinner></Spinner>}
      {checking ? (
        <Spinner></Spinner>
      ) : (
        <Router>
          <Switch>
            <PublicRoute isAuth={isAuthenticated} path="/auth" component={AuthRouter}></PublicRoute>
            <PrivateRoute isAuth={isAuthenticated} exact path="/" component={JournalScreen}></PrivateRoute>
            <Route path="*" component={NotFoundScreen}></Route>
          </Switch>
          <Footer></Footer>
        </Router>
      )}
    </div>
  );
};
