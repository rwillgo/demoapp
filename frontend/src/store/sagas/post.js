import {put, call, takeLatest} from 'redux-saga/effects';
import Types from '../actions/actionTypes';
import api from '../api';
import {filterError} from './filter';

const {postCreate, postHome} = api;

function* PostCreate(action) {
  try {
    const response = yield call(postCreate, action.params);
    const {data} = response;
    yield put({type: Types.POST_CREATE_SUCCESS, payload: data});
  } catch (error) {
    const filteredError = filterError(error);
    console.log('create post error - ', filteredError);
    yield put({type: Types.POST_CREATE_FAILURE, error: filteredError});
  }
}

function* PostHome(action) {
  try {
    const response = yield call(postHome, action.params);
    const {data} = response;
    yield put({type: Types.POST_HOME_SUCCESS, payload: data});
  } catch (error) {
    const filteredError = filterError(error);
    console.log('home posts error - ', filteredError);
    yield put({type: Types.POST_HOME_FAILURE, error: filteredError});
  }
}

export default [
  takeLatest(Types.POST_CREATE_REQUEST, PostCreate),
  takeLatest(Types.POST_HOME_REQUEST, PostHome),
];
