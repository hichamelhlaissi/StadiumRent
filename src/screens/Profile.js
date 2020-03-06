import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Button } from "native-base";
import { Icon } from 'react-native-elements'


export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.header}/>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.info}>UX Designer / Mobile developer</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

                    <View style={styles.socialRow}>
                        <View style={styles.socialIcon}>
                            <Button rounded small transparent onPress={() => console.log('facebook')}>
                                <Icon
                                    size={30}
                                    type="entypo"
                                    color="#3B5A98"
                                    name="facebook-with-circle"
                                />
                            </Button>
                        </View>
                        <View style={styles.socialIcon}>
                            <Button rounded small transparent onPress={() => console.log('twitter')}>
                                <Icon
                                    size={30}
                                    type="entypo"
                                    color="#56ACEE"
                                    name="twitter-with-circle"
                                />
                            </Button>
                        </View>
                        <View style={styles.socialIcon}>
                            <Button rounded small transparent onPress={() => console.log('google')}>
                                <Icon
                                    size={30}
                                    type="entypo"
                                    color="#DD4C39"
                                    name="google--with-circle"
                                />
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#00BFFF",
        height:200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },
    name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
    },
    socialIcon: {
        marginLeft: 14,
        marginRight: 14,
        marginTop: 20,
    },
    socialRow: {
        flexDirection: 'row',
    },
});
