import React from 'react'
import {Text, View, Animated, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SocialIcon } from 'react-native-elements'
//import {auth} from '../services/FireBaseConfig'
import {auth, db} from '../services/FireBaseConfig'
import {APPROX_STATUSBAR_HEIGHT} from "react-native-paper/src/constants";
// import * as firebase from "firebase";
// import 'firebase/firestore';
//
// const firebaseConfig = {
//     apiKey: "AIzaSyBrYOM8z6ZwVZeduTQ98sY1KlkcwBW_lbI",
//     authDomain: "stadiumrent.firebaseapp.com",
//     databaseURL: "https://stadiumrent.firebaseio.com",
//     projectId: "stadiumrent",
//     storageBucket: "stadiumrent.appspot.com",
//     messagingSenderId: "883002894442",
//     appId: "1:883002894442:web:d87612cc26cf15df570213",
//     measurementId: "G-3Q4C94Q1B4"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);



export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scroll: new Animated.Value(0),
            email: "",
            username: "",
            password: "",
            userType: "userResponsible",
            happy: true
        };
    }

    handleEmail(value){
        this.setState({email: value})
    };
    handlePassword(value){
        this.setState({password: value})
    };
    handleUsername(value){
        this.setState({username: value})
    };
    signUpUser = (email, password, props) => {
        props = this.props;
        try {
            if (this.state.password.length < 6) {
                alert("please enter atleast 6 characters")
            }
            auth.createUserWithEmailAndPassword(email, password).then(user => {
                db.ref('/users').push({
                    uid: user.user.uid,
                    userType: this.state.userType,
                    happy: this.state.happy
                });
                Alert.alert('Action!', 'L3azz');
            })
        }catch (error) {
            console.log(error)
        }

    };


    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.imageAuth} source={require('../../assets/Images/authImage.png')} />
                <View style={styles.inputs}>
                    <View style={styles.inputContainer}>
                        <Icon style={styles.searchIcon} name="user" size={20} color="#000"/>
                        <TextInput
                            style={styles.input}
                            value={this.state.username}
                            maxLength={22}
                            placeholder="Username"
                            underlineColorAndroid = "transparent"
                            placeholderTextColor = "#a9a9a1"
                            autoCapitalize = "none"
                            onChangeText={(value) => { this.handleUsername(value)}}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon style={styles.searchIcon} name="envelope" size={20} color="#000"/>
                        <TextInput
                            style={styles.input}
                            value={this.state.email}
                            maxLength={22}
                            placeholder="Email address"
                            underlineColorAndroid = "transparent"
                            placeholderTextColor = "#a9a9a1"
                            autoCapitalize = "none"
                            onChangeText={(value) => { this.handleEmail(value)}}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon style={styles.searchIcon} name="lock" size={20} color="#000"/>
                        <TextInput
                            style={styles.input}
                            value={this.state.password}
                            secureTextEntry={true}
                            maxLength={22}
                            placeholder="Password"
                            underlineColorAndroid = "transparent"
                            placeholderTextColor = "#a9a9a1"
                            autoCapitalize = "none"
                            onChangeText={(value) => { this.handlePassword(value)}}
                        />
                    </View>
                </View>
                <View style={styles.loginAndRegister}>
                    <TouchableOpacity style={styles.buttonSubmit} onPress={() => this.signUpUser(this.state.email, this.state.password)}>
                        <Text style={styles.buttonSubmitText}>Register</Text>
                    </TouchableOpacity >
                    <Text style={styles.registerHere} onPress={() => this.props.navigation.navigate('Login')}>Sign in here</Text>
                </View>
                <View style={styles.lineContent}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>Or</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.socialButtonsContainer}>
                    <SocialIcon
                        title='Google'
                        style={styles.googleButton}
                        button
                        type='google'
                        onPress={() => Alert.alert("Google")}
                    />
                    <SocialIcon
                        title='Facebook'
                        style={styles.facebookButton}
                        button
                        type='facebook'
                        onPress={() => Alert.alert("Google")}
                    />
                </View>
                <View style={styles.footerContainer}>
                    <Text style={{textDecorationLine: 'underline'}} onPress={() => Alert.alert("Action")}>Terms & Conditions</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:'100%',
        width:'100%',

    },
    input: {
        height: 40,
        fontSize: 16,
    },
    inputs: {
        marginTop: 15,
        width: '90%',
        alignSelf: 'center',
    },
    searchIcon: {
        padding: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        marginBottom: 20,
        opacity: 0.5,
    },
    loginAndRegister: {
        flexDirection: 'column',
        width: '100%'
    },
    buttonSubmit: {
        backgroundColor: "#5780D9",
        paddingLeft: 12,
        paddingRight: 12,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 15
    },
    buttonSubmitText: {
        fontSize: 14,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 'bold',
    },
    lineContent: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        opacity: 0.2,
    },
    line: {
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        width: 135,
        alignSelf: 'center'
    },
    orText: {
        fontSize: 13
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    googleButton: {
        backgroundColor: "#d93433",
        width: 150,
        height: 50,
        justifyContent: 'center',
        //alignSelf: 'center',
    },
    facebookButton: {
        backgroundColor: "#475993",
        width: 150,
        height: 50,
        justifyContent: 'center',
        //alignSelf: 'center',
    },
    socialButtonText: {
        fontSize: 14,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 'bold',
    },
    footerContainer: {
        width: '100%',
        alignItems: 'center',
        opacity: 0.3,
        marginBottom: 20
    },
    imageAuth: {
        width: '90%',
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    registerHere: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        opacity: 0.3,
    }
});
