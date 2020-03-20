import React from 'react'
import {Text, View, Animated, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SocialIcon } from 'react-native-elements'
//import {auth} from '../services/FireBaseConfig'
import {auth} from '../services/FireBaseConfig'



export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scroll: new Animated.Value(0),
            email: "",
            username: "",
            password: "",
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
            auth.createUserWithEmailAndPassword(email, password)
        }catch (error) {
            console.log(error)
        }

    };


    render(){
        return (
            <View style={styles.content}>
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
                <TouchableOpacity style={styles.buttonSubmit} onPress={() => this.signUpUser(this.state.email, this.state.password)}>
                    <Text style={styles.buttonSubmitText}>Register</Text>
                </TouchableOpacity >
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'column',
        //backgroundColor: '#000',
        //height: 600,
        justifyContent: 'space-between',
    },
    input: {
        height: 40,
        fontSize: 16,
    },
    inputs: {
        marginTop: 15,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 30
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
    buttonSubmit: {
        backgroundColor: "#5780D9",
        paddingLeft: 12,
        paddingRight: 12,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 30
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
        marginBottom: 30
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
        marginBottom: 30
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
        opacity: 0.3
    }
});
