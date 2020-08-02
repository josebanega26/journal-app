import React from 'react';
import Sidebar from '../components/Sidebar';
import NothingSelected from '../components/NothingSelected';

const JournalScreen = () => {
  return (
    <div className="journal--main">
      <Sidebar></Sidebar>
      <main>
        <NothingSelected></NothingSelected>
      </main>
    </div>
  );
};

export default JournalScreen;
