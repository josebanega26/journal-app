import { UiInterface, uiTypes } from '../types/uiTypes';
export const initialState = {
  loading: false,
  msgError: ''
};

export default (state = initialState, { type, payload }: UiInterface) => {
  switch (type) {
    case uiTypes.SET_ERROR:
      return { ...state, msgError: payload };
    case uiTypes.REMOVE_ERROR:
      return { ...state, msgError: null };
    case uiTypes.START_LOADING:
      return { ...state, loading: true };
    case uiTypes.STOP_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
