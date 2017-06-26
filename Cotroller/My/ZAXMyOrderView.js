
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var  dataArray = require('./OrderData.json');

var MyOrderView = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                {/*订单相关按钮*/}

                {this.renderAllItems()}


            </View>
        );
    },
    //个人信息相关
    renderAdView(){
        return(
            <View style={styles.headerTopViewStyle}>

                <BaseCell
                leftIcon= "collect"
                leftTitle="ZAX电商"
                />

            </View>
        )

    },

    renderAllItems(){
     //定义组件数组
        var itemArr = [];
        //遍历
        for (var  i = 0; i < dataArray.length ; i++){
            var  data = dataArray[i];
            itemArr.push(


                <InnerView key={i} iconName={data.iconName} title={data.title}/>

            )
        }

        //返回
        return itemArr;
    },
});

 var  InnerView = React.createClass({
     getDefaultProps(){

         return{

             iconName: '',
             title: '',
         }
     },

     render(){

         return(
             <View>
                 <Image source={{uri: this.props.iconName}}  style={{width:25,height:25}} />
                 <Text>
                     {this.props.title}
                 </Text>

             </View>
         );

     }
 });


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'white',
        height:55,
        justifyContent: 'space-around'

    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,

    },


});

module.exports = MyOrderView;
