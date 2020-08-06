import { AuthInterface, authTypes } from '../types/authTypes';
import { googlgeAuthProvider, firebase } from '../firebase/firebase-config';
import { startLoading, stopLoading } from './uiActions';

export const startLoginWithEmailPassword = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoading());
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(login(user?.uid as string, user?.displayName as string));
    } catch (err) {
      console.log('err :>> ', err?.message);
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
        console.log(err?.message);
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
      console.log('err :>> ', err?.message);
    } finally {
      dispatch(stopLoading());
    }
  };
};

export const login = (uid: string, displayName: string): AuthInterface => ({
  payload: { uid, displayName },
  type: authTypes.LOGIN
});
