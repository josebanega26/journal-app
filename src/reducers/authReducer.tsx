import { authTypes, AuthInterface } from '../types/authTypes';
import { IAuth } from '../models/auth.interface';
const initialState: IAuth = {
  displayName: '',
  uid: ''
};

export default (state = initialState, { type, payload }: AuthInterface) => {
  switch (type) {
    case authTypes.LOGIN:
      return { ...state, ...payload };
    case authTypes.LOGOUT:
      return {};
    default:
      return state;
  }
};
