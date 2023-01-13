import React from "react";
import { View, Text } from 'react-native';
import { styles } from './styles';

const SettingInput = ({ title, content }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
}

export default SettingInput;