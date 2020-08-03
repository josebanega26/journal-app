import React from 'react';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {
  const entries = [1, 2, 3];
  return (
    <div>
      {entries.map((values: any) => (
        <JournalEntry key={values} />
      ))}
    </div>
  );
};

export default JournalEntries;
