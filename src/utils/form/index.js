const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 7;

export const validateInput = (name, value) => {
  let hasError = false;
  let error = '';

  switch (name) {
    case 'email':
      if (value.trim() === '') {
        hasError = true;
        error = 'Se requiere correo electrónico';
      } else if (!formatEmail.test(value)) {
        hasError = true;
        error = 'El correo electrónico es inválido';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case 'password':
      if (value.trim() === '') {
        hasError = true;
        error = 'Se requiere contraseña';
      } else if (value.length < minPasswordLength) {
        hasError = true;
        error = `La contraseña debe tener al menos ${minPasswordLength} caracteres`;
      } else {
        hasError = false;
        error = '';
      }
      break;
    case 'amount':
      if (!(!isNaN(value) &&
         !isNaN(parseFloat(value))))
      {
        hasError = true;
        error = 'Se requiere un valor decimal';
      }
      else if (parseFloat(value) < 0)
      {
        hasError = true;
        error = 'Se requiere un valor mayor a 0';
      }
      break;
    default:
      break;
  }
  return { hasError, error };
};

export const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;
  for (const key in formState) {
    const item = formState[key];
    if (key !== name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATED_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
};

export const UPDATED_FORM = 'UPDATED_FORM';
