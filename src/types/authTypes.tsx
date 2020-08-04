import { IAuth } from '../models/auth.interface';

export const authTypes = {
  LOGIN: '[Auth] LOGIN',
  LOGOUT: '[Auth] LOGOUT'
};

interface Login {
  type: typeof authTypes.LOGIN;
  payload: IAuth;
}

interface Logout {
  type: typeof authTypes.LOGOUT;
}

export type AuthInterface = Login & Logout;
