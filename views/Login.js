import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

class Login extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Home', { name: 'Jane' })
                }
            />
        );
    }
}
export  default  Login
