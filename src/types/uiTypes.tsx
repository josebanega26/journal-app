export const uiTypes = {
  SET_ERROR: '[UI] SetError',
  REMOVE_ERROR: '[UI] RemoveError'
};

export interface SetError {
  type: typeof uiTypes.SET_ERROR;
  payload: string;
}

export interface RemoveError {
  type: typeof uiTypes.REMOVE_ERROR;
  payload: null;
}

export type UiInterface = SetError & RemoveError;
