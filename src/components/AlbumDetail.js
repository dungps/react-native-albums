import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 19,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 0,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
});

module.exports = class AlbumDetail extends Component {
    onPress() {
        Linking.openURL(this.props.album.url);
    }

    render() {
        console.log(this.props);
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{ uri: this.props.album.thumbnail_image }} />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={styles.imageStyle} source={{ uri: this.props.album.image }} />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onPress.bind(this)}>Buy Now</Button>
                </CardSection>
            </Card>
        );
    }
};