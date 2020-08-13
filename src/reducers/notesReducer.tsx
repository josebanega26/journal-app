import { notesTypes, NotesInterface } from '../types/notesTypes';
import { INote } from '../models/note.interface';

const initialState: { notes: INote[]; active: INote | null } = {
  notes: [],
  active: null
};

export default (state = initialState, { type, payload }: NotesInterface) => {
  switch (type) {
    case notesTypes.ADD_NOTE:
      return { ...state, active: { title: '', text: '', imgUrl: null } };
    case notesTypes.CLEAN_LOGOUT_NOTES: {
      return { ...state, notes: [], active: null };
    }
    case notesTypes.SELECT_NOTE:
      return {
        ...state,
        active: {
          ...payload
        }
      };
    case notesTypes.SET_NOTES:
      return {
        ...state,
        notes: payload
      };
    default:
      return state;
  }
};
