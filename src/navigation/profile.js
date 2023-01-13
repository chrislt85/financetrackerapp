import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile, UserDetails, UserPicture, UserSettings } from "../screens";
import { COLORS } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
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
                name='Profile' 
                component={Profile} 
                options={{
                    title: 'Perfil',
                    //headerShown: false,
                }}
            />
            <Stack.Screen 
                name='UserPicture' 
                component={UserPicture} 
                options={{
                    title: 'Foto del Perfil',
                }}
            />
            <Stack.Screen 
                name='UserDetails' 
                component={UserDetails} 
                options={{
                    title: 'Detalle de Usuario',
                }}
            />
            <Stack.Screen 
                name='UserSettings' 
                component={UserSettings} 
                options={{
                    title: 'Configuraciones'
                }}
            />
        </Stack.Navigator>
    );
}

export default ProfileNavigator;