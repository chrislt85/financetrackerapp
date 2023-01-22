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

// ver places.slice de ejemplo profesor >> conexion SQLite/Redux
// ver lo que entregue yo tmb
// ver si esto no resuelve el problema del profile que no refrescaba el perfil