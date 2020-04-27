// External imports
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Local imports
import rootReducer from './reducers';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
