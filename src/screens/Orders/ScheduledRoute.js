import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Button, Modal, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalWrapper from "react-native-modal-wrapper";
import {APPROX_STATUSBAR_HEIGHT} from "react-native-paper/src/constants";
//import ajax from '../../services/fetchOrders';
//import Geocoder from 'react-native-geocoding';

export default class ScheduledRoute extends Component {

    state = {
        orders: [
            {'id': 1,'stadiumName': 'Stade Ibn Battouta', 'matchDate': '08/03/2020', 'matchTime': '15:00'}
        ],
        modalVisible: false,
        isLoading: false,
        messageCancellation: "",
    };

    // async componentDidMount() {
    //     const orders = await ajax.fetchOrdersHistory();
    //
    //     for (const cord of orders) {
    //         Geocoder.init("AIzaSyCoIzI4JvkT0MjvaBXH-OSt6d6pYuU1dMg");
    //         Geocoder.from(cord.lat_from, cord.long_from).then(json => {
    //             var addressComponent = json.results[0].address_components[0];
    //             console.log(addressComponent.long_name);
    //             this.setState({orders: orders, isLoading: false, });
    //             return addressComponent.long_name;
    //         });
    //     }
    // }

    // geoCoding() {
    //     for (const cord of this.state.orders) {
    //         Geocoder.init("AIzaSyCoIzI4JvkT0MjvaBXH-OSt6d6pYuU1dMg");
    //         Geocoder.from(cord.lat_from, cord.long_from)
    //             .then(json => {
    //                 var addressComponent = json.results[0].address_components[0];
    //                 const newOrders = this.state.orders.map((order) => {
    //
    //                     return {...order, place_to: addressComponent.long_name};
    //                 });
    //                 this.setState({orders: newOrders });
    //                 return addressComponent.long_name;
    //             });
    //     }
    // }


    cancelOrder(message) {
        if (message.length > 0){
            Alert.alert('Message cancellation sent successfully!!','Your cancellation message is: '+message);
        }else {
            Alert.alert('Erreur!!','Your cancellation message is empty');
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isLoading ? <View style={styles.isLoading}><Image source={require('../../../assets/Images/spinner.gif')}/></View>
                        :
                        this.state.orders.length > 0
                            ? this.state.orders.map((order) => {
                                return (
                                    <View style={styles.cardStyle} key={order.id}>
                                        <View style={styles.infos}>
                                            <Text style={styles.stadiumName}>{order.stadiumName}</Text>
                                            <Text style={styles.matchDate}><Icon name="calendar-alt" size={18} color="#fff" />  {order.matchDate}</Text>
                                            <Text style={styles.matchTime}><Icon name="clock" size={18} color="#fff" /> {order.matchTime}</Text>
                                            <Text style={styles.checkLocation}><Icon name="map-marker-alt" size={18} color="#fff" /> Check location</Text>
                                        </View>
                                        <View style={styles.buttonsView}>
                                            <TouchableOpacity style={styles.buttons} onPress={() => Alert.alert('Action!','Added to favorite')}>
                                                <Text style={styles.buttonsText}><Icon name="star" size={15} color="#EAE114" /> Add to favorite</Text>
                                            </TouchableOpacity >
                                            <TouchableOpacity style={[ styles.buttons, { marginTop: 12 } ]} onPress={() => {this.setModalVisible(true);}}>
                                                <Text style={styles.buttonsText}>Cancel</Text>
                                            </TouchableOpacity >
                                        </View>
                                    </View>
                                )
                            })
                            : <View style={styles.noOrders}><Text>Scheduled orders is empty</Text></View>
                }
                <ModalWrapper
                    animationType="slide"
                    style={{ width: 280, height: 400, paddingLeft: 24, paddingRight: 24 }}
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <View style={styles.textAreaContainer} >
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholder="Enter your cancellation reason"
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={true}
                                    value={this.state.messageCancellation}
                                    onChangeText={e => {
                                        this.setState({
                                            messageCancellation: e,
                                        });
                                    }}
                                />
                            </View>
                            <View style={styles.cancelButtons}>

                                <Button title="CANCEL" type="regular" onPress={() => {this.setModalVisible(!this.state.modalVisible);}} />
                                <Button title="SEND" type="primary" onPress={() => {this.setModalVisible(!this.state.modalVisible);this.cancelOrder(this.state.messageCancellation)}} />
                            </View>
                        </View>
                    </View>
                </ModalWrapper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    noOrders : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    isLoading : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infos: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 15,
        height: 100,
    },
    tabBar: {
        marginTop: APPROX_STATUSBAR_HEIGHT,
        backgroundColor: '#5780D9',
    },
    cardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#5780D9',
        height: 150,
        width: 370,
        marginTop: 10,
        borderRadius: 30/2,
    },
    stadiumName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 15
    },
    matchDate: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 15
    },
    matchTime: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 15,
    },
    checkLocation: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 15,
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
    textAreaContainer: {
        borderColor: "#333333",
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start"
    },
    cancelButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    }
});
