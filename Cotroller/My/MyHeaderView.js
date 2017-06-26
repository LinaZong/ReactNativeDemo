
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
var MyBaseCell = require('./ZAXMyBaseCell');
var MyHeader = require('./ZAXMyOrderView');
var screenWiths = require('Dimensions').get('window').width;
var Shop = React.createClass({
    render() {
        return (
            <View style={styles.container}>

            {/*个人相关信息*/}
                {this.renderMineHeaderView()}
                    {/*查看全部订单*/}

                    <MyBaseCell
                        leftIcon= "collect"
                        leftTitle="我的订单"
                        rightText="查看全部订单"
                    />

                <MyHeader/>
            </View>
        );
    },
    renderMineHeaderView(){
        return(

            <View  style={styles.mimeStyle}>

                {/*//我的信息*/}
                <View style={styles.myStyle}>


                    <Image  source={{uri:'new_friend'}} style={{width:60,height:60,borderRadius:30,position : 'absolute',left:10,
                        top:20,}}/>
                    <Text    style={{position : 'absolute',left:90, color:'white', fontSize:15,
                        top:40,}}
                    >ZAX电商</Text>
                    <Image  source={{uri:'icon_cell_rightArrow'}} style={{width:15,height:15, position : 'absolute',right:10,
                        top:50,
                    }}/>
                    {this.renderRecomment()}
                </View>

        </View>
        )

    },

    renderRecomment(){
        return (
            <View style={styles.shadeStyle}>
                <View style={styles.backViewStyle}>
                    <Text>100</Text>
                    <Text>优惠券</Text>
                </View>


                <View style={styles.backViewStyle}>
                    <Text >12</Text>
                    <Text >评价</Text>
                </View>

                <View  style={styles.backViewStyle}>
                    <Text >50</Text>
                    <Text >收藏</Text>
                </View>


            </View>
        )
    }


});

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        height:200


    },
    mimeStyle: {
       backgroundColor: 'rgba(255,75,42,1.0)',
        height: 150,



    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    myStyle:{

        flexDirection : 'row',
        alignItems : 'center',
    },
    shadeStyle:{
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor: 'white',
        opacity: 0.5,
        position : 'absolute',
        top:110,
        height: 40,

    },
    backViewStyle:{

        width: screenWiths / 3,
        borderRightWidth : 1,
        borderRightColor: 'black',
        alignItems:'center'
    }

});

module.exports = Shop;