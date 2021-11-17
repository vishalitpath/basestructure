import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Routes from './routes';
import Login from '../screens/login';
import SignUp from '../screens/signUp';

const Stack = createNativeStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.SignUp} component={SignUp} />

        </Stack.Navigator>
    );
};

export default NotAuthenticated;