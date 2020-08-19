import React, { ChangeEvent } from 'react';
import { getMonthName } from '../utils/utils';
import { useDispatch } from 'react-redux';
import { startUploadingFile } from '../actions/notesActions';

interface HeaderProps {
  handlerSave?: () => void;
}
const Header: React.FC<HeaderProps> = ({ handlerSave }) => {
  const dispatch = useDispatch();
  const [year, month, day] = new Date().toISOString().slice(0, 10).split('-');

  const handleInputFile = () => {
    (document.querySelector('#filePhoto') as HTMLInputElement).click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files![0];
    dispatch(startUploadingFile(files));
  };
  return (
    <nav className="header--main">
      <span>{`${day} de ${getMonthName(+month)} ${year}`}</span>
      <ul>
        <li className="pr-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleInputFile();
            }}>
            Picture
          </button>
        </li>
        <li>
          <button onClick={handlerSave}>Save</button>
        </li>
        <input onChange={handleFileChange} style={{ display: 'none' }} type="file" name="filePhoto" id="filePhoto" />
      </ul>
    </nav>
  );
};

export default Header;
