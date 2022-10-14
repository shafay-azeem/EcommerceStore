import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  userLoginRequest: state => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  // userLogOutRequest: state => {
  //     state.loading = true
  // },
  userCreateRequest: state => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  userLoadRequest: state => {
    state.loading = true;
    state.isAuthenticated = false;
  },

  userCreateSuccess: (state = {user: {}}, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  userLogOutSuccess: (state = {user: {}}) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
  },
  userLoginSuccess: (state = {user: {}}, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  userLoadSuccess: (state = {user: {}}, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  userLoginFalse: (state = {user: {}}, action) => {
    (state.loading = false),
      (state.isAuthenticated = false),
      (state.user = null),
      (state.error = action.payload);
  },
  userLoadFailed: (state = {user: {}}, action) => {
    (state.loading = false),
      (state.isAuthenticated = false),
      (state.user = null),
      (state.error = action.payload);
  },
  userLogOutFailed: state => {
    state.loading = false;
    state.error = action.payload;
  },
  userCreateFail: (state = {user: {}}, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    state.error = action.payload;
  },
});

export const forgotPasswordReducer = createReducer(initialState, {
  forgotPasswordRequest: state => {
    state.loading = true;
    state.error = null;
  },
  forgotPasswordSuccess: (state = {}, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  forgotPasswordFailed: (state = {}, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

// update profile Reducer
export const updateProfileReducer = createReducer(initialState, {
  updateProfileRequest: state => {
    state.loading = true;
    state.error = null;
  },
  updateProfileSuccess: (state = {}, action) => {
    state.loading = false;
    state.isUpdated = action.payload;
  },
  updateProfileFailed: (state = {}, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
