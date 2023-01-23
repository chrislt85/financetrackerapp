//import { EXPENSES } from '../../constants/data';
import { expensesTypes } from '../types';

const { SELECT_EXPENSE, FILTER_EXPENSES, ADD_EXPENSE, REMOVE_EXPENSE } = expensesTypes;

const initialState = {
  expenses: [],//EXPENSES,
  filteredExpenses: [],
  selectedExpense: null
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EXPENSE:
      const indexExpense = state.expenses.findIndex(
        (expense) => expense.id === action.expenseId);
      if (indexExpense === -1) return state;
      return {
          ...state,
          selectedExpense: state.expenses[indexExpense],
      };
    case FILTER_EXPENSES:
      return {
        ...state,
        filteredExpenses: state.expenses.filter(
          (expense) => expense.categoryId === action.categoryId
        ),
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.expense],
      };
    case REMOVE_EXPENSE:
        return {
            ...state,
            expenses: state.expenses.filter((item) => item.id !== action.expenseId),
            filteredExpenses: state.filteredExpenses.filter((item) => item.id !== action.expenseId),
            selectedExpense: null,
        };
    default:
      return state;
  }
};

export default expensesReducer;
