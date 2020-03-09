import React from 'react';
import Home from './src/screens/Home';
import Navigator from './src/routes/drawer'
export default function App() {
  console.disableYellowBox = true;
  return (
    <Navigator/>
  );
}

