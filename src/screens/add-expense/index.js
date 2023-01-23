import React, { useState, useReducer, useEffect } from 'react';
import { View, Text, Button, KeyboardAvoidingView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { COLORS } from "../../constants/themes/colors";

import { onInputChange, UPDATED_FORM } from '../../utils/form';
import { Input, Dropdown, DatetimePicker } from '../../components';
import { addExpense } from '../../store/actions';
import { formatDate, createUUID } from '../../utils/functions/index';

import { styles } from "./styles";

const initialState = {
    description: { value: '', error: '', touched: false, hasError: true },
    amount: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,
};

const formReducer = (state, action) => {
    switch (action.type) {
      case UPDATED_FORM:
        const { name, value, hasError, error, touched, isFormValid } = action.data;
        return {
          ...state,
          [name]: {
            ...state[name],
            value,
            hasError,
            error,
            touched,
          },
          isFormValid,
        };
      default:
        return state;
    }
  };

const AddExpense = ({ navigation }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories); 
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        setCategoriesList(categories?.map(category => ({ label: category.title, value: category.id/*.toString()*/ })));
        if (categories.length > 0)
            setSelectedCategory(categories[0].id);
    }, []);

    const onHandleSubmit = () => {
        // Acá se hace dispatch para guardar el nuevo gasto y volver a la pantalla anterior
        dispatch(
            addExpense(
                { id: createUUID(), categoryId: selectedCategory, title: formState.description.value, date: formatDate(selectedDate), amount: formState.amount.value}));
        navigation.navigate('Expenses');
    };
    
    const onHandleChangeInput = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState);
    };

    return (
        <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={'height'}
        enabled>
        <View style={styles.container}>
            
            
            <Dropdown
                label="Categoría"
                placeholderText={"Seleccione una categoría"}
                optionsList={categoriesList}
                defaultValue={selectedCategory}
                onChangeOption={setSelectedCategory}
                style={styles.categorias}
            />
            
            <Input
                label="Descripción"
                placeholder="Ingrese la descripción del gasto"
                placeholderTextColor={COLORS.gray}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={formState.description.value}
                hasError={formState.description.hasError}
                error={formState.description.error}
                touched={formState.description.touched}
                onChangeText={(text) => onHandleChangeInput(text, 'description')}
            />

            <DatetimePicker
                label="Fecha"
                selectedDate={selectedDate}
                onSelectedDate={setSelectedDate}
            />

            <Input
                label="Monto"
                placeholder="Ingrese el monto del gasto"
                placeholderTextColor={COLORS.gray}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                value={formState.amount.value}
                hasError={formState.amount.hasError}
                error={formState.amount.error}
                touched={formState.amount.touched}
                onChangeText={(text) => onHandleChangeInput(text, 'amount')}
            />

            <View style={styles.saveButton}>
                <Button
                    title="Guardar"
                    color={COLORS.primaryDark}
                    onPress={onHandleSubmit}
                    disabled={!formState.isFormValid}
                />
            </View>
        </View>
        </KeyboardAvoidingView>
    );
};

export default AddExpense;