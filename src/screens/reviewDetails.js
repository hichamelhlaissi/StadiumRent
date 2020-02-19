import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Test from "../screens/test";
export default function reviewDetails({navigation}) {


    return (
        <View style={styles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            <Button onPress={() => navigation.navigate('Test')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
