import { combineReducers } from 'redux';

import themeReducer from './themeReducer';
import jobsReducer from './jobsReducer';
import queryReducer from './queryReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  jobs: jobsReducer,
  query: queryReducer,
});

export default rootReducer;
