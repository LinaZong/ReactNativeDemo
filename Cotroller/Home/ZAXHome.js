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
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView,

} from 'react-native';

/********导入外部的组件类*******/
var HomeDetial = require('./ZAXHomeDetial');
var HomeTopView = require('./ZAXHomeTopView');

var searchWith = require('Dimensions').get('window').width;
var Home = React.createClass({
    render() {
        return (

            <View style={styles.container}>

                {/*首页的导航条*/}
                {this.rendernavigationBar()}

                {/*首页的主要内容*/}

                <ScrollView
                >
                    {/*头部的View*/}

                    <HomeTopView
                        popTopHome={() => this.pushToDetial()}

                    />

                    <TouchableOpacity onPress={()=>{this.pushToDetial()}}>
                    <View>

                        <Text>1111111111</Text>

                    </View>

                    </TouchableOpacity>

                </ScrollView>



            </View>

        );
    },
    //跳转到商品详情页面
    pushToDetial(data){

        this.props.navigator.push({

            component: HomeDetial,
            title: '详情页'
        })
    },
    //处理URL
    dealWithUrl(){
        return url.replace('imeituan://www.meituan.com/web/?url=', '');

    },

// {/*首页的导航条*/}
    rendernavigationBar(){

        return (
            <View style={styles.navBarStyle}>
                {/*定位*/}
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={{marginTop: 30, color: 'white'}}>定位所在地</Text>
                </TouchableOpacity>
                {/*搜索框*/}
                <TextInput placeholder='输入商家、品类、商圈'
                           style={styles.SearchStyle}
                >

                </TextInput>

                {/*消息和扫一扫*/}

                <View style={styles.navRightBackViewStyle}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightBackViewStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={{uri: 'icon_homepage_scan'}}
                               style={[styles.navRightBackViewStyle, {marginLeft: 5}]}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    },


});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },


    SearchStyle:{  //设置搜索框

        width:searchWith * 0.6,
        height:35,
        backgroundColor:'white',
        marginTop:  22,
        borderRadius:15,
        //内左边距
        paddingLeft:10,
    },
    navRightBackViewStyle:{
        marginTop:10,
        flexDirection:'row',
        width: Platform.OS === 'ios' ? 25 : 20,
       height: Platform.OS === 'ios' ? 25 : 20,

    },
    navBarStyle:{

        height: 64,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',



    }
});

module.exports = Home;
/**
 * Created by ZONGLINA on 16/9/20.
 */
