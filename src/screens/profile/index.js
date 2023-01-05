import React from "react";
import { View, Text, Button } from 'react-native';
import { COLORS } from "../../constants/themes/colors";

import { styles } from "./styles";

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Button
                title="User details"
                color={COLORS.primaryDark}
                onPress={() => navigation.navigate('UserDetails')}
            />
            <Button
                title="User Settings"
                color={COLORS.primaryDark}
                onPress={() => navigation.navigate('UserSettings')}
            />
        </View>
    );
};

export default Profile;