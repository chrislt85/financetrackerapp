import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Expenses, NewExpense, CategoryDetail } from "../screens";

const Stack = createNativeStackNavigator();

const ExpensesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Expenses"
        >
            <Stack.Screen name='Expenses' component={Expenses} />
            <Stack.Screen name='NewExpense' component={NewExpense} />
            <Stack.Screen name='CategoryDetail' component={CategoryDetail} />
        </Stack.Navigator>
    );
}

export default ExpensesNavigator;