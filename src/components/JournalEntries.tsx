import React from 'react';
import JournalEntry from './JournalEntry';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { INote } from '../models/note.interface';

const JournalEntries = () => {
  const { notes } = useSelector((state: RootState) => state.notes);
  return (
    <div>
      {notes.length > 0 ? notes.map((note: INote) => <JournalEntry key={note.id} note={note} />) : <p>no notes</p>}
    </div>
  );
};

export default JournalEntries;
