import React from 'react';
import Home from './src/screens/Home';
import NavigatorUser from './src/routes/drawerUser';
import NavigatorOwner from './src/routes/drawerOwner';
import NavigatorAuth from  './src/routes/drawerAuthentification'
import {auth, db} from "./src/services/FireBaseConfig";
import {ActivityIndicator, View} from "react-native";


export default class App extends React.Component{

    constructor(){
        super();
        this.state = {
            user:{},
            userInfo:{}

        }
    }
    //  DrawerSelected =()=>{
    //
    //     this.state.user = auth.currentUser;
    //      this.state.userInfo = db.ref('users').child('uid').equalTo(this.state.user.uid);
    //     //console.log("hadaghauser", this.state.user);
    //     if (this.state.userInfo.userType === "userNormal") {
    //         console.log("normaaaaaaaaaaaaaal");
    //         return <NavigatorUser/>
    //     } if (this.state.userInfo.userType === "userResponsible") {
    //         console.log("owneeeeeeeeeeeeeeeeeer");
    //         return <NavigatorOwner/>
    //     }
    //     return this.state.user;
    // };
    // componentDidMount() {
    //     this.DrawerSelected();
    // }

    render() {
        console.disableYellowBox = true;

        return (
            <NavigatorUser/>
        );
    }

}

