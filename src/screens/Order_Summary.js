import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Button, Modal, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalWrapper from "react-native-modal-wrapper";
import {APPROX_STATUSBAR_HEIGHT} from "react-native-paper/src/constants";
import StarRating from "react-native-star-rating";
import {auth, db} from "../services/FireBaseConfig";

export default class Order_Summary extends Component {

    constructor(props){
        super(props);
        const {state} = props.navigation;
    }
    state = {
        starCount: 3.7,
        user:{},
        Data:{},
    };
    componentDidMount() {
        this.GetUserData();
    }

    GetUserData =(dataUser, Change=()=>this.setState({Data:dataUser}))=>{
        this.state.user = auth.currentUser;
        let userCon = this.state.user.uid;
        let ref = db.ref("/users");
        console.log(userCon);
        let query = ref.orderByChild("uid").equalTo(userCon);
        query.once("value", function(snapshot, dataU) {
            snapshot.forEach(function(child) {
                console.log(child.val());
                dataU = child.val();
                dataUser = dataU;
                Change();
            });
        });
    };



    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    confirmOrder =()=>{

        if ((this.state.Data.FirstName === "") || (this.state.Data.LastName === "") || (this.state.Data.Phone_Number === "")){
            this.props.navigation.navigate('Profile')
        }if ((this.state.Data.FirstName !== "") && (this.state.Data.LastName !== "") && (this.state.Data.Phone_Number !== "")){
            this.props.navigation.navigate('RequestSent')
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardStyle}>
                    <View style={styles.infos}>
                        <Text style={styles.name}>Soccer Dar Lhamra</Text>
                        <View style={styles.feedbacksView}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                containerStyle={styles.starsView}
                                starSize={17}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                fullStarColor={'#1db700'}
                                emptyStarColor={'#1db700'}
                            />
                            <Text style={styles.feedbacksNumber}>(22)</Text>
                        </View>
                        <View style={styles.status}>
                            <Text style={styles.statusText}>Available</Text>
                        </View>
                        <View style={styles.distance}>
                            <Text style={styles.distanceText}>300m</Text>
                        </View>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.buttonsText}>Change</Text>
                        </TouchableOpacity >
                    </View>
                </View>
                <View style={styles.cardStyle}>
                    <View style={styles.infos}>
                        <Text style={styles.name}>Details</Text>
                        <View style={styles.status}>
                            <Text style={styles.statusText}>Soccer Dar Lhamra</Text>
                        </View>
                        <View style={styles.startingPoint}>
                            <Text style={[styles.startingPointText, {marginRight: 10}]}>14 -> 15 - Feb 26,2020</Text>
                        </View>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.buttonsText}>Change</Text>
                        </TouchableOpacity >
                    </View>

                </View>
                <TouchableOpacity style={styles.ConfirmButton}  onPress={() =>this.confirmOrder()}>
                    <Text style={{textAlign: 'center', fontSize: 30, color: '#fff',marginTop: 3,}}>CONFIRM</Text>
                </TouchableOpacity >

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
    ConfirmButton: {
        marginTop: 324,
        backgroundColor: '#ff4ee1',
        height:50,
        width:'100%',
        borderRadius: 5,
    },
    infos: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 15,
        height: 100,
    },
    cardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        height: 150,
        width: 370,
        marginTop: 10,
        borderRadius: 30/2,
    },
    name: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 15
    },
    car: {
        color: '#000000',
        fontSize: 14,
        marginLeft: 15
    },
    status: {
        flexDirection: 'row',

        width: 200,
        marginLeft: 15
    },
    statusText: {
        color: '#000000',
        fontSize: 14,
        marginRight: 10
    },
    distance: {
        flexDirection: 'row',
        width: 200,
        marginLeft: 15
    },
    distanceText: {
        color: '#000000',
        fontSize: 14,
        marginRight: 10
    },
    startingPoint: {
        flexDirection: 'row',
        width: 200,
        marginLeft: 15
    },
    startingPointText: {
        color: '#000000',
        fontSize: 14,
        marginRight: 10
    },
    destination: {
        flexDirection: 'row',
        width: 200,
        marginLeft: 15
    },
    destinationText: {
        color: '#000000',
        fontSize: 14,
        marginRight: 10
    },
    buttonsView: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 15,
    },
    buttons: {
        borderRadius: 30/2,
        backgroundColor: "#E8F7FF",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 17,
        paddingRight: 17,
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
    reportsButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    feedbacksNumber: {
        color: '#fff',
        fontSize: 12,
    },
    starsView: {
        width: 80,
        marginLeft: 15,
        marginRight: 10,
    },
    feedbacksView: {
        flexDirection: 'row',
    },
});
