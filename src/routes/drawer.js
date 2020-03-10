import React from "react";
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import OrdersStack from "./OrdersStack";
import FavoriteStadiumsStack from "./FavoriteStadiumsStack";
import SubscriptionsStack from "./SubscriptionsStack";
import YourStaduimsStack from "./YourStaduimsStack";
import ScheduleStack from "./ScheduleStack";
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Button} from 'react-native';
import {Container, Header, Body, Content} from 'native-base';



const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    YourStaduims: {
        screen: YourStaduimsStack,
    },
    Schedule: {
        screen: ScheduleStack,
    },
    Profile: {
        screen: ProfileStack,
    },
    Orders: {
        screen: OrdersStack,
    },
    FavoriteStadiums: {
        screen: FavoriteStadiumsStack,
    },
    Subscriptions: {
        screen: SubscriptionsStack,
    },
    About: {
        screen: AboutStack,
    },
},{
    contentComponent: (props) => (
        <Container>
            <Header style={{height: 200, backgroundColor: '#9eccff'}}>
                <Body>
                        <Image
                            style={styles.DrawerImage}
                            source={require('../../assets/Images/App-Image.png')} />
                </Body>
            </Header>
            <Content style={{backgroundColor: '#ffffff'}}>
                    <DrawerItems {...props} />
            </Content>
        </Container>
    ),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
});


export default createAppContainer(RootDrawerNavigator);

const styles = StyleSheet.create({
    DrawerImage:{
        height: 150,
        width: 150,
        borderRadius:75,
        marginLeft: 50,
    }
});
