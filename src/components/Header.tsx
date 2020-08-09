import React from 'react';
import { getMonthName } from '../utils/utils';

interface HeaderProps {
  handlerSave?: () => void;
}
const Header: React.FC<HeaderProps> = ({ handlerSave }) => {
  const [year, month, day] = new Date().toISOString().slice(0, 10).split('-');
  return (
    <nav className="header--main">
      <span>{`${day} de ${getMonthName(+month)} ${year}`}</span>
      <ul>
        <li className="pr-2">
          <button>Picture</button>
        </li>
        <li>
          <button onClick={handlerSave}>Save</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
