import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startNoteCreation, startUpdateCreation } from '../actions/notesActions';
import { INote } from '../models/note.interface';
import { RootState } from '../reducers/index';
const NotesScreen = () => {
  const { active: note } = useSelector((state: RootState) => state.notes);

  const [noteForm, handlerForm, reset] = useForm(note);
  const { title, text, imgUrl } = noteForm;
  const activeId = useRef(note.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeId.current !== note.id) {
      reset(note);
      activeId.current = note.id;
    }
  }, [reset, note]);

  console.log('note :>> ', note);

  const saveNote = (note: INote) => {
    const newNote: INote = {
      date: new Date().getTime(),
      text,
      title,
      imgUrl
    };
    if (note.id) {
      dispatch(startUpdateCreation(newNote));
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
      </div>
    </div>
  );
};

export default NotesScreen;
