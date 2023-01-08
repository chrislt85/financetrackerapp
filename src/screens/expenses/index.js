import React from "react";
import { View, Text, Button } from 'react-native';
import { COLORS } from "../../constants/themes/colors";

import { styles } from "./styles";

const Expenses = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Expenses</Text>
            <Button
                title="Add expense"
                color={COLORS.primaryDark}
                onPress={() => navigation.navigate('AddExpense')}
            />
            <Button
                title="Categories"
                color={COLORS.primaryDark}
                onPress={() => navigation.navigate('Categories')}
            />
            <Button
                title="Category Detail"
                color={COLORS.primaryDark}
                onPress={() => navigation.navigate('CategoryDetail', { title: 'Categoría 1'})}
            />
        </View>
    );
};

export default Expenses;