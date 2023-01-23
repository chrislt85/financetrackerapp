import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ExpenseItem } from "../../components";
//import { EXPENSES } from '../../constants/data/index';

import { ModalDeleteItem } from '../../components';

//import { selectTask, saveTask, dropTask, loadTask, checkTask } from "../../store/item.slice";
import { selectExpense, removeExpense } from '../../store/actions';

import { styles } from "./styles";

const CategoryDetail = ({ navigation, route }) => {
    
    const { categoryId } = route.params;
    
    const dispatch = useDispatch();
    
    const expenses = useSelector((state) => state.expenses.expenses);
    const selectedExpense = useSelector((state) => state.expenses.selectedExpense);

    const [modalVisible, setModalVisible] = useState(false);

    const filteredExpenses = expenses.filter((expense) => expense.categoryId === categoryId); 

    const renderItem = ({ item }) => <ExpenseItem item={item} onHandleDelete={onHandleDelete} />; 

    const onHandleDelete = (item) => {
        dispatch(selectExpense(item.id));// selecciono el item a eliminar
        setModalVisible(!modalVisible);
    }
  
    const onHandleDeleteItem = () => {
        dispatch(removeExpense(selectedExpense.id));
        setModalVisible(!modalVisible);
      }
      
      const onHandleCancel = () => {
        setModalVisible(!modalVisible);
      }

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
            <ModalDeleteItem modalVisible={modalVisible} selectedExpense={selectedExpense} onHandleDeleteItem={onHandleDeleteItem} onHandleCancel={onHandleCancel} />
        </View>
    );
};

export default CategoryDetail;