import thunk                                             from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools }                           from 'redux-devtools-extension';

import { dashboardReducer } from '../pages/View/reducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export type RootStoreType = ReturnType<typeof rootReducer>
export default store;