/**
 * Created by ZONGLINA on 16/9/20.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var MyBaseCell = require('./ZAXMyBaseCell');
var MyHeader = require('./MyHeaderView');
var My = React.createClass({
    render() {
        return (
            <ScrollView  style={styles.scrollviewStyle}



            >

                   {/*头视图*/}

                <MyHeader/>

                {/*//底部的cell*/}
                <View style={styles.baceCellViewStyle}>
                    <MyBaseCell
                    leftIcon= "draft"
                    leftTitle="我的钱包"
                    rightText="账户余额:¥100"

                    />

                    <MyBaseCell
                        leftIcon= "like"
                        leftTitle="抵用券"
                        rightText="10张"

                    />

                    <MyBaseCell
                        leftIcon= "card"
                        leftTitle="积分商城"


                    />

                    <MyBaseCell
                        leftIcon= "new_friend"
                        leftTitle="今日推荐"
                        rightIcon="me_new"

                    />

                    <MyBaseCell
                        leftIcon= "pay"
                        leftTitle="我要合作"
                        rightText="轻松开店,招财进宝"

                    />
                </View>

            </ScrollView>

        );
    }
});
const styles = StyleSheet.create({
    scrollviewStyle: {


        backgroundColor: '#e8e8e8',
        marginTop:22
    },

    baceCellViewStyle:{

    }
});

module.exports = My;
