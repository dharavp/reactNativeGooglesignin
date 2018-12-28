import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

export default class Splash extends Component {
    googleSignOut() {
        try {
            GoogleSignin.revokeAccess();
            GoogleSignin.signOut();
        } catch (error) {
            alert(error);
        }
    };
    componentWillMount() {
        GoogleSignin.configure();
    }
    onGoogleClick() {
        GoogleSignin.signIn()
            .then((data) => {
                if (data.user) {
                    console.log(JSON.stringify(data))
                }
                setTimeout(() => {
                    this.googleSignOut()
                }, 400);
            })
            .catch((error) => {
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    console.log("signIn cancelled")
                    // user cancelled the login flow
                } else if (error.code === statusCodes.IN_PROGRESS) {
                    console.log("in proress")
                    // operation (f.e. sign in) is in progress already
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                } else {
                    // some other error happened
                }
            })
            .done(() => {
            });
    }
    render() {
        return (
            <View style={{
                width: '100%', height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <TouchableOpacity
                    style={{
                        height: 50, width: 100, backgroundColor: '#f8956d'
                    }}
                    onPress={this.onGoogleClick.bind(this)}>
                    <View style={{
                        width: '100%', height: '100%',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Text style={{ color: 'white' }}>Google SignIn</Text>
                    </View>

                    <Text style={{ color: '#000' }}>second text</Text>
                    <Text style={{ color: '#000' }}>fourth text</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
