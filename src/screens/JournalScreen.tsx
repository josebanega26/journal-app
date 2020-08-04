import React from 'react';
import NothingSelected from '../components/NothingSelected';
import Sidebar from '../components/Sidebar';
import NotesScreen from './NotesScreen';

const JournalScreen = () => {
  const noteSelected: boolean = true;
  return (
    <div className="journal--main">
      <Sidebar></Sidebar>
      <main>{noteSelected ? <NotesScreen></NotesScreen> : <NothingSelected></NothingSelected>}</main>
    </div>
  );
};

export default JournalScreen;
