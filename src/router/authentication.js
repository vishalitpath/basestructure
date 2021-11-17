import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Routes from './routes';
import Profile from '../screens/profile';



const Stack = createNativeStackNavigator();

const Authenticated = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={Home} options={{
                headerShown : false
            }} />
            <Stack.Screen name={Routes.Profile} component={Profile} options={{ headerShown : false }} />
        </Stack.Navigator>
    );
};

export default Authenticated;