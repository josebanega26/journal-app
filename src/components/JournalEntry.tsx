import React from 'react';
import { truncateText } from '../utils/text.utils';

// TODO: set props as required
interface JournalEntryProps {
  imageUrl?: string;
  content?: string;
  title?: string;
}
const JournalEntry: React.FC<JournalEntryProps> = ({ imageUrl, content, title }) => {
  return (
    <div className="journal--entry">
      <div
        className="journal--entry-image"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}></div>
      <div className="journal--entry-body">
        <p className="journal-entry-title">{title}</p>
        <p className="journal-entry-content">{truncateText(content as string)}</p>
      </div>
      <div className="journal--entry-date">
        <p>DATE</p>
      </div>
    </div>
  );
};

JournalEntry.defaultProps = {
  imageUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus natus placea',
  title: 'Title 1'
};
export default JournalEntry;
