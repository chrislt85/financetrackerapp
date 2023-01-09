import React, { useState } from "react";
import { View, Text } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

import { styles } from "./styles";

const UserSettings = ({ navigation }) => {
    const [darkMode, setDarkMode] = useState(false);

    const onHandleToggle = (isOn) => {
        setDarkMode(isOn);
    }

    return (
        <View style={styles.container}>
            <View style={styles.settingContainer}>
                <Text style={styles.title}>Modo Oscuro</Text>
                <ToggleSwitch
                    isOn={darkMode}
                    onColor="blue"
                    offColor="gray"
                    //label=""
                    //labelStyle={{ color: "black", fontWeight: "900" }}
                    size="large"
                    onToggle={isOn => onHandleToggle(isOn)}
                    />
            </View>
        </View>
    );
};

export default UserSettings;