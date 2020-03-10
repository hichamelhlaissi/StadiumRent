import { createStackNavigator } from 'react-navigation-stack';
import YourStaduims from "../screens/ManageStaduim/YourStaduims";
import Header from "../shared/header";
import React from 'react';

const screens = {
    YourStaduim:{
        screen: YourStaduims,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Your Staduims'/>,
            }
        }
    },

};
const YourStaduimsStack = createStackNavigator(screens);
export default YourStaduimsStack;
