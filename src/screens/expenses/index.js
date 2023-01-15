import React from "react";
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { PieChart, CategoryItem } from "../../components";

import { CATEGORIES } from '../../constants/data/index';
import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const Expenses = ({ navigation }) => {
    
    const onSelected = (item) => {
        navigation.navigate('CategoryDetail', { categoryId: item.id, title: item.title });
    };
    
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />; 

    return (
        <View style={styles.container}>
            
            <PieChart />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>CATEGORÍAS</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
                    <MaterialCommunityIcons name="format-list-bulleted" size={25} color={COLORS.black} />
                </TouchableOpacity>
            </View>

            {/*
            <CategoryItem title="Alimentación" icon="food" color="#99CAFF" amount={300.00} onSelected={() => navigation.navigate('CategoryDetail', { title: 'Categoría 1'})} />
            <CategoryItem title="Farmacias y Salud" icon="medical-bag" color="#6FBAEC" amount={300.00} onSelected={() => navigation.navigate('CategoryDetail', { title: 'Categoría 1'})} />
            <CategoryItem title="Transporte" icon="car" color="#A5D4F3" amount={300.00} onSelected={() => navigation.navigate('CategoryDetail', { title: 'Categoría 1'})} />
            */}
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.categoriesContainer}
            /> 


        </View>
    );
};

export default Expenses;