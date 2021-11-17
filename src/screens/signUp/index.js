import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Routes from '../../router/routes';

const SignUp = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sign Up Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.Profile)}>
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignUp;