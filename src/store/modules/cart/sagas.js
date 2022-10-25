import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data)); // dispara uma action do redux
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]); // primeiro paramentro e qual ação queremos ouvir e o segundo qual função queremos disparar
