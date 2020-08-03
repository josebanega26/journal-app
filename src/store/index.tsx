import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware: any[] = [];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
