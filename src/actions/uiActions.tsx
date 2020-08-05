import { uiTypes, RemoveError, SetError } from '../types/uiTypes';

export const setErrorMsg = (message: string): SetError => ({
  type: uiTypes.SET_ERROR,
  payload: message
});

export const removeErrorMsg = (): RemoveError => ({
  type: uiTypes.REMOVE_ERROR,
  payload: null
});
