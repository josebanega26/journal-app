import { IAuth } from '../models/auth.interface';

export const authTypes = {
  LOGIN: '[Auth] LOGIN',
  LOGOUT: '[Auth] LOGOUT'
};

export type Login = {
  type: typeof authTypes.LOGIN;
  payload: IAuth;
};

export type Logout = {
  type: typeof authTypes.LOGOUT;
  payload: any;
};

export type AuthInterface = Login | Logout;
