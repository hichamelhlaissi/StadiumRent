import React from 'react';
import {Alert, Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SubscriptionsStack from '../../routes/SubscriptionsStack'

export default class Subscriptions extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardStyle}>
                    <View>
                        <Text style={styles.subscriptionName}><Icon name="vinyl" size={22} color="#5780D9" /> Subscription name</Text>
                        <View style={styles.infos}>
                            <Text>Address : <Text style={{color: '#9b9b9b'}}>Hay salam</Text></Text>
                            <Text>Time : <Text style={{color: '#9b9b9b'}}>Friday (5:00 -> 6:00)</Text></Text>
                            <Text>Payment : <Text style={{color: '#9b9b9b'}}>Monthly</Text></Text>
                            <Text>Status : <Text style={{color: 'green'}}>Accepted</Text></Text>
                        </View>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.buttons} onPress={() => Alert.alert('Action!','Edit')}>
                            <Text style={styles.buttonsText}>Edit</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={[ styles.buttons, { marginTop: 12 } ]} onPress={() => Alert.alert('Action!','Cancel')}>
                            <Text style={styles.buttonsText}>Cancel</Text>
                        </TouchableOpacity >
                    </View>
                </View>
                <TouchableOpacity style={styles.newSubscriptionButton} onPress={() => this.props.navigation.navigate('ChooseStadium')}>
                    <Text style={styles.newSubscriptionButtonText}>Add new subscription</Text>
                </TouchableOpacity >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    cardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#dcdcdc',
        height: 150,
        width: 370,
        marginTop: 10,
        borderRadius: 30/2,
    },
    subscriptionName: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 15
    },
    infos: {
        flexDirection: 'column',
        marginLeft: 25,
        marginTop: 8,
    },
    buttonsView: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 10,
    },
    buttons: {
        borderRadius: 30/2,
        backgroundColor: "#E8F7FF",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
    },
    buttonsText: {
        fontSize: 12,
        color: "#5780D9",
        textTransform: "uppercase",
        textAlign: "center",
    },
    newSubscriptionButton: {
        borderRadius: 30/2,
        backgroundColor: "#E8F7FF",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        width: 300
    },
    newSubscriptionButtonText: {
        fontSize: 12,
        color: "#5780D9",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 'bold',
    }
});
