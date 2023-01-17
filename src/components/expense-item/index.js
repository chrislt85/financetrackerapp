import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from "../../constants/themes/colors";
import { styles } from './styles';

const ExpenseItem = ({ item }) => {
    return (
        <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
                <Text style={styles.amount}>${item.amount}</Text>
        </View>
    );
}

export default ExpenseItem;