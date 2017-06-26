import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    Switch
} from 'react-native';

var BaseCell = React.createClass({
    getDefaultProps(){
        return{
            titleName: '' , //标题
            isSwitch: false,
            isClean : '',
        }
    },
    getInitialState(){

        return{
            isSwitchOn : true
        }

    },
    render() {
        return (
            <TouchableOpacity>
            <View style={styles.cellStyle}>

                {/*名称*/}
               <Text style={{fontSize: 17,marginLeft : 10}}>{this.props.titleName}</Text>
                {/*清除缓存*/}
                {this.renderClean()}
                {/*箭头*/}
                {this.renderRightView()}



            </View>
                </TouchableOpacity>
        );
    },


    //清除缓存
    renderClean(){

        if (this.props.isClean.length > 0){
            return(
                <View style={{position:'absolute',right:22,top:10}}>
                    <Text>{this.props.isClean}</Text>
                </View>
            )

        }else {

            return;
        }
    },
    //右边显示的内容
    renderRightView(){

            if (this.props.isSwitch){

                //如果为真返回开关
                return(
                        <Switch
                            disabled={false}
                            value={ this.state.isSwitchOn == true}
                            onValueChange={()=>{this.setState({isSwitchOn: !this.state.isSwitchOn})}}
                            style={{marginRight:10}}

                        />
                    )




            }
            else{
              return(
                  <Image source={{uri:'icon_cell_rightArrow'}}  style={styles.ImageStyle} />
              )
            }



    }
});
const styles = StyleSheet.create({

    cellStyle:{
        backgroundColor:'white',
         borderBottomColor: '#dddddd',
        borderBottomWidth : 0.5,
        flexDirection : 'row',
        justifyContent: 'space-between',
        height:40,
        alignItems : 'center',
        marginTop: 10,

    },
    ImageStyle:{
        width: 8,
        height:13,
        marginRight: 10
    }

});

module.exports = BaseCell;
