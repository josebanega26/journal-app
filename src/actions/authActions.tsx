import { AuthInterface, authTypes } from '../types/authTypes';
import { googlgeAuthProvider, firebase } from '../firebase/firebase-config';
export const startLoginEmailPassword = (email: string, password: string) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(login('123', 'Jose D'));
    }, 4000);
  };
};

export const startGoogleLogin = () => {
  return (dispatch: any) => {
    firebase
      .auth()
      .signInWithPopup(googlgeAuthProvider)
      .then((userCredential) => {
        dispatch(login(userCredential.user?.uid as string, userCredential.user?.displayName as string));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const login = (uid: string, displayName: string): AuthInterface => ({
  payload: { uid, displayName },
  type: authTypes.LOGIN
});
