import React from 'react';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startNoteCreation } from '../actions/notesActions';
import { INote } from '../models/note.interface';

const NotesScreen = () => {
  // const initalForm = {
  //   title: '',
  //   text: '',
  //   imgUrl: ''
  // };
  // const [noteForm, handlerForm, reset] = useForm({});
  const dispatch = useDispatch();

  const saveNote = () => {
    const note: INote = {
      date: '12-05-2020',
      text: 'first text',
      title: 'fisrr title',
      imgUrl: 'tag irgerndwo'
    };
    console.log('note :>> ', note);
    dispatch(startNoteCreation(note));
  };
  return (
    <div className="notes--screen">
      <Header handlerSave={saveNote}></Header>
      <div className="notes--main">
        <input type="text" name="title" id="notes--title" className="notes--title" placeholder="Title" />
        <textarea name="content" id="notes--content" className="notes--content" />
        <div className="notes--image">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/1d/ad/c3/orlando.jpg" alt="sunset" />
        </div>
      </div>
    </div>
  );
};

export default NotesScreen;
