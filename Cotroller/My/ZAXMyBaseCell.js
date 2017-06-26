import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var MyBaseCell = React.createClass({

    getDefaultProps(){
        return{
            leftIcon : '',
            leftTitle: '',
            rightText: '',
            rightIcon: '',

        }
    },


    render(){
        return(

            <View style={styles.container}>

                {/*左边*/}

                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIcon}}  style={styles.leftImageStyle}/>
                    <Text style={{ marginLeft:6,}}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                {this.renderRigntView()}

            </View>
        );

    },

    renderRigntView(){
        return(
            <View style={styles.rightViewStyle}>
                {this.renderrightText()}
                <Image  source={{uri:'icon_cell_rightArrow'}}  style={styles.rightImageStyle}/>
            </View>
        );

    },

    renderrightText(){

       if (this.props.rightIcon.length == 0){ //不返回图片
          return(
              <Text>{this.props.rightText}</Text>
          )
       }else {

           return(
               <Image source={{uri: 'me_new'}}  style={{width:24,height:13}} />
           )

       }
    },


});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection : 'row',
        height: 45,
        marginTop:10,
        borderBottomWidth:0.5,
        borderBottomColor:'gray'

    },


    leftViewStyle:{

        flexDirection : 'row',

        alignItems:'center',
        marginLeft: 10,

    },


    rightViewStyle:{

        flexDirection : 'row',

        alignItems:'center'
    },

    leftImageStyle:{

        width:30,

        height:30,
        borderRadius:15,
    },

    rightImageStyle:{
        width:15,

        height:15,
        marginLeft:10,

    }
});

module.exports = MyBaseCell;
