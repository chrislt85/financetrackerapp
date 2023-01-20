import { EXPENSES } from '../../constants/data';
import { expensesTypes } from '../types';
const { FILTER_EXPENSES } = expensesTypes;
const initialState = {
  expenses: EXPENSES,
  filteredExpenses: [],
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_EXPENSES:
      return {
        ...state,
        filteredExpenses: state.expenses.filter(
          (expense) => expense.categoryId === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default expensesReducer;
