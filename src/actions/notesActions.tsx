import { NotesInterface, notesTypes } from '../types/notesTypes';
import { errorHandler } from '../helpers/errorHandler';
import { db } from '../firebase/firebase-config';
import { INote } from '../models/note.interface';
import { startLoading, stopLoading } from './uiActions';
import { RootState } from '../reducers';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';
import Swal from 'sweetalert2';

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
    await db.collection(`${uid}/journal/notes`).add(note);
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
    Swal.fire({
      title: 'Uploadding...',
      text: 'Wait on minute....',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    dispatch(startUpdateCreation({ ...activedNote, imgUrl }));
    Swal.close();
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

export const deleteNote = (id: number): NotesInterface => ({
  type: notesTypes.DELETE_NOTE,
  payload: id
});

export const startDeleting = (id: number) => async (dispatch: any, getState: () => RootState) => {
  try {
    const { uid } = getState().auth;
    dispatch(startLoading());
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(stopLoading());
    dispatch(deleteNote(id));
  } catch (e) {
    errorHandler(e);
  }
};
