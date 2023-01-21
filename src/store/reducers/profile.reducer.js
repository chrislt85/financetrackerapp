/* eslint-disable no-case-declarations */
import { profileTypes } from '../types';

const { SAVE_PROFILE, SAVE_SETTINGS } = profileTypes;

const initialState = {
  userPicture: '',
  userName: '',
  userLocation: '',
  darkMode: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        userPicture: action.userPicture,
        userName: action.userName,
        userLocation: action.userLocation,
      };
    case SAVE_SETTINGS:
      return {
        darkMode: action.darkMode,
      };
    default:
      return state;
  }
};

export default profileReducer;
