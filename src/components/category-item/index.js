import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from "../../constants/themes/colors";
import { styles } from './styles';

const CategoryItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
             <MaterialCommunityIcons
                    name={item.icon}
                    size={30}
                    color={item.color}
                />
                <View style={styles.categoryInfoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    {/*<Text style={styles.amount}>${item.amount}</Text>*/}
                </View>
                <View style={styles.categoryButtonContainer}>
                    <MaterialCommunityIcons
                        name='chevron-right'
                        size={40}
                        color={COLORS.text}
                    />
                </View>
        </TouchableOpacity>
    );
}

export default CategoryItem;