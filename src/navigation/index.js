import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import HomeNavigator from "./home";
// import ExpensesNavigator from "./expenses";
import ProfileNavigator from "./profile";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <ProfileNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;