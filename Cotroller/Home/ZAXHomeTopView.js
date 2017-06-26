
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
//屏幕的宽度
var  screenWith = require('Dimensions').get('window').width;

//轮播视图
var TopListView = require('./ZaxTopListView');

//数据源
var  TopMenu = require('../../LocalData/TopMenu.json');
var  TopMiddleData =  require('../../LocalData/HomeTopMiddleLeft.json');
var  newActivity = require('../../LocalData/HomeTopMiddle.json');
var  homeHotData = require('../../LocalData/XMG_Home_D4.json');

//头视图组件类
var HomeTopView = React.createClass({

    getDefaultProps(){

        return{

            popTopHome: null
        }
    },

    getInitialState(){
     return{
         pageState: 0,

     }
    },
    render() {

       var  avData = newActivity.data[0];

        return (
            <View style={styles.container}>

                {/*内容部分*/}

                <ScrollView style={styles.scrollerStyle}
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd = {this.onScrollAnimationEnd}
                >

                    {this.renderAdItems()}
                </ScrollView>

                {/*小圆点部分*/}
                <View style={styles.PageBackStyle}>
                    {this.renderPage()}
                </View>

                {/*中部的广告*/}

                <View >
                   <ShopView />
                </View>

                {/*下部的最新活动*/}



                   {this.renderAvCell(avData)}

                   {/*最热活动*/}

                   <View style={styles.hotViewStyle}>

                       {this.renderHotItem()}

                   </View>


            </View>
        );
    },


      renderHotItem(){
        var  item = [];
          var dataArr = homeHotData.data;



       for (var  i = 0; i < dataArr.length; i++){
            var  itemData = dataArr[i];
            var  imageName = this.dealWithUrl(itemData.imageurl);



           item.push(

               <View  style={{width:screenWith /2,height:70,marginTop:10,borderBottomColor:'gray',borderBottomWidth:0.3,borderRightColor:'gray',borderRightWidth:0.3}}>
               <BaseShop
                   key = {i+ 200}
                   title = {itemData.maintitle}
                   subTitle = {itemData.deputytitle}
                   iconName = {imageName}
                   titleColor = {itemData.typeface_color}
                   callBackClickCell = {(data) =>{this.popToHomeView(data)}}
                   tpUrl = {itemData.tplurl}
               />
               </View>

           );


       }
          return item;
     },

    //继续往父级页面传递数据
    popToHomeView(){
       this.props.popTopHome(data);
    },


    //处理图像的尺寸
    dealWithUrl(url){
     var  imageSize = screenWith / 3;
        if(url.search('w.h') == -1){ //没有找到
            return url;

        }else {

            return url.replace('w.h','100.60');
        }

    },
    //返回中间的广告cell
    renderAvCell(data){
        return(
            <TouchableOpacity activeOpacity={0.5}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,borderBottomWidth:0.3,borderBottomColor:'gray',height:60,}}>
                <View>
                    {/*标题*/}
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,color:'red'}}>{data.title}</Text>
                    {/*副标题*/}

                    <Text style={{marginTop:10,color:'gray',marginLeft:10}}>{data.subTitle}</Text>

                </View>
                <Image source={{uri:data.image}} style={{ width:screenWith /3 ,height:42.5,position:'absolute',right:20
                }}/>
            </View>
                </TouchableOpacity>
        )

    },
    //当一帧滚动结束的时候调用
    onScrollAnimationEnd(e){

        //求出当前的页面
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / screenWith);
        this.setState(
            {
                pageState: currentPage,
            }
        );

    },

    //头视图分类Item
    renderAdItems(){

        //组件数组
        var  itemArr = [];

        //颜色数组
        var  dataArr = TopMenu.data;

            //遍历创建组件
            for(var i = 0; i < dataArr.length; i++){
                itemArr.push(
                    <TopListView
                        key = {i + 100}
                        dataArray = {dataArr[i]}
                    />

                );
            }

            return itemArr;

    },

    //返回小圆点
    renderPage(){
        //指示器数组
        var  indicatorArr = [],  styleColor ;


        //遍历创建组件
        for(var i = 0; i < 2; i++){

            //设置圆点样式
            styleColor = (i === this.state.pageState) ? {color:'orange'} :{color:'gray'}
            indicatorArr.push(

                <Text style={[{fontSize:25}, styleColor]}key = {i+ 20}>&bull;</Text>

            );
        }
        return indicatorArr;
    },
});

var  ShopView = React.createClass({
    render(){
        return(
            <View  style={{flexDirection:'row'}}>

              {/*名店抢购*/}

              <View style={{width:screenWith /2}}>

                {this.renderSoldView()}

             </View>


              {/*一元商品*/}
                <View style={{width:screenWith /2}}>

                {this.renderOneMoneyView()}

                </View>

            </View>
        )
    },
    renderSoldView(){
        var leftDataArr = TopMiddleData.dataLeft[0];


        return (
            <TouchableOpacity activeOpacity={0.5}>
         <View  style={{alignItems:'center'}}>

             <Image source={{uri: leftDataArr.img1}} style={{width:78,height:25}}/>
             <Image source={{uri: leftDataArr.img2}} style={{width:140.5,height:60,marginTop:10}}/>
             <Text style={{color:'gray',marginTop:5}}>
                 {leftDataArr.title}
             </Text>
             {/*价格*/}

             <View style={{flexDirection:'row',marginTop:5}}>
                 <Text style={{color:'green'}}>
                     {leftDataArr.price}
                 </Text>
                     <Text style={{backgroundColor:'yellow'}}>
                         {leftDataArr.sale}
                     </Text>
                 </View>


         </View>
                </TouchableOpacity>
        )
    } ,
    renderOneMoneyView(){

            var itemArr = [];
            var dataArray = TopMiddleData.dataRight;
            for (var i = 0; i < dataArray.length; i++){
                //取出单独的数据
                var  rightData = dataArray[i];
                itemArr.push(


                    <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,borderLeftColor:'gray',borderLeftWidth:0.5,height:60,marginTop:5}}>
                      <BaseShop
                          key = {i + 30}
                          title = {rightData.title}
                          subTitle = {rightData.subTitle}
                          iconName = {rightData.rightImage}
                          titleColor = {rightData.titleColor}

                      />
                     </View>

                );
            }

            return itemArr;


    },
});

var BaseShop = React.createClass({

  getDefaultProps(){
    return{

        title: '',
        subTitle: '',
        titleColor: '',
        iconName: '',
         tpUrl : '',
        //回调函数
        callBackClickCell : null,


    }
    },
    render(){
        return(

            <TouchableOpacity onPress={()=> this.clickCell(this.props.tpUrl)}>

          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View>
                  {/*标题*/}
                <Text style={{color: this.props.titleColor,fontSize:18,fontWeight:'bold',marginLeft:10}}>{this.props.title}</Text>
                  {/*副标题*/}

                <Text style={{marginTop:10,color:'gray',marginLeft:10}}>{this.props.subTitle}</Text>

              </View>
              <Image source={{uri:this.props.iconName}} style={{ width:56.5,height:42.5,position:'absolute',right:20
                 }}/>
          </View>
                </TouchableOpacity>
        )
    },

    //跳转到详情页面
    clickCell(data){

        alert(data);

       if (this.props.allBackClickCell == null) return;

        //执行回调行数
        this.props.callBackClickCell(data);
    }
});


const styles = StyleSheet.create({
    container: {
     backgroundColor: 'white'

    },
    scrollerStyle:{


    },
    PageBackStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },


    hotViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',

    }


});

module.exports = HomeTopView;
