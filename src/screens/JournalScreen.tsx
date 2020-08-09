import React from 'react';
import NothingSelected from '../components/NothingSelected';
import Sidebar from '../components/Sidebar';
import NotesScreen from './NotesScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

const JournalScreen = () => {
  const { active } = useSelector((state: RootState) => state.notes);
  return (
    <div className="journal--main">
      <Sidebar></Sidebar>
      <main>{!!active ? <NotesScreen></NotesScreen> : <NothingSelected></NothingSelected>}</main>
    </div>
  );
};

export default JournalScreen;
