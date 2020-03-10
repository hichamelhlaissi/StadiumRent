import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import StarRating from "react-native-star-rating";

export default class FavoriteStadiums extends React.Component {

    state = {
        starCount: 3.5,
    };

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardStyle}>
                    <View style={styles.infos}>
                        <Text style={styles.stadiumName}>Stadium name here</Text>
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
                    </View>
                    <Icon style={styles.delete} name="closecircleo" size={22} color="#fff" />
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
    },
    cardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#5780D9',
        height: 85,
        width: 370,
        marginTop: 10,
        borderRadius: 30/2,
    },
    infos: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 12,
        height: 50,
    },
    stadiumName: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 15
    },
    delete: {
        marginTop: 5,
        marginRight: 7,
    },
    starsView: {
        width: 80,
        marginLeft: 15,
        marginRight: 10,
    },
    feedbacksView: {
        flexDirection: 'row',
    },
    feedbacksNumber: {
        color: '#fff',
        fontSize: 12,
    },
});
