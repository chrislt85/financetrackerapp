import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Incomes } from "../screens";
import { COLORS } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const IncomesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Incomes"
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
                name='Incomes' 
                component={Incomes} 
                options={{
                    title: 'Ingresos',
                    //headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default IncomesNavigator;