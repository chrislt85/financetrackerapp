import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Expenses, AddExpense, Categories, AddCategory, CategoryDetail } from "../screens";

const Stack = createNativeStackNavigator();

const ExpensesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Expenses"
        >
            <Stack.Screen name='Expenses' component={Expenses} />
            <Stack.Screen name='AddExpense' component={AddExpense} />
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='AddCategory' component={AddCategory} />
            <Stack.Screen name='CategoryDetail' component={CategoryDetail} />
        </Stack.Navigator>
    );
}

export default ExpensesNavigator;