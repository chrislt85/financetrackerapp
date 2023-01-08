import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import HomeNavigator from "./home";
//import ExpensesNavigator from "./expenses";
//import IncomesNavigator from "./incomes";
// import ProfileNavigator from "./profile";
import TabsNavigator from "./tabs";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;