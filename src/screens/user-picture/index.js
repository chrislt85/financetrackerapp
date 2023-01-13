import React from "react";
import { View, Text, Image } from 'react-native';

import { styles } from "./styles";

const UserPicture = ({ navigation, route }) => {
    
    const { pictureUri } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: pictureUri }} />
        </View>
    );
};

export default UserPicture;