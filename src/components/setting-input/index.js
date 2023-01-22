import React from "react";
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

const SettingInput = ({ title, content, onHandleChange }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.content} 
                    value={content}
                    placeholder="Ingrese nombre"
                    onChangeText={onHandleChange}
                />
            </View>
        </View>
    );
}

export default SettingInput;