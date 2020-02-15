import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'
import ReviewDetails from '../screens/reviewDetails'
import Header from "../shared/header";
import React from 'react';
const screens = {
  Home:{
      screen: Home,
    navigationOptions: ({ navigation }) => {
        return {
        headerTitle: () => <Header navigation={navigation} title='Home'/>,
        }
    }
  },
    ReviewDetails: {
      screen: ReviewDetails,
      navigationOptions: {
        title: 'Review',
      }
    },
};
const HomeStack = createStackNavigator(screens);
export default HomeStack;
