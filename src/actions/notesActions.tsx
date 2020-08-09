import { NotesInterface, notesTypes } from '../types/notesTypes';
import { errorHandler } from '../utils/errorHandler';
import { db } from '../firebase/firebase-config';
import { INote } from '../models/note.interface';
import { startLoading, stopLoading } from './uiActions';
import { RootState } from '../reducers';
export const addNewNote = (): NotesInterface => ({
  type: notesTypes.ADD_NOTE,
  payload: null
});

export const cleanLogoutNotes = (): NotesInterface => ({
  type: notesTypes.CLEAN_LOGOUT_NOTES,
  payload: null
});

export const createNote = (): NotesInterface => ({
  type: notesTypes.CLEAN_LOGOUT_NOTES,
  payload: null
});

export const startNoteCreation = (note: INote) => async (dispatch: any, getState: () => RootState) => {
  try {
    const { uid } = getState().auth;
    console.log('uid :>> ', uid);
    dispatch(startLoading());
    const docRef = await db.collection(`${uid}/journal/notes`).add(note);
    console.log('docRef :>> ', docRef);
    dispatch(stopLoading());
  } catch (err) {
    errorHandler(err);
  }
};
