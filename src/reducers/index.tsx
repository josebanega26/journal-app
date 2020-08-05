import { combineReducers } from 'redux';
import authReducer from './authReducer';
import uiReducer from './uiReducer';

const reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer
});
export type RootState = ReturnType<typeof reducer>;
export const rootReducer = reducer;
