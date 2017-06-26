/**
 * Created by ZONGLINA on 16/9/20.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,//判断当前系统
    Navigator,
} from 'react-native';


/************引入外部组件类******************/
import TabNavigator from 'react-native-tab-navigator';
var HoneType  = require('../Home/ZAXHome');
var  ShopType = require('../Shop/ZAXShop');
var  MyType = require('../My/ZAXMy');
var  MoreType = require('../More/ZAXMore');

var Main = React.createClass({


    getInitialState(){
        return{
            selectedTab: 'home'
        }
    },
    render() {
        return (
    <TabNavigator>
        {/*首页*/}
        <TabNavigator.Item
            title = "首页"
            renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}}  style={styles.tabbarIconStyle} />} //图标
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.tabbarIconStyle} />}  //选择图标
            selected={this.state.selectedTab === 'home'}
            onPress={() =>this.setState({selectedTab:'home'})}
            selectedTitleStyle = {styles.seletedTitileStyle}

        >

            <Navigator
                initialRoute={{name:'首页',component:HoneType}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />



        </TabNavigator.Item>
        {/*商家*/}
        <TabNavigator.Item
            title = "商家"
            renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}}  style={styles.tabbarIconStyle} />} //图标
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.tabbarIconStyle} />}  //选择图标
            selected={this.state.selectedTab === 'shop'}
            onPress={() => this.setState({ selectedTab: 'shop' })}
            selectedTitleStyle = {styles.seletedTitileStyle}

        >

            <Navigator
                initialRoute={{name:'商家',component:ShopType}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />

        </TabNavigator.Item>
        {/*我的*/}
        <TabNavigator.Item

            title = "我的"
            renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}}  style={styles.tabbarIconStyle} />} //图标
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.tabbarIconStyle} />}  //选择图标
            onPress={() => this.setState({ selectedTab: 'my' })}
            selected={this.state.selectedTab === 'my'}
            selectedTitleStyle = {styles.seletedTitileStyle}

        >

            <Navigator
                initialRoute={{name:'我的',component:MyType}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />



        </TabNavigator.Item>
        {/*更多*/}
        <TabNavigator.Item

            title = "更多"
            renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}}  style={styles.tabbarIconStyle} />} //图标
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.tabbarIconStyle} />}  //选择图标
            onPress={() => this.setState({ selectedTab: 'more' })}
            selected={this.state.selectedTab === 'more'}
            selectedTitleStyle = {styles.seletedTitileStyle}
        >


            <Navigator
                initialRoute={{name:'更多',component:MoreType}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />



        </TabNavigator.Item>
    </TabNavigator>
        );
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
    tabbarIconStyle:{

        width:  Platform.OS === 'ios' ? 25.2: 20,
        height: Platform.OS === 'ios' ? 25.2: 20,
    },
    seletedTitileStyle:{
        color:'orange'
    }
});

module.exports = Main;
