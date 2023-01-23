//import { URL_BASE } from '../../constants/firebase';
import { expensesTypes } from '../types';

const { /*GET_EXPENSES,*/ SELECT_EXPENSE, FILTER_EXPENSES, ADD_EXPENSE, REMOVE_EXPENSE } = expensesTypes;

/*export const addExpense = (item) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/expenses.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item
        }),
      });

      const result = await response.json();

      dispatch({
        type: ADD_EXPENSE,
        item,
      });
    } catch (error) {
      dispatch({
        type: ADD_EXPENSE,
        error,
      });
    }
  };
};*/

/*export const removeExpense = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/expenses/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);
      dispatch({
        type: REMOVE_EXPENSE,
        id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};*/
/*
export const getExpenses = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/expenses.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      const expenses = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      })).filter((expense) => expense.categoryId === id);

      console.log(expenses);

      dispatch({
        type: GET_EXPENSES,
        expenses,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
*/
/////////////////////////////////////////////////////////////////////
export const addExpense = (item) => ({
  type: ADD_EXPENSE,
  expense: item,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  expenseId: id,
});

export const selectExpense = (id) => ({
  type: SELECT_EXPENSE,
  expenseId: id,
});

export const filterExpenses = (id) => ({
  type: FILTER_EXPENSES,
  categoryId: id,
});





