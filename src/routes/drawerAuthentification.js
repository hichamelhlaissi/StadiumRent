import React from "react";
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Button} from 'react-native';
import {Container, Header, Body, Content} from 'native-base';
import Login from "../Authentification/Login";
import Register from "../Authentification/Register";
import Authentification from "../Authentification/Authentification";



const RootDrawerAuthNavigator = createDrawerNavigator({

    Authentification: {
        screen: Authentification,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        }),
    },
},{
    initialRouteName: 'Authentification',

});


export default createAppContainer(RootDrawerAuthNavigator);

const styles = StyleSheet.create({
    DrawerImage:{
        height: 150,
        width: 150,
        borderRadius:75,
        marginLeft: 50,
    }
});
