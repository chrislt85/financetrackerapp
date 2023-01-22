import React from "react";
import { View, Text/*, TouchableOpacity*/, FlatList } from 'react-native';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions';

import { PieChart, CategoryItem } from "../../components";

//import { CATEGORIES } from '../../constants/data/index';
//import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const Expenses = ({ navigation }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories); 

    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('CategoryDetail', { categoryId: item.id, title: item.title });
    };
    
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />; 

    return (
        <View style={styles.container}>
            
            {/*<PieChart />*/}

            <View style={styles.titleContainer}>
                <Text style={styles.title}>CATEGORÍAS</Text>
                {/*<TouchableOpacity onPress={() => navigation.navigate("Categories")}>
                    <MaterialCommunityIcons name="format-list-bulleted" size={25} color={COLORS.black} />
                </TouchableOpacity>*/}
            </View>

            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.categoriesContainer}
            />
        </View>
    );
};

export default Expenses;