import React from "react";
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import OrdersStack from "./OrdersStack";
import FavoriteStadiumsStack from "./FavoriteStadiumsStack";
import SubscriptionsStack from "./SubscriptionsStack";
import MyStaduimsStack from "./MyStaduimsStack";
import ScheduleStack from "./ScheduleStack";
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Button} from 'react-native';
import {Container, Header, Body, Content} from 'native-base';
import {auth} from "../services/FireBaseConfig";
<<<<<<< HEAD
import {Updates} from "expo";
=======
//import AppStack from "./AppStack";
>>>>>>> d5e604e0644fa27e44718cce314514033276f63b



const RootDrawerOwnerNavigator = createDrawerNavigator({

    MyStaduims: {
        screen: MyStaduimsStack,
    },
    Schedule: {
        screen: ScheduleStack,
    },
    Profile: {
        screen: ProfileStack,
    },
    About: {
        screen: AboutStack,
    },
    // App: {
    //     screen: AppStack,
    // },
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
<<<<<<< HEAD
                <Button
                    title="Sign out"
                    onPress={() =>{
                        auth.signOut().then(function() {
                            Updates.reload()
                        }).catch(function(error) {
                            alert('error : ', error)
                        });
                    }}
                />
=======
                {/*<Button*/}
                {/*    title="Sign out"*/}
                {/*    onPress={() =>{*/}
                {/*        auth.signOut().then(function() {*/}
                {/*            props.navigation.navigate('App');*/}
                {/*            console.log('logout');*/}
                {/*            //console.log(auth.currentUser)*/}
                {/*        }).catch(function(error) {*/}
                {/*            alert('error : ', error)*/}
                {/*        });*/}
                {/*    }}*/}
                {/*/>*/}
>>>>>>> d5e604e0644fa27e44718cce314514033276f63b
            </Content>
        </Container>
    ),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'MyStaduims',
});


export default createAppContainer(RootDrawerOwnerNavigator);

const styles = StyleSheet.create({
    DrawerImage:{
        height: 150,
        width: 150,
        borderRadius:75,
        marginLeft: 50,
    }
});
