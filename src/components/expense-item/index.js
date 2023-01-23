import React from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
//import { MaterialCommunityIcons } from '@expo/vector-icons';


//import { COLORS } from "../../constants/themes/colors";
import { styles } from './styles';

const ExpenseItem = ({ item, onHandleDelete }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onHandleDelete(item)}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.amount}>${item.amount}</Text>
        </TouchableOpacity>
    );
}

export default ExpenseItem;