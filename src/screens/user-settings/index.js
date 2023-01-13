import React, { useState } from "react";
import { ScrollView } from 'react-native';

import { SettingOption } from "../../components";
import { styles } from "./styles";

const UserSettings = ({ navigation }) => {
    const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
    
    const onHandleToggleSwitch = () => setDarkModeEnabled(previousState => !previousState);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.containerScroll}>
            <SettingOption 
                title="Modo Oscuro" 
                isEnabled={isDarkModeEnabled} 
                onHandleToggleOption={onHandleToggleSwitch} />
        </ScrollView>
    );
};

export default UserSettings;