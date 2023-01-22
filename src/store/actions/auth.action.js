import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from '../../constants/firebase';
import { auhtTypes } from '../types';
import { generateProfile } from '../../db';

const { SIGN_IN, SIGN_UP, SIGN_OUT } = auhtTypes;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) 
      {
          const data = await response.json();
          let errorMessage = "";
          if (data.error)
          {
              errorMessage = (data.error.message === "EMAIL_EXISTS") ? "El Correo electrónico ingresado ya se encuentra registrado" : "Error al registrarse";
          }
          else
          {
              errorMessage = 'Algo salió mal!';
          }

          throw new Error(errorMessage);
      }

      const data = await response.json();
      // console.warn(data);
     
      const result = await generateProfile(data.localId);
      //console.warn(result);

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();
      if (data.error)
      {
          let errorMessage = ((data.error.message === "EMAIL_NOT_FOUND") || (data.error.message === "INVALID_PASSWORD")) ? "Correo electrónico o contraseña incorrecta" : "Error al iniciar sesión";
          throw new Error(errorMessage);
      }

      const result = await generateProfile(data.localId);
      //console.warn(result);

      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const signOut = () => ({
  type: SIGN_OUT,
});