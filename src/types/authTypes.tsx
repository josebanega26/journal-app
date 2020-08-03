import { IAuth } from '../models/auth.interface';

export const authTypes = {
  LOGIN: '[auth] LOGIN',
  LOGOUT: '[auth] LOGOUT'
};

interface Login {
  type: typeof authTypes.LOGIN;
  payload: IAuth;
}

interface Logout {
  type: typeof authTypes.LOGOUT;
}

export type AuthInterface = Login & Logout;
