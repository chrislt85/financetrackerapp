import React from "react";
import { View, Text, Switch } from 'react-native';
import { styles } from './styles';

const SettingOption = ({ title, isEnabled, onHandleToggleOption }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onHandleToggleOption}
                value={isEnabled}
            />
        </View>
    );
}

export default SettingOption;