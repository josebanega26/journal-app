import React from 'react';
import { truncateText } from '../utils/utils';
import { INote } from '../models/note.interface';
import { useDispatch } from 'react-redux';
import { selectNote } from '../actions/notesActions';
import moment from 'moment';
const defaultImgUrl = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';
// TODO: set props as required
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
      <div
        className="journal--entry-image"
        style={{ backgroundImage: `url(${defaultImgUrl})`, backgroundSize: 'cover' }}></div>
      <div className="journal--entry-body">
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
