import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import jobsReducer from "./jobsReducer";
import queryReducer from "./queryReducer";
import jobReducer from "./jobReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  jobs: jobsReducer,
  query: queryReducer,
  job: jobReducer,
});

export default rootReducer;
