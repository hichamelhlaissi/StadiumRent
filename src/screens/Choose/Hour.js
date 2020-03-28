import React, {useState, Component} from 'react';
import {View, Button, Platform, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import { MaterialIcons, Entypo, FontAwesome} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalWrapper from "react-native-modal-wrapper";
import {APPROX_STATUSBAR_HEIGHT} from "react-native-paper/src/constants";
import CalDate from "./CalDate";

export default class Hour extends Component {
    constructor(props){
        super(props);
        const {state} = props.navigation;
        this.stadiumName = state.params.stadiumName;
        this.IdResponsible=state.params.IdResponsible;
        this.IdStaduim=state.params.IdStaduim;
    }
    state={
         Today : new Date(),
         DataUse: this.Today,
        // TodayDate:this.Today.getDate() + "/"+ parseInt(this.Today.getMonth()+1) +"/"+ this.Today.getFullYear(),

        Info: [
            { Hour: '9 -> 10', date: this.Today, StadeName: 'Soccer Dar Lhamra' },
            { Hour: '10 -> 11', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra'},
            { Hour: '11 -> 12', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra' },
            { Hour: '12 -> 13', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra' },
            { Hour: '13 -> 14', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra'},
        ],

        modalVisible: false,
        isLoading: false,
    };

    componentDidMount() {
        // const { navigation } = this.props;
        // this.focusListener = navigation.addListener('didFocus', () => {
        //     this.setState({ isLoading: true });
        // });
    }

    render(){
        console.log('this.IdResponsible',this.IdResponsible);
        let today = new Date();
        let TodayDate=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();

        return (
            <View style={styles.container}>
                <CalDate/>
                {
                    this.state.isLoading ? <View style={styles.isLoading}><Image source={require('../../../assets/Images/spinner.gif')}/></View>
                        :
                        this.state.Info.length > 0
                            ? this.state.Info.map((Info) => {
                                return (
                                    <View style={styles.cardStyle} key={Info.id}>
                                        <View style={styles.infos}>
                                            <View style={styles.feedbacksView}>
                                                <Text style={styles.HourInfo}>{Info.Hour}</Text>
                                                <FontAwesome style={styles.Calendar} name='calendar' size={20} />
                                                <Text style={styles.HourInfo}>{TodayDate}</Text>
                                            </View>
                                            <View style={styles.feedbacksView}>
                                                <Entypo name='location-pin' size={25} />
                                                <Text style={styles.NameStaduim}>{this.stadiumName}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={styles.Button} onPress={() =>
                                            this.props.navigation.navigate('Order_Summary', {
                                                stadiumName:this.stadiumName,
                                                Day:TodayDate,
                                                Hour: Info.Hour,
                                                IdResponsible: this.IdResponsible,
                                                IdStaduim: this.IdStaduim,
                                            })}>
                                            <Text style={{textAlign: 'center', fontSize:20, marginTop: 5}}>Reserve</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                            : <View style={styles.noOrders}><Text>Empty</Text>
                        </View>
                }


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    noOrders : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#5780D9',
        height: 60,
        width: 370,
        marginTop: 10,
        borderRadius: 30/2,
    },
    infos: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 1,
        height: 50,
    },
    HourInfo: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom:3,
        flexDirection: 'row',
    },

    starsView: {
        width: 80,
        marginLeft: 15,
        marginRight: 10,
    },
    feedbacksView: {
        flexDirection: 'row',
    },
    NameStaduim: {
        color: '#fff',
        fontSize: 16,
        marginTop:2,
    },
    Calendar:{
        marginLeft: 15,
    },
    Button:{
        height:40,
        width:100,
        borderRadius: 50,
        marginTop:9,
        marginRight:2,
        backgroundColor: '#fff',


    }
});
