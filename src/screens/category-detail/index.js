import React from "react";
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ExpenseItem } from "../../components";
import { EXPENSES } from '../../constants/data/index';
import { styles } from "./styles";

const CategoryDetail = ({ navigation, route }) => {
    
    const { categoryId } = route.params;

    const filteredExpenses = EXPENSES.filter((expense) => expense.categoryId === categoryId); 

    const renderItem = ({ item }) => <ExpenseItem item={item} />; 

    return (
        <View style={styles.container}>
            {
                (filteredExpenses.length > 0) ? 
                    <FlatList
                        data={filteredExpenses}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles.expensesContainer}
                    /> 
                :
                    <Text style={styles.emptyList}>No se han registrado gastos para esta categoría.</Text>
            }
        </View>
    );
};

export default CategoryDetail;