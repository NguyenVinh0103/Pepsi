import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
//   import {normalize, normalizeHorizontal} from '../../Helps';
import Modal from 'react-native-modal';

import {
  BackgroundTopLeft,
  imagePlayGameRight,
  iconLogOut,
  iconBack,
  imageBodyBSTRight,
  imageBodyBST,
  flowerBottom,
  flowerRight,
  flowerTop,
  imageBottomRight,
  btnCloes,
  DetailAo,
  DetailGioXach,
  DetailLyPepsi,
  DetailNon,
  imageContentBST,
  HomeIndicator,
} from '../../Assets';

const DataItem = [
  {
    id: 1,
    image: DetailAo,
  },
  {
    id: 2,
    image: DetailNon,
  },
  {
    id: 3,
    image: DetailGioXach,
  },
  
  {
    id: 4,
    image: DetailLyPepsi,
  },
];

const renderItem = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.flatlist}>
      <Image resizeMode='stretch' style={styles.imageFlatList} source={item.image} />
    </TouchableOpacity>
  );
};

const MyDetailGift = ({navigation}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#02A7F0', '#0063A7']}
      style={styles.linearGradient}>
      <View style={styles.Top}>
        <View style={styles.BackgroundTop}>
          <Image
            style={styles.imageTopLeft}
            resizeMode="cover"
            source={BackgroundTopLeft}
          />
          <Image
            style={styles.imageTopRight}
            resizeMode="contain"
            source={imagePlayGameRight}
          />
          <View style={styles.contentTop}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image style={styles.iconBack} source={iconBack} />
            </TouchableOpacity>
            <View style={styles.txtCenter}>
              <Text style={styles.txtHi}>Chi tiết quà tặng</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Image style={styles.iconLogOut} source={iconLogOut} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.flower}>
        <Image
          style={styles.imageFlowerTop}
          resizeMode="contain"
          source={flowerTop}
        />

        <Image
          style={styles.imageFlowerRight}
          resizeMode="contain"
          source={flowerRight}
        />
      </View>
      <View style={styles.btnGift}>
      
      </View>
      <View style={styles.Content}>
        <Image
          style={styles.imageContentBST}
          resizeMode="contain"
          source={imageContentBST}
        />
        <Text style={styles.txtCoins}>Số Coins hiện tại của bạn</Text>
      </View>
      <View style={styles.Body}>
        <Image
          style={styles.imageBodyBST}
          resizeMode="contain"
          source={imageBodyBST}
        />
        <Image
          style={styles.imageBodyBSTRight}
          resizeMode="contain"
          source={imageBodyBSTRight}
        />
      </View>   
      <Image
        style={styles.BottomRight}
        resizeMode="cover"
        source={imageBottomRight}
      />
      <FlatList
        data={DataItem}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.FlatList}
        numColumns={2}
      />
      <Image style={styles.Home} source={HomeIndicator} />
    </LinearGradient>
  );
};

export default MyDetailGift;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BackgroundTop: {
    flexDirection: 'row',
  },
  imageTopLeft: {
    width: 96,
    height: 150,
  },
  imageTopRight: {
    width: 100,
    height: 150,
    marginLeft: '50%',
  },
  iconBack: {
    marginTop: 32,
    marginLeft: 20,
  },
  iconLogOut: {
    marginLeft: 60,
    marginTop: 32,
  },
  contentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  txtHi: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
  },
  txtContent: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '400',
    letterSpacing: 1,
  },
  txtCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 80,
    marginTop: 30,
  },
  flower: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageFlowerRight: {
    marginTop: 80,
  },
  imageFlowerTop: {
    width: 40,
  },
  Content: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '28%',
  },
  txtCoins: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  },
  Body: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    marginTop: '65%',
  },
  FlatList: {
    position: 'absolute',
    alignSelf: 'center',
  },
  imageFlatList: {
    width: 150,
    height: 200,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  imageFlowerBottom: {
    width: 50,
    aspectRatio: 1,
    marginBottom: 170,
  },
  BottomRight: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop:500
  },
  Home: {
    position: 'absolute',
    marginTop: 680,
    alignSelf: 'center',
  },
});
