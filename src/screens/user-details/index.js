import React from "react";
import { View, Text } from 'react-native';

import { styles } from "./styles";

const UserDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Details</Text>
        </View>
    );
};

export default UserDetails;