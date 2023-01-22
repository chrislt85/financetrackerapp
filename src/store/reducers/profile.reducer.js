/* eslint-disable no-case-declarations */
import { profileTypes } from '../types';

const { LOAD_PROFILE, SAVE_PROFILE, SAVE_SETTINGS } = profileTypes;

const initialState = {
  userPicture: '',
  userName: '',
  userLocation: '',
  darkMode: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        userPicture: action.item.userPicture,
        userName: action.item.userName,
        userLocation: action.item.userLocation,
        darkMode: action.item.darkMode,
      };
    case SAVE_PROFILE:
      return {
        ...state,
        userPicture: action.item.userPicture,
        userName: action.item.userName,
        userLocation: action.item.userLocation,
      };
    case SAVE_SETTINGS:
      return {
        ...state,
        darkMode: action.darkMode,
      };
    default:
      return state;
  }
};

export default profileReducer;
