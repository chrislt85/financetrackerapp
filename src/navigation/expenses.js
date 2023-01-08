import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Expenses, AddExpense, Categories, AddCategory, CategoryDetail } from "../screens";
import { COLORS } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const ExpensesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Expenses"
            screenOptions={{
                presentation: 'card',
                headerTitleAlign: 'center',
                headerBackTitle: '',
                headerStyle: {
                    backgroundColor: COLORS.backgroundDark,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle:{
                    fontFamily: 'Rubik-Bold'
                },
            }}
        >
            <Stack.Screen 
                name='Expenses' 
                component={Expenses} 
                options={{
                    title: 'Gastos',
                }}
            />
            <Stack.Screen 
                name='AddExpense' 
                component={AddExpense} 
                options={{
                    title: 'Nuevo gasto',
                }}
            />
            <Stack.Screen 
                name='Categories' 
                component={Categories} 
                options={{
                    title: 'Categorías',
                }}
            />
            <Stack.Screen 
                name='AddCategory' 
                component={AddCategory}
                options={{
                    title: 'Nueva categoría',
                }}
            />
            <Stack.Screen 
                name='CategoryDetail' 
                component={CategoryDetail} 
                options={({ route }) => ({
                    title: 'Gastos - ' + route.params.title,
                })}

            />
        </Stack.Navigator>
    );
}

export default ExpensesNavigator;