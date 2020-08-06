import { AuthInterface, authTypes } from '../types/authTypes';
import { googlgeAuthProvider, firebase } from '../firebase/firebase-config';
import { startLoading, stopLoading } from './uiActions';
import Swal from 'sweetalert2';

export const startLoginWithEmailPassword = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoading());
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(login(user?.uid as string, user?.displayName as string));
    } catch (err) {
      errorHandler(err);
    } finally {
      dispatch(stopLoading());
    }
  };
};

export const startGoogleLogin = () => {
  return (dispatch: any) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithPopup(googlgeAuthProvider)
      .then((userCredential) => {
        dispatch(login(userCredential.user?.uid as string, userCredential.user?.displayName as string));
      })
      .catch((err) => {
        errorHandler(err);
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  };
};
export const startRegisterWithNamePasswordEmail = (name: string, password: string, email: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoading());
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await user?.updateProfile({ displayName: name });
      dispatch(login(user?.uid as string, name));
    } catch (err) {
      errorHandler(err);
    } finally {
      dispatch(stopLoading());
    }
  };
};

export const startLogout = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoading());
      await firebase.auth().signOut();
      dispatch(logout());
      dispatch(stopLoading());
    } catch (err) {
      errorHandler(err);
    }
  };
};
export const login = (uid: string, displayName: string): AuthInterface => ({
  type: authTypes.LOGIN,
  payload: { uid, displayName }
});

export const logout = (): AuthInterface => ({
  type: authTypes.LOGOUT,
  payload: null
});

const errorHandler = (err: string) => {
  Swal.fire({
    title: 'Error!',
    text: err,
    icon: 'error',
    confirmButtonText: 'Ok'
  });
};
