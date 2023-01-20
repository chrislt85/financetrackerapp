import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoryReducer, expensesReducer, profileReducer, authReducer } from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  expenses: expensesReducer,
  profile: profileReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
