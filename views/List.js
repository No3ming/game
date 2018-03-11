import React, { Component } from 'react';

class List extends React.Component {
    static navigationOptions = {
        title: '登录',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' });
                }
            />
        );
    }
}
export  default  List
