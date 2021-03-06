import React from 'react';
import { truncateText } from '../utils/utils';
import { INote } from '../models/note.interface';
import { useDispatch } from 'react-redux';
import { selectNote } from '../actions/notesActions';
import moment from 'moment';
interface JournalEntryProps {
  note: INote;
}
const JournalEntry: React.FC<JournalEntryProps> = ({ note }) => {
  const { title, imgUrl, text, date } = note;

  const dispatch = useDispatch();

  const [day, dayNumber] = moment(date).format('dddd Do').split(' ');

  const setNote = () => {
    dispatch(selectNote(note));
  };

  return (
    <div className="journal--entry" onClick={setNote}>
      {imgUrl ? (
        <div
          className="journal--entry-image"
          style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}></div>
      ) : null}
      <div className={`journal--entry-body ${!imgUrl ? 'journal--entry--two' : ''} `}>
        <p className="journal-entry-title">{title}</p>
        <p className="journal-entry-content">{truncateText(text as string)}</p>
      </div>
      <div className="journal__entry-date-box">
        <div className="journal--entry-date">
          {day} <span>{dayNumber}</span>
        </div>
      </div>
    </div>
  );
};

JournalEntry.defaultProps = {};
export default JournalEntry;
