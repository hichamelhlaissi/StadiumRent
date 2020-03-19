import React from 'react';
import Home from './src/screens/Home';
import NavigatorUser from './src/routes/drawerUser';
import NavigatorOwner from './src/routes/drawerOwner';

const DrawerSelected =()=>{
  let select = 1;
  if (select === 1){
    return <NavigatorUser/>
  }if (select !== 1){
    return <NavigatorOwner/>
  }
  return select;
};
export default function App() {
  console.disableYellowBox = true;
  return (
    <DrawerSelected/>
  );
}

