import { all } from "redux-saga/effects";
import { routinePromiseWatcherSaga } from "redux-saga-routines";

function* rootSaga() {
  try {
    yield all([routinePromiseWatcherSaga()]);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default rootSaga;
