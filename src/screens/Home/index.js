import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {

    render() {
        return (
            <View style={{
                width: '100%', height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>
                    Home screen
                </Text>
            </View>
        );
    }
}
