import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  form,
});

export default rootReducer;
