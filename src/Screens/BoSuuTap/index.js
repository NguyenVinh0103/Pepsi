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
  flowerBottom,
  flowerRight,
  flowerTop,
  imageBottomLeft,
  imageBottomRight,
  btnCloes,
  imagePopUpPlayLeft,
  imagePopUpPlayBody,
  imageOpenGiftBST,
  imageGiftBST,
  imageContentBST,
  imageBodyBST,
  image7up,
  mirinda,
  Pepsi,
  btnDoiNgay,
  btnSubtraction,
  btnPlus,
  btnDoiQua,
  HomeIndicator,
} from '../../Assets';

const ArrayData = [
  {
    id: 1,
    title: '4',
    image: Pepsi,
  },
  {
    id: 2,
    title: '5',
    image: image7up,
  },
  {
    id: 1,
    title: '2',
    image: mirinda,
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.flatlist}>
      <Image style={styles.imageFlatList} source={item.image} />
      <Text style={styles.txtFlatListTitle}>{item.title}</Text>
    </View>
  );
};

const BoSuuTap = ({navigation}) => {
  const [count, setCount] = useState(1);
  const [isModalDoiNgay, setModalDoiNgay] = useState(false);
  const [isModalOpenGift, setModalOpenGift] = useState(false);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleSubtraction = () => {
    setCount(count - 1);
  };

  const onPressPlayGame = () => {
    setModalDoiNgay(!isModalDoiNgay);
  };

  const onPressOpenGift = () => {
    setModalOpenGift(!isModalOpenGift);
  };

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
              <Text style={styles.txtHi}>Bộ sưu tập</Text>
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
      <FlatList
        data={ArrayData}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.FlatList}
      />
      <View style={styles.txt}>
        <Image
          style={styles.imageFlowerBottom}
          resizeMode="contain"
          source={flowerBottom}
        />
        <View style={styles.txtTitle}>
          <Text style={styles.txtBody}>
            Đổi ngay bộ sưu tập{' '}
            <Text style={{color: 'yellow', fontWeight: '900'}}>
              An-Lộc-Phúc
            </Text>
          </Text>
          <Text style={styles.txtBody}>
            Để có cơ hội nhận ngay{' '}
            <Text style={{color: 'yellow', fontWeight: '900'}}>300 coins</Text>
            hoặc
          </Text>
          <Text style={styles.txtBody}>
            một{' '}
            <Text style={{color: 'yellow', fontWeight: '900'}}>
              phần quà may mắn{' '}
            </Text>
          </Text>
          <View style={styles.btnPlusAndSubtraction}>
            <TouchableOpacity onPress={handleSubtraction}>
              <Image
                style={styles.btnSubtraction}
                resizeMode="cover"
                source={btnSubtraction}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '900',
                marginLeft: 20,
                marginRight: 20,
              }}>
              {count}
            </Text>
            <TouchableOpacity onPress={handlePlus}>
              <Image
                style={styles.btnPlus}
                resizeMode="cover"
                source={btnPlus}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.imageBottom}>
        <Image
          style={styles.bottomLeft}
          resizeMode="cover"
          source={imageBottomLeft}
        />
        <Image
          style={styles.BottomRight}
          resizeMode="cover"
          source={imageBottomRight}
        />
      </View>
        <TouchableOpacity onPress={onPressPlayGame} style={styles.btn}>
          <Image source={btnDoiNgay} />
        </TouchableOpacity>
        <Modal
          isVisible={isModalDoiNgay}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={1000}
          animationOutTiming={1000}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#FCD54E', '#FDEA95', '#FBD239']}
            style={styles.modal}>
            <TouchableOpacity onPress={onPressPlayGame} style={styles.btnCloes}>
              <Image
                resizeMode="stretch"
                style={styles.imagePopUpPlayLeft}
                source={imagePopUpPlayLeft}
              />
              <Image
                resizeMode="stretch"
                style={styles.iconCloes}
                source={btnCloes}
              />
            </TouchableOpacity>
            <Image
              resizeMode="stretch"
              style={[styles.imagePopUpPlayBody, {opacity: 0.4}]}
              source={imagePopUpPlayBody}
            />
            <View style={styles.btnBody}>
            <TouchableOpacity
            onPress = {onPressOpenGift}
              style={styles.btnPopUpTrans}>
            
              <Image
                resizeMode="contain"
                style={styles.imageGiftBST}
                source={imageGiftBST}
              />
            </TouchableOpacity>
            <Text style={styles.textPopup}> Bạn có chắc chắn muốn đổi</Text>
            <Text style={styles.textPopupColor}>1 combo <Text style={styles.textPopup}>hay không</Text></Text>
            <TouchableOpacity
              style={styles.btnDoiQua}
              onPress={onPressOpenGift}>
              <Image
                resizeMode="contain"
                style={styles.btnDouQua}
                source={btnDoiQua}
              />
            </TouchableOpacity>
            </View>
          </LinearGradient>
        </Modal>

        <Modal
          isVisible={isModalOpenGift}
          animationIn="slideInUp"
          animationOut="slideOutDown">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#FCD54E', '#FDEA95', '#FBD239']}
            style={styles.modalOpenGift}>
            <TouchableOpacity onPress={onPressOpenGift} style={styles.btnCloes}>
              <Image
                resizeMode="stretch"
                style={styles.imagePopUpPlayLeftOpenGift}
                source={imagePopUpPlayLeft}
              />
              <Image
                resizeMode="stretch"
                style={styles.iconCloesOpenGift}
                source={btnCloes}
              />
            </TouchableOpacity>
            <Image
              resizeMode="stretch"
              style={[styles.imagePopUpPlayBody, {opacity: 0.4}]}
              source={imagePopUpPlayBody}
            />
            <View style={styles.btnBodyOpenGift}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
              style={styles.btnPopUpTransOpenGift}>
              <Image
                resizeMode="contain"
                style={styles.imageGiftBSTOpenGift}
                source={imageOpenGiftBST}
              />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.txtPopupOpenGift}onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textPopupOpenGift}> Bạn nhận được</Text>
            <Text style={styles.textPopupColorOpenGift}>300 coins</Text>
            </TouchableOpacity>
           
            </View>
          </LinearGradient>
        </Modal>

      <Image style={styles.Home} source={HomeIndicator} />
    </LinearGradient>
  );
};

