import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Routes from '../../router/routes';

const Profile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;