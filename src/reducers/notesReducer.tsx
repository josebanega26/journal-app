import { notesTypes, NotesInterface } from '../types/notesTypes';
const initialState = {
  notes: [],
  active: false
};

export default (state = initialState, { type, payload }: NotesInterface) => {
  switch (type) {
    case notesTypes.ADD_NOTE:
      return { ...state, active: true };
    case notesTypes.CLEAN_LOGOUT_NOTES: {
      return { ...state, notes: [], active: false };
    }
    default:
      return state;
  }
};
