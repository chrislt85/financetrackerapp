import React from "react";
import { View, Text } from 'react-native';

import { styles } from "./styles";

const UserSettings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Settings</Text>
        </View>
    );
};

export default UserSettings;