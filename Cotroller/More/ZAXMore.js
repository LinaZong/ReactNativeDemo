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
    Image,
    TouchableOpacity,
    Platform,
    ScrollView,

} from 'react-native';

var BaseCell = require('./ZAXCommonCell');

var More = React.createClass({
   getInitialState(){
       return{

           cellArray :['扫一扫','省流量模式','消息提醒','邀请好友','清空缓存','意见反馈','问卷调查','支付帮助','网络诊断','关于马团','精品应用']
       }
   },

    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavbar()}

              <ScrollView>


                  <BaseCell
                      titleName= {this.state.cellArray[0]}

                  />

                  <BaseCell
                      titleName= {this.state.cellArray[1]}
                      isSwitch = {true}
                  />

                  <BaseCell
                      titleName= {this.state.cellArray[2]}


                  />

                  <BaseCell
                      titleName= {this.state.cellArray[3]}

                  />

                  <BaseCell
                      titleName= {this.state.cellArray[4]}
                      isClean = '1.99M'

                  />

                  <BaseCell
                      titleName= {this.state.cellArray[5]}

                  />

                  <BaseCell
                      titleName= {this.state.cellArray[6]}

                  />

                  <BaseCell
                      titleName= {this.state.cellArray[7]}

                  />

                  <BaseCell
                      titleName= {this.state.cellArray[8]}

                  />

                  <BaseCell
                      titleName= {this.state.cellArray[9]}

                  />

                  <BaseCell
                      titleName= {this.state.cellArray[10]}

                  />




              </ScrollView>
            </View>
        );
    },

    /***返回cell内容****/
    renderCell(){



        return(() =>{
                for (var i = 0;i < this.state.cellArray.length; i++) {


                    {this.renderEveryCell(i)}
                }

            }


      );

    },

   renderEveryCell(i){

        var isSecond = i == 2 ? true : false
        return(

            <BaseCell
                titleName= {this.state.cellArray[i]}
                isSwitch = {isSecond}
            />

        )

   },


    //Navgator导航栏
    renderNavbar(){

        return(
           <View  style={styles.NavStyle}>
               <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:12}}>更多</Text>
               <TouchableOpacity  activeOpacity={0.5} style={{ //绝对定位
                   position: 'absolute',
                   right:10,
                   bottom:15
               }}>
               <Image source={{uri:'icon_mine_setting'}}  style={styles.NavRightImageStyle} />
                   </TouchableOpacity>

           </View>
        )
    },


});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
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
    NavStyle:{

        height:  Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'


    },

    NavRightImageStyle:{

        width:  Platform.OS == 'ios' ? 25 : 20,
        height:Platform.OS == 'ios' ? 25 : 20,



    }
});

module.exports = More;
/**
 * Created by ZONGLINA on 16/9/20.
 */
