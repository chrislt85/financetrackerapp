import React from "react";
import { View, Text, Button } from 'react-native';

import { styles } from "./styles";

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button
                title="User details"
                color="#"
                onPress={() => navigation.navigate('UserDetails')}
            />
            <Button
                title="User Settings"
                color="#"
                onPress={() => navigation.navigate('UserSettings')}
            />
        </View>
    );
};

export default Profile;