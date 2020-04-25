import { all } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { toast } from 'react-toastify';

function* rootSaga() {
  try {
    yield all([routinePromiseWatcherSaga()]);
  } catch (err) {
    toast.error('Ha ocurrido un error');
    throw err;
  }
}

export default rootSaga;
