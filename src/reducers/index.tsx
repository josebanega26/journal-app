import { combineReducers } from 'redux';
import authReducer from './authReducer';
import uiReducer from './uiReducer';
import notesReducer from './notesReducer';

const reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
});
export type RootState = ReturnType<typeof reducer>;
export const rootReducer = reducer;
