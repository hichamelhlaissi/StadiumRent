import React from 'react';
import Home from './src/screens/Home';
import NavigatorUser from './src/routes/drawerUser';
import NavigatorOwner from './src/routes/drawerOwner';
import NavigatorAuth from  './src/routes/drawerAuthentification'
import {auth} from "./src/services/FireBaseConfig";
import {ActivityIndicator, View} from "react-native";


export default class App extends React.Component{

    constructor(){
        super();
        this.state = {
            user:{},

        }
    }
     DrawerSelected =()=>{

        this.state.user = auth.currentUser;
        console.log("hadaghauser", this.state.user);
        if (this.state.user) {
            console.log("loginaaa", this.state.user);
            return <NavigatorUser/>
        } if (!this.state.user) {
            console.log("waaaaaaaaaaaaalo", this.state.user);
            return <NavigatorAuth/>
        }
        return this.state.user;
    };
    componentDidMount() {
        this.DrawerSelected();
    }

    render() {
        console.disableYellowBox = true;

        return (
            <this.DrawerSelected/>
        );
    }

}

