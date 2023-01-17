import React from "react";
import { View, Text, FlatList } from 'react-native';

import { ExpenseItem } from "../../components";
import { EXPENSES } from '../../constants/data/index';
import { styles } from "./styles";

const CategoryDetail = ({ navigation, route }) => {
    
    const { categoryId } = route.params;

    const filteredExpenses = EXPENSES.filter((expense) => expense.categoryId === categoryId); 

    /*const item = {
        id: 1,
        categoryId: 1,
        title: 'Compra supermercado',
        date: '01/01/2023',
        amount: 5000.00
    };*/

    const renderItem = ({ item }) => <ExpenseItem item={item} />; 

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredExpenses}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.expensesContainer}
                ListEmptyComponent={(<Text style={styles.emptyList}>No se han registrado gastos para esta categoría.</Text>)}
            /> 
            {/*<ExpenseItem item={item} />*/}
        </View>
    );
};

export default CategoryDetail;