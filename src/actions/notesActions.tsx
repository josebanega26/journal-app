import { NotesInterface, notesTypes } from '../types/notesTypes';
import { errorHandler } from '../helpers/errorHandler';
import { db } from '../firebase/firebase-config';
import { INote } from '../models/note.interface';
import { startLoading, stopLoading } from './uiActions';
import { RootState } from '../reducers';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';

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

export const selectNote = (note: INote): NotesInterface => ({
  type: notesTypes.SELECT_NOTE,
  payload: note
});

export const startNoteCreation = (note: INote) => async (dispatch: any, getState: () => RootState) => {
  try {
    const { uid } = getState().auth;
    dispatch(startLoading());
    const docRef = await db.collection(`${uid}/journal/notes`).add(note);
    console.log('docRef :>> ', docRef);
    dispatch(stopLoading());
  } catch (err) {
    errorHandler(err);
  }
};
export const startUpdateCreation = (note: INote) => async (dispatch: any, getState: () => RootState) => {
  try {
    const { uid } = getState().auth;
    dispatch(startLoading());
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    dispatch(stopLoading());
    dispatch(updateLocalNote(note));
  } catch (e) {
    errorHandler(e);
  }
};

export const startUploadingFile = (file: File) => async (dispatch: any, getState: () => RootState) => {
  try {
    const { active: activedNote } = getState().notes;
    const imgUrl = await fileUpload(file);
    dispatch(startUpdateCreation({ ...activedNote, imgUrl }));
  } catch (e) {
    errorHandler(e);
  }
};

export const updateLocalNote = (note: INote) => ({
  type: notesTypes.UPDATE_NOTE,
  payload: note
});

export const setNotes = (notes: INote[]): NotesInterface => ({
  type: notesTypes.SET_NOTES,
  payload: notes
});

export const getNotes = () => async (dispatch: any, getState: () => RootState) => {
  try {
    const { uid } = getState().auth;
    dispatch(startLoading());
    const notes = await loadNotes(uid);
    dispatch(stopLoading());
    dispatch(setNotes(notes));
  } catch (err) {
    errorHandler(err);
  }
};
