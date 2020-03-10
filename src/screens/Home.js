import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, AppState, Image, Dimensions} from 'react-native';
import {db} from '../services/FireBaseConfig';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps'
import { Linking } from 'expo';
import * as IntentLauncher from 'expo-intent-launcher';
import Carousel from 'react-native-snap-carousel';


export default class Home extends Component {
    constructor(props){
        super(props);
        const {state} = props.navigation;
        if (Platform.OS === 'android' && !Constants.isDevice || Platform.OS === 'ios' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
        Location.hasServicesEnabledAsync().then(
            data=>{
                console.log(data)
            }
        )
    }
    state = {
        locationPermission :false,
        departInfo:{},
        destinationInfo:{
            "lat": 34.076353,
            "lng": -6.754076
        },
        Data: {},
        location: null,
        errorMessage: null,
        markers: [],
        appState: AppState.currentState,
        coordinates: [
            { name: 'Hamid', latitude: 34.066645, longitude: -6.762011, image: require('../../assets/Images/image.jpg') },
            { name: 'Rachel', latitude: 34.076353, longitude: -6.754076, image: require('../../assets/Images/image.jpg') },
            { name: 'HASHIM', latitude: 34.077499, longitude: -6.759966, image: require('../../assets/Images/image.jpg') },
            { name: 'Fared', latitude: 34.062096, longitude: -6.772277, image: require('../../assets/Images/image.jpg') },
            { name: 'Saber', latitude: 34.056736, longitude: -6.771318, image: require('../../assets/Images/image.jpg') },
        ]
    };


    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.requestlocation();
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });

        let initialPosition = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
        };
        this.setState({
            initialPosition,
            locationPermission:true,
            departInfo:{
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            } });
        console.log(this.state.initialPosition)

    };
    requestlocation =()=>{
        Alert.alert("alert Message", "Allow Location", [
            {
                text: 'Open Settings',
                onPress: () => this.goToSettings(),
                style: 'cancel',
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
        ]);

    };
    goToSettings = () => {
        if (Platform.OS === 'ios') {
            // Linking for iOS
            Linking.openURL('app-settings:')

        } else {
            //   IntentLauncher for Android
            IntentLauncher.startActivityAsync(
                IntentLauncher.ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS
            );
        }
    };

    componentDidMount() {
        this.getData();

    }

    getData = ()=>{
        db.ref('/todos').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let todoItems = {...data};
            let todosKey = Object.keys(todoItems);
            this.setState({
                Data: todoItems[todosKey],
            });

        });
        console.ignoredYellowBox = [
            'Setting a timer'
        ]
    };

    onCarouselItemChange = (index) => {
        let location = this.state.coordinates[index];

        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        });

        this.state.markers[index].showCallout()
    };


    onMarkerPressed = (location, index) => {
        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        });

        this._carousel.snapToItem(index);
    };
    renderCarouselItem = ({ item }) =>
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Image style={styles.cardImage} source={item.image} />
                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Hour', {data:'Hicham Elhlaissi'})}>
                <Text>Go Order</Text>
            </TouchableOpacity>
        </View>;
    render() {


    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                     provider={PROVIDER_GOOGLE}
                     ref={map => this._map = map}
                     showsUserLocation={true}
                     initialRegion={this.state.initialPosition}
            >
                {
                    this.state.coordinates.map((marker, index) => (

                        <Marker
                            key={marker.name}
                            ref={ref => this.state.markers[index] = ref}
                            onPress={() => this.onMarkerPressed(marker, index)}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        >
                            <Callout>
                                <Text>{marker.name}</Text>
                            </Callout>

                        </Marker>
                    ))
                }
            </MapView>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.coordinates}
                containerCustomStyle={styles.carousel}
                renderItem={this.renderCarouselItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={300}
                removeClippedSubviews={false}
                onSnapToItem={(index) => this.onCarouselItemChange(index)}
            />
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
    textStyle: {
        width: 100,
        height: 1000,
    },
    carousel: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 48
    },
    cardContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: 200,
        width: 300,
        padding: 24,
        borderRadius: 24
    },
    cardImage: {
        height: 120,
        width: 300,
        bottom: 0,
        position: 'absolute',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
    },
    cardTitle: {
        color: 'white',
        fontSize: 22,
        alignSelf: 'center'
    },
    chooseTaxi:{
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        width:'100%'
    },
    search:{
        position: 'absolute',
        top: 0,
        width:'100%'
    }
});
