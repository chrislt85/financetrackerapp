import React from "react";
import { View, Text } from 'react-native';

import { styles } from "./styles";

const AddExpense = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Expense</Text>
        </View>
    );
};

export default AddExpense;