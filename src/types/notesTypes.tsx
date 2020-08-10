import { INote } from '../models/note.interface';
export const notesTypes = {
  ADD_NOTE: '[Notes] ADD_NOTE',
  CREATE_NOTE: '[Notes] CREATE_NOTE',
  DELETE_NOTE: '[Notes] DELETE_NOTE',
  UPDATE_NOTE: '[Notes] UPDATE_NOTE',
  SELECT_NOTE: '[Notes] SELECT_NOTE',
  SET_NOTES: '[Notes] SET_NOTES',
  GET_NOTES: '[Notes] GET_NOTES',
  NOTE_IMG_URL: '[Notes] NOTE_IMG_URL',
  CLEAN_LOGOUT_NOTES: '[Notes] CLEAN_LOGOUT_NOTES'
};

export type AddNote = {
  type: typeof notesTypes.ADD_NOTE;
  payload: any;
};

export type DeleteNote = {
  type: typeof notesTypes.ADD_NOTE;
  payload: any;
};

export type CleanLogoutNotes = {
  type: typeof notesTypes.CLEAN_LOGOUT_NOTES;
  payload: any;
};

export type CreateNote = {
  type: typeof notesTypes.CREATE_NOTE;
  payload: { note: INote };
};

export type SelectNote = {
  type: typeof notesTypes.SELECT_NOTE;
  payload: INote;
};

export type SetNotes = {
  type: typeof notesTypes.SET_NOTES;
  payload: INote[];
};
export type NotesInterface = AddNote | DeleteNote | CleanLogoutNotes | CreateNote | SelectNote | SetNotes;
