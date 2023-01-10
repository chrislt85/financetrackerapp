import React, { useState } from "react";
import { View, Text, Switch } from 'react-native';

import { styles } from "./styles";

const UserSettings = ({ navigation }) => {
    const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

    const onHandleToggleSwitch = () => setDarkModeEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.settingContainer}>
                <Text style={styles.title}>Modo Oscuro</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDarkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={onHandleToggleSwitch}
                    value={isDarkModeEnabled}
                />
            </View>
        </View>
    );
};

export default UserSettings;