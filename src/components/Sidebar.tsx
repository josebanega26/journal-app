import React from 'react';
import { ReactComponent as Moon } from '../assets/icons/moon.svg';
import { ReactComponent as Calendar } from '../assets/icons/calendar.svg';
import JournalEntries from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/authActions';
import { RootState } from '../reducers';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { displayName } = useSelector((state: RootState) => state.auth);
  const handlerLogout = async () => {
    dispatch(startLogout());
    history.push('/auth/login');
  };
  return (
    <aside className="sidebar--main pt-2">
      <div className="sidebar--title-section d-flex">
        <h4 className="sidebar--title d-flex ">
          <Moon className="sidebar--icon"></Moon>
          {displayName}
        </h4>
        <span className="button" onClick={handlerLogout}>
          Logout
        </span>
      </div>
      <div className="sidebar--new--entry d-flex center mt-2 flex-column">
        <Calendar className="sidebar--new--entry--icon"></Calendar>
        <p className="sidebar--new--entry--text">New entry</p>
      </div>
      <JournalEntries></JournalEntries>
    </aside>
  );
};

export default Sidebar;
