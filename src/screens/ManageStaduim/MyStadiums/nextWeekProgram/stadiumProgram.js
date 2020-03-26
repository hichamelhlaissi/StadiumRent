import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, TouchableOpacity, Image,ScrollView} from 'react-native';
import { MaterialIcons, Entypo, FontAwesome} from '@expo/vector-icons';
import {APPROX_STATUSBAR_HEIGHT} from "react-native-paper/src/constants";


import ScheduleDate from "./scheduleDate";
import {Calendar} from "react-native-calendars";

export default class stadiumProgram extends Component {
    constructor(props){
        super(props);
    }
    state={
        Today : new Date(),
        DataUse: this.Today,
        // TodayDate:this.Today.getDate() + "/"+ parseInt(this.Today.getMonth()+1) +"/"+ this.Today.getFullYear(),

        Program: [
            { Hour: '09 -> 10', date: this.Today, StadeName: 'Soccer Dar Lhamra' },
            { Hour: '10 -> 11', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra'},
            { Hour: '11 -> 12', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra' },
            { Hour: '12 -> 13', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra' },
            { Hour: '13 -> 14', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra'},
            { Hour: '14 -> 15', date: this.Today, StadeName: 'Soccer Dar Lhamra' },
            { Hour: '15 -> 16', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra'},
            { Hour: '16 -> 17', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra' },
            { Hour: '17 -> 18', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra' },
            { Hour: '18 -> 19', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra'},
            { Hour: '19 -> 20', date: this.Today, StadeName: 'Soccer Dar Lhamra' },
            { Hour: '20 -> 21', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra'},
            { Hour: '21 -> 22', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra' },
            { Hour: '22 -> 23', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra' },
            { Hour: '23 -> 00', date: 'TodayDate', StadeName: 'Soccer Dar Lhamra'},
        ],

        modalVisible: false,
        isLoading: false,
    };
    render(){
        let today = new Date();
        let TodayDate=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();

        return (

            <ScrollView>

                <View style={styles.container}>
                    <ScheduleDate/>
                    {
                        this.state.isLoading ? <View style={styles.isLoading}><Image source={require('../../../../../assets/Images/spinner.gif')}/></View>
                            :
                            this.state.Program.length > 0
                                ? this.state.Program.map((Program) => {
                                    return (
                                        <View style={styles.cardStyle} key={Program.id}>
                                            <View style={styles.infos}>
                                                <View style={styles.feedbacksView}>
                                                    <Text style={styles.HourInfo}>{Program.Hour}</Text>
                                                    <FontAwesome style={styles.Calendar} name='calendar' size={20} />
                                                    <Text style={styles.HourInfo}>{TodayDate}</Text>
                                                </View>
                                                <View style={styles.feedbacksView}>
                                                    <Entypo name='location-pin' size={25} />
                                                    <Text style={styles.NameStaduim}>{Program.StadeName}</Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity style={styles.Button} onPress={() => alert('Yaha')}>
                                                <Text style={{textAlign: 'center', fontSize:20, marginTop: 5}}>Reserve</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                                : <View style={styles.noOrders}><Text>Empty</Text>
                                </View>
                    }


                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //marginTop: APPROX_STATUSBAR_HEIGHT,
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
