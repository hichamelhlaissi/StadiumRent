import React from 'react';
import Home from './src/screens/Home';
import NavigatorUser from './src/routes/drawerUser';
import NavigatorOwner from './src/routes/drawerOwner';
import NavigatorAuth from  './src/routes/drawerAuthentification'
import {auth} from "./src/services/FireBaseConfig";







// const DrawerSelected =()=>{
//     let select = 1;
//     auth.onAuthStateChanged(function(user) {
//         if (user) {
//             return <NavigatorUser/>
//         }else {
//             return <NavigatorAuth/>}
//     });
//     return select;
// };
export default class App extends React.Component{
    state = {
        select: null
    };

    DrawerSelected =()=>{
        let select = null;
        auth.onAuthStateChanged(function(user) {
            if (user) {
                select = 2
            } else {
                select = 1;
                console.log(select);
            }
        });
        if (select === 1){
            return <NavigatorAuth/>
        }if (select === 2){
            return <NavigatorUser/>
        }if (select === 3){
            return <NavigatorOwner/>
        }
        return select;
    };
    render() {
        console.disableYellowBox = true;
        return (
            <DrawerSelected/>
        );
    }

}

