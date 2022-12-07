import {createReducer} from 'reduxsauce';
import Types from '../actions/actionTypes';

export const initialState = {
  // posts
  home: null,
  homeRequestType: null,
  homeErrorMessage: '',
  // create post
  post: null,
  createRequestType: null,
  createErrorMessage: '',
};

const postCreateRequest = (state, action) => ({
  ...state,
  createRequestType: action.type,
  createErrorMessage: '',
});

const postCreateSuccess = (state, action) => ({
  ...state,
  createRequestType: action.type,
  post: action.payload.posts,
  createErrorMessage: '',
});

const postCreateFailure = (state, action) => ({
  ...state,
  createRequestType: action.type,
  createErrorMessage: action.error,
});

const postHomeRequest = (state, action) => ({
  ...state,
  homeRequestType: action.type,
  homeErrorMessage: '',
});

const postHomeSuccess = (state, action) => ({
  ...state,
  homeRequestType: action.type,
  home: action.payload.posts,
  homeErrorMessage: '',
});

const postHomeFailure = (state, action) => ({
  ...state,
  homeRequestType: action.type,
  homeErrorMessage: action.error,
});

const actionHandlers = {
  [Types.POST_CREATE_REQUEST]: postCreateRequest,
  [Types.POST_CREATE_SUCCESS]: postCreateSuccess,
  [Types.POST_CREATE_FAILURE]: postCreateFailure,
  [Types.POST_HOME_REQUEST]: postHomeRequest,
  [Types.POST_HOME_SUCCESS]: postHomeSuccess,
  [Types.POST_HOME_FAILURE]: postHomeFailure,
};

export default createReducer(initialState, actionHandlers);
