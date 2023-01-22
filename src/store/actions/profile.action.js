import { profileTypes } from '../types';
import { fetchProfile, editProfile } from '../../db';

const { LOAD_PROFILE, SAVE_PROFILE, SAVE_SETTINGS } = profileTypes;

export const loadProfile = (userId) => {
  return async (dispatch) => {
    try {
      const result = await fetchProfile(userId);
      //dispatch(setPlaces(result?.rows?._array));
      //dispatch(loadTasks({ tasks: dbresult.rows._array }));
      //console.warn('loadProfile - result', result?.rows?._array);
      dispatch({
        type: LOAD_PROFILE,
        item: result?.rows?._array[0],
      });
    } catch (error) {
      console.warn(error);
      throw error;
    }
  };
};

export const saveProfile = (userId, item) => {
  return async (dispatch) => {
    try {
      //console.warn('saveProfile - item', item);
      const result = await editProfile(userId, item.userPicture, item.userName, item.userLocation);
      //console.warn('saveProfile - result', result);
      dispatch({
        type: SAVE_PROFILE,
        item,
      });
    } catch (error) {
      console.warn(error);
      throw error;
    }
  };
};

/*export const saveProfile = (item) => ({
  type: SAVE_PROFILE,
  item,
});*/

export const saveSettings = (darkMode) => ({
  type: SAVE_SETTINGS,
  darkMode,
});

// ver places.slice de ejemplo profesor >> conexion SQLite/Redux
// ver lo que entregue yo tmb
// ver si esto no resuelve el problema del profile que no refrescaba el perfil