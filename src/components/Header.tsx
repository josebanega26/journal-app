import React from 'react';
import { getMonthName } from '../utils/utils';

const Header = () => {
  const [year, month, day] = new Date().toISOString().slice(0, 10).split('-');
  return (
    <nav className="header--main">
      <span>{`${day} de ${getMonthName(+month)} ${year}`}</span>
      <ul>
        <li className="pr-2">
          <button>Picture</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
