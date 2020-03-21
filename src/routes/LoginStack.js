import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Authentification/Login';
import Register from "../Authentification/Register";
import HeaderNone from "../shared/headerNone";
import React from 'react';

const screens = {

    Login:{
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Login'/>,
                header: null,
            }
        }
    },
    Register:{
        screen: Register,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Register'/>,
            }
        }
    },

};
const LoginStack = createStackNavigator(screens);
export default LoginStack;