export default BoSuuTap;

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
  },
  iconLogOut: {
    marginLeft: 80,
    marginTop: 32,
  },
  contentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 24,
  },
  txtHi: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
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
    marginLeft: 100,
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
    marginTop: '20%',
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
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imageFlatList: {
    width: 60,
    height: 180,
    marginLeft: 20,
    marginRight: 20,
  },
  flatlist: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtFlatListTitle: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '900',
  },
  imageFlowerBottom: {
    width: 50,
    aspectRatio: 1,
    marginBottom: 170,
  },
  txtBody: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    lineHeight: 20,
  },
  txt: {
    flexDirection: 'row',
  },
  txtTitle: {
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 10,
  },
  imageBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: 550,
  },
  bottomLeft: {
    width: 120,
    height: 150,
    marginTop: 40,
  },
  BottomRight: {
    width: 150,
    height: 170,
    marginLeft: 120,
  },
  btn: {
    alignSelf: 'center',
    marginTop: 620,
    position: 'absolute',
  },
  btnPlusAndSubtraction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  Home: {
    position: 'absolute',
    marginTop: 680,
    alignSelf: 'center',
  },
  modal:{
    height:'60%'
  },

  btnCloes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconCloes: {
    width: 36,
    aspectRatio: 1,
    marginRight: 30,
    marginTop:32
  },
  imagePopUpPlayLeft: {
    width: 50,
    aspectRatio: 1,
  },
  imagePopUpPlayBody: {
    width: 100,
    height: 220,
    marginLeft: '72%',
  },
  btnBody:{
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  btnDoiQua:{
      marginTop: 20
  },
  textPopup:{
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  textPopupColor:{
    color: 'red',
    fontSize: 20,
    fontWeight: '900',
  },

  modalOpenGift:{
    height:'60%'
  },

  btnCloesOpenGift: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconCloesOpenGift: {
    width: 36,
    aspectRatio: 1,
    marginRight: 30,
    marginTop:32
  },
  imagePopUpPlayLeftOpenGift: {
    width: 50,
    aspectRatio: 1,
  },
  imagePopUpPlayBodyOpenGift: {
    width: 100,
    height: 220,
    marginLeft: '72%',
  },
  btnBodyOpenGift:{
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  btnDoiQuaOpenGift:{
      marginTop: 20
  },
  textPopupOpenGift:{
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  textPopupColorOpenGift:{
    color: 'red',
    fontSize: 20,
    fontWeight: '900',
  },
  txtPopupOpenGift:{
    alignItems: 'center',
    marginTop:10
  }
});
