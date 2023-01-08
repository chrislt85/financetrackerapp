import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                presentation: 'card',
            }}
        >
            <Stack.Screen 
                name='Home' 
                component={Home} 
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigator;