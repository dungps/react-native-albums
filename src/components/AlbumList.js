import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

import AlbumDetail from './AlbumDetail';

module.exports = class AlbumList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
        };
    }

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                this.setState({ albums: responseJson });
            });
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }
    
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};
