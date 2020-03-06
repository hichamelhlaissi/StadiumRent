import { createStackNavigator } from 'react-navigation-stack';
import Subscriptions from '../screens/Subscriptions'
import Header from "../shared/header";
import React from 'react';

const screens = {
    Subscriptions:{
        screen: Subscriptions,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Subscriptions'/>,
            }
        }
    },

};
const SubscriptionsStack = createStackNavigator(screens);
export default SubscriptionsStack;
