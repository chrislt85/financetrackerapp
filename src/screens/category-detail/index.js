import React from "react";
import { View, Text } from 'react-native';

import { styles } from "./styles";

const CategoryDetail = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category Detail</Text>
        </View>
    );
};

export default CategoryDetail;