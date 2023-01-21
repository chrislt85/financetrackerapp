/* eslint-disable no-case-declarations */
import { profileTypes } from '../types';

const { SAVE_PROFILE, SAVE_SETTINGS } = profileTypes;

const initialState = {
  userPicture: 'https://media.revistagq.com/photos/62a0a996223a33e985e4d59a/master/pass/1072434_110615-cc-Darth-Vader-Thumb.jpg',
  userName: 'Will Kim',
  userLocation: '',
  darkMode: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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
