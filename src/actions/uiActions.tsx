import { uiTypes, RemoveError, SetError, StartLoading, StopLoading } from '../types/uiTypes';

export const setErrorMsg = (message: string): SetError => ({
  type: uiTypes.SET_ERROR,
  payload: message
});

export const removeErrorMsg = (): RemoveError => ({
  type: uiTypes.REMOVE_ERROR,
  payload: null
});

export const startLoading = (): StartLoading => ({
  type: uiTypes.START_LOADING
});

export const stopLoading = (): StopLoading => ({
  type: uiTypes.STOP_LOADING
});
