import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startNoteCreation, startUpdateCreation, selectNote } from '../actions/notesActions';
import { INote } from '../models/note.interface';
import { RootState } from '../reducers/index';
const NotesScreen = () => {
  const { active: note } = useSelector((state: RootState) => state.notes);
  const [noteForm, handlerForm, reset] = useForm(note);
  const { title, text, imgUrl } = noteForm;
  const activeId = useRef(note.id || null);
  console.log('activeId :>> ', activeId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeId.current !== note.id && note.id) {
      reset(note);
      activeId.current = note.id;
    }
  }, [reset, note]);

  useEffect(() => {
    dispatch(selectNote({ id: activeId, ...noteForm }));
  }, [noteForm, dispatch]);

  const saveNote = (note: INote) => {
    const newNote: INote = {
      date: new Date().getTime(),
      text,
      title,
      imgUrl
    };
    console.log('note.id :>> ', note.id);
    if (note.id) {
      dispatch(startUpdateCreation({ id: note.id, ...newNote }));
    } else {
      dispatch(startNoteCreation(newNote));
    }
  };
  return (
    <div className="notes--screen">
      <Header
        handlerSave={() => {
          saveNote(note);
        }}></Header>
      <div className="notes--main">
        <input
          type="text"
          name="title"
          id="notes--title"
          className="notes--title"
          placeholder="Title"
          value={title}
          onChange={handlerForm}
        />
        <textarea name="text" id="notes--content" className="notes--content" value={text} onChange={handlerForm} />
        <div className="notes--image">{!!imgUrl && <img src={imgUrl} alt="sunset" />}</div>
        <button className="mt-2 btn-danger"> Delete </button>
      </div>
    </div>
  );
};

export default NotesScreen;
