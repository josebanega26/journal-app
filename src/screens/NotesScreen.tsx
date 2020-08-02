import React from 'react';
import Header from '../components/Header';

const NotesScreen = () => {
  return (
    <div className="notes--screen">
      <Header></Header>
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
