
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform,
} from 'react-native';


//全局变量
var cols = 5;
var cellWH =  Platform.OS == 'ios' ? 70 : 50;
var vMagin = (screenWith - cellWH * cols) /(cols + 1);

var  screenWith = require('Dimensions').get('window').width;
var TopListView = React.createClass({
    getDefaultProps(){

        return{
            dataArray :[],

        }
    },
    getInitialState(){

        //创建数据源
        var  ds = new  ListView.DataSource({rowHasChanged:(row1,row2) => row1 != row2});
        return{
             dataSource: ds.cloneWithRows(this.props.dataArray)
        }
    },
    render() {
        return (
          <ListView

              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              contentContainerStyle={ styles.contentViewStyle}
              scrollEnabled={false}
              removeClippedSubviews={false}


          />
        );
    },
    renderRow(rowData){

    return(

      <View style={styles.cellBackStyle}>
          <TouchableOpacity>
          <Image  source={{uri: rowData.image}} style={{width:52,height:52}}/>
          <Text style={{fontSize:13,textAlign:'center'}}>{rowData.title}</Text>
        </TouchableOpacity>
      </View>

     );
    }
});

const styles = StyleSheet.create({

    contentViewStyle:{

        //多个cell在同一行显示
        //
        flexDirection :'row',
         flexWrap :'wrap',
        width:screenWith,


    },
    cellBackStyle:{

        backgroundColor :'white',
        width:70,
        height:70,
        justifyContent: 'center',
        alignItems :  'center',
        marginTop:10,
        marginLeft: (screenWith - 70 * 5) / 6,

    }


});

module.exports = TopListView;
