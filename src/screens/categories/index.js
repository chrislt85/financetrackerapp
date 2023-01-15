import React from "react";
import { View, Text, Button } from 'react-native';
import { COLORS } from "../../constants/themes/colors";

import { styles } from "./styles";

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
        </View>
    );
};

export default Categories;