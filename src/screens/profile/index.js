import React, { /*useState,*/ useEffect/*, useCallback*/ } from "react";
//import { useFocusEffect } from '@react-navigation/native';
import { View, Text, /*Button, Image,*/ TouchableOpacity } from 'react-native';
//import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import { /*ProfileAvatar,*/ SettingButton } from "../../components";
import { loadProfile, signOut } from '../../store/actions';

//import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const Profile = ({ navigation }) => {
    const dispatch = useDispatch();
    //const profileInfo = useSelector((state) => state.profile);
    const userId = useSelector((state) => state.auth.userId);

    //const [profilePicture, setProfilePicture] = useState(null);
    //const [profileName, setProfileName] = useState(null);

    const onHandlerSignOut = () => {
        dispatch(signOut());
    };

    /*useEffect(() => {
        setProfilePicture(profileInfo?.userPicture);
        setProfileName(profileInfo?.userName);
      }, []);*/

    useEffect(() => {
        dispatch(loadProfile(userId));
    }, [dispatch]);


    return (
        <View style={styles.container}>
            {/*<ProfileAvatar pictureUri={profilePicture} isEditable={false} onHandlePictureDetail={() => null} onHandleTakePicture={() => null} />

            <Text style={styles.profileName}>{profileName}</Text>*/}
            
            <SettingButton title="Detalle de Usuario" icon="md-person-circle-outline" onSelect={() => navigation.navigate('UserDetails')} />
            {/*<SettingButton title="Configuraciones" icon="settings-sharp" onSelect={() => navigation.navigate('UserSettings')} />*/}
                        
            <TouchableOpacity style={styles.logoutButton} onPress={onHandlerSignOut}>
                <Text style={styles.logoutButtonText}>Desloguear</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;