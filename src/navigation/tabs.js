import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from './home';
import ExpensesNavigator from './expenses';
import IncomesNavigator from './incomes';
import ProfileNavigator from './profile';
import { COLORS } from "../constants/themes/colors";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="ExpensesTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Karla-Regular',
                    fontSize: 12,
                },
                tabBarActiveTintColor: COLORS.text,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarStyle: {
                    paddingTop: 4,
                    paddingBottom: 8,
                    height: 57,
                }
            }}
        >
            {/*<BottomTab.Screen 
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={ focused ? 'home' : 'home-outline'}
                            size={25}
                            color={COLORS.primaryDark}
                         />
                    ),
                }}
            />*/}
            <BottomTab.Screen 
                name="ExpensesTab"
                component={ExpensesNavigator}
                options={{
                    title: 'Gastos',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={ focused ? 'shopping' : 'shopping-outline'}
                            size={25}
                            color={COLORS.primaryDark}
                         />
                    )
                }}
            />
            {/*<BottomTab.Screen 
                name="IncomesTab"
                component={IncomesNavigator}
                options={{
                    title: 'Ingresos',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={ focused ? 'cash-multiple' : 'cash'}
                            size={25}
                            color={COLORS.primaryDark}
                         />
                    )
                }}
            />*/}
            <BottomTab.Screen 
                name="ProfileTab"
                component={ProfileNavigator}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={ focused ? 'account' : 'account-outline'}
                            size={25}
                            color={COLORS.primaryDark}
                         />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
};

export default Tabs;