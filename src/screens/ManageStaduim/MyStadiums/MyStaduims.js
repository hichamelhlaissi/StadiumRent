import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class MyStaduims extends React.Component{
    state = {
        name: "",
        responsible: "",
        address: "",
        phone: "",
        payment: "",
        status: "",
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardStyle}>
                    <View>
                        <Text style={styles.name}><Icon name="vinyl" size={22} color="#5780D9" /> {this.state.name}</Text>
                        <View style={styles.infos}>
                            <Text>Responsible : <Text style={{color: '#9b9b9b'}}>{this.state.responsible}</Text></Text>
                            <Text>Address : <Text style={{color: '#9b9b9b'}}>{this.state.address}</Text></Text>
                            <Text>Phone number : <Text style={{color: '#9b9b9b'}}>{this.state.phone}</Text></Text>
                            <Text>Payment : <Text style={{color: '#9b9b9b'}}>{this.state.payment}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={{fontWeight: 'bold'}}>Status : <Text style={{color: 'green'}}>Accepted</Text></Text>
                        <TouchableOpacity style={styles.buttons} onPress={() => Alert.alert('Action!','Edit')}>
                            <Text style={styles.buttonsText}>Add scheduled to the next week</Text>
                        </TouchableOpacity >
                    </View>
                </View>
                <TouchableOpacity style={styles.addNewStadiumButton} onPress={() => this.props.navigation.navigate('addNewStadium')}>
                    <Text style={styles.addNewStadiumButtonText}>Add new stadium</Text>
                </TouchableOpacity >
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    cardStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#dcdcdc',
        height: 180,
        width: "95%",
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 30/2,
    },
    name: {
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
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        width: '95%',
        alignSelf: 'center'
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
        fontSize: 10,
        color: "#5780D9",
        textTransform: "uppercase",
        textAlign: "center",
    },
    addNewStadiumButton: {
        backgroundColor: "#5780D9",
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    addNewStadiumButtonText: {
        fontSize: 14,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 'bold',
    }
});
