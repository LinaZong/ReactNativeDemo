/**
 * Created by ZONGLINA on 16/9/20.
 */



import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

var HomeDetial = React.createClass({
    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={() =>{this.popToHome()}}>
                <Text style={styles.welcome}>
                   首页跳转的第二级页面
                </Text>
              </TouchableOpacity>
            </View>
        );
    },
    popToHome(data){
        this.props.navigator.pop();

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = HomeDetial;

