import React from "react";
import { View, Text, Button } from 'react-native';

import { styles } from "./styles";

const Expenses = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Expenses</Text>
            <Button
                title="New expense"
                color="#"
                onPress={() => navigation.navigate('NewExpense')}
            />
            <Button
                title="Category Detail"
                color="#"
                onPress={() => navigation.navigate('CategoryDetail')}
            />
        </View>
    );
};

export default Expenses;