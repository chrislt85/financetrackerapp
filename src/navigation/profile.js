import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile, UserDetails, UserSettings } from "../screens";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
        >
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='UserDetails' component={UserDetails} />
            <Stack.Screen name='UserSettings' component={UserSettings} />
        </Stack.Navigator>
    );
}

export default ProfileNavigator;