import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Incomes } from "../screens";

const Stack = createNativeStackNavigator();

const IncomesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Incomes"
        >
            <Stack.Screen name='Incomes' component={Incomes} />
        </Stack.Navigator>
    );
}

export default IncomesNavigator;