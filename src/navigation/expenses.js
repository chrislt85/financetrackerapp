import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
                options={({ navigation }) => ({
                    title: 'Gastos',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("AddExpense")}>
                            <Ionicons name="add-circle-outline" size={25} color={COLORS.black} />
                        </TouchableOpacity>
                      ),
                })}
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
                options={({ navigation }) => ({
                    title: 'Categorías',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("AddCategory")}>
                          <Ionicons name="add-circle-outline" size={25} color={COLORS.black} />
                        </TouchableOpacity>
                      ),
                })}
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