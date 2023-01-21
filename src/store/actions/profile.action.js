import { profileTypes } from '../types';

const { SAVE_PROFILE, SAVE_SETTINGS } = profileTypes;

export const saveProfile = (item) => ({
  type: SAVE_PROFILE,
  item,
});

export const saveSettings = (darkMode) => ({
  type: SAVE_SETTINGS,
  darkMode,
});
