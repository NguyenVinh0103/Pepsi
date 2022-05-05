import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
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
  DoiQuaNon,
  DoiQuaAo,
  DoiQuaGioXach,
  DoiQuaLyPepsi,
  imageContentBST,
  HomeIndicator,
  imageCloesDetail,
  imageBodyLeftPopupDetail,
  imageBodyPopupDetail,
  btnPopupDetail,
  imagePopupBottom,
  imagePopUpSuccessLeft,
  imagePopUpSuccessRight
} from '../../Assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const DataItem = [
  {
    id: 1,
    image: DoiQuaNon,
    title: 'Pepsi Bucket Hat',
    status: true,
  },
  {
    id: 2,
    image: DoiQuaAo,
    title: 'Pepsi Jacket',
    status: false,
  },
  {
    id: 3,
    image: DoiQuaGioXach,
    title: 'Pepsi Tote Bag',
    status: true,
  },
  {
    id: 4,
    image: DoiQuaLyPepsi,
    title: 'Pepsi Tumbler',
    status: false,
  },
];

const DetailGift = ({navigation}) => {
  const [isVisibleModal, setVisibleModal] = useState(false);
  const [isVisibleSuccess, setVisibleSuccess] = useState(false);
  const [chooseItem, setChooseItem] = useState('3');
  const onPressModal = () => {
    setVisibleModal(!isVisibleModal);
  };
  const onPressSuccess = () => {
    setVisibleSuccess(!isVisibleSuccess);
  };
  const onPressItem = item => {
    onPressModal(!isVisibleModal);
    setChooseItem(item);
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
      <View style={styles.flowerBottom}>
        <Image
          style={styles.imageFlowerBottomLeft}
          resizeMode="contain"
          source={flowerTop}
        />
        <Image
          style={styles.imageFlowerBottomRight}
          resizeMode="contain"
          source={flowerRight}
        />
      </View>

      <Image
        style={styles.BottomRight}
        resizeMode="cover"
        source={imageBottomRight}
      />
      <Image style={styles.Home} source={HomeIndicator} />
      <Modal
        isVisible={isVisibleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={500}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#FCD54E', '#FDEA95', '#FBD239']}
          style={styles.modal}>
          <KeyboardAwareScrollView>
            <TouchableOpacity onPress={onPressModal} style={styles.btnCloes}>
              <Image
                resizeMode="stretch"
                style={styles.imageCloesDetail}
                source={imageCloesDetail}
              />
              <Image
                resizeMode="stretch"
                style={styles.iconCloesOpenGift}
                source={btnCloes}
              />
            </TouchableOpacity>
            <View style={styles.bodyPopup}>
              <Image
                resizeMode="stretch"
                style={[styles.bodyPopupLeft, {opacity: 0.4}]}
                source={imageBodyLeftPopupDetail}
              />
              <Image
                resizeMode="stretch"
                style={styles.bodyPopupRight}
                source={imageBodyPopupDetail}
              />
            </View>
            <Image
              resizeMode="stretch"
              style={[styles.imagePopupBottom, {opacity: 0.4}]}
              source={imagePopupBottom}
            />

            <Text style={styles.txtPopupContent}>Thông tin nhận quà</Text>
            <Text style={styles.txtPopupTitle}>
              Quà của ban:{' '}
              <Text style={{color: '#D02027'}}>{chooseItem?.title}</Text>
            </Text>
            <View style={styles.Form}>
              <View style={styles.fromHoTen}>
                <Text style={styles.txtHoTen}>Họ và tên</Text>
                <TextInput
                  placeholder=" Nguyễn Văn A"
                  placeholderTextColor="#666"
                  style={styles.fromInputHoTen}
                />
              </View>
              <View style={styles.fromSDT}>
                <Text style={styles.txtSDT}> Số điện thoại</Text>
                <TextInput
                  placeholder="Số điện thoại"
                  placeholderTextColor="#666"
                  style={styles.fromInputHoTen}
                />
              </View>
              <View style={styles.fromDiaChi}>
                <Text style={styles.txtDiaChi}>Địa chỉ</Text>
                <TextInput
                  placeholder="Nhập địa chỉ của bạn"
                  placeholderTextColor="#666"
                  style={styles.fromInputDiaChi}
                />
              </View>
              <View style={styles.fromGhiChu}>
                <Text style={styles.txtGhiChu}>Ghi chú</Text>
                <TextInput
                  placeholder="Nhập ghi chú (nếu có)"
                  placeholderTextColor="#666"
                  style={styles.fromInputGhiChu}
                />
              </View>
              <TouchableOpacity onPress={onPressSuccess}>
                <Image
                  resizeMode="stretch"
                  style={styles.btnPopupDetail}
                  source={btnPopupDetail}
                />
                <Modal
                  isVisible={isVisibleSuccess}
                  animationIn="slideInUp"
                  animationOut="slideOutDown"
                  animationInTiming={500}
                  animationOutTiming={500}>
                  <TouchableOpacity onPress={onPressSuccess} style={styles.ModalSuccess}>
                    <View style = {styles.txtModalSuccess}>
                      <Text style={styles.txtModalContent}>Thành Công</Text>
                      <Text style={styles.txtModalTitle}>Chúc mừng bạn nhận được quà từ</Text>
                      <Text style={styles.txtModalEnd}>Pepsi Tết</Text>
                    </View>
                    <View style={styles.ModalImageSuccess}>
                    <Image
                      resizeMode="contain"
                      style={styles.imageSuccessLeft}
                      source={imagePopUpSuccessLeft}
                    />
                    <Image
                      resizeMode="contain"
                      style={styles.imageSuccessRight}
                      source={imagePopUpSuccessRight}
                    />
                    </View>
                  </TouchableOpacity>
                </Modal>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      </Modal>
      <FlatList
        data={DataItem}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        contentContainerStyle={styles.FlatList}
        numColumns={2}
        renderItem={({item, index}) => (
          <View style={styles.itemFlatlish}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#FCD54E', '#FDEA95', '#FBD239']}
              style={styles.item}>
              <TouchableOpacity
                onPress={() => onPressItem(item)}
                style={styles.flatlist}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageFlatList}
                  source={item.image}
                />
                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    color : '#005082',
                    fontWeight: 'bold',
                    fontSize: 16
                  }}>
                  {item?.title}
                </Text>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    color : '#005082',
                  }}>
                  {`Trạng thái: `}
                  <Text
                    style={{
                      color: item?.status ? 'green' : 'red',
                    }}>
                    {item?.status ? 'Đã nhận' : 'Chưa nhận'}
                  </Text>
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        )}
      />
    </LinearGradient>
  );
};

export default DetailGift;

const INPUT = {
  backgroundColor: '#fff',
  borderRadius: 8,
  width: 310,
  marginTop: 8,
};
const TXTINPUT = {
  fontWeight: '900',
  fontSize: 16,
  color: '#005082',
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  Top: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    position: 'absolute',
  },
  imageFlowerRight: {
    marginTop: 250,
    marginLeft: '80%',
  },
  flowerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  imageFlowerBottomLeft: {
    marginTop: 450,
  },
  imageFlowerBottomRight: {
    height: 150,
    marginLeft: '80%',
    marginTop: 480,
  },
  imageFlowerTop: {
    width: 40,
    marginTop: 150,
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
    marginBottom: 10,
  },
  item: {
    width: 146,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    textAlign: 'center',
  },
  itemFlatlish: {
    marginBottom: 20,
    marginLeft: 14,
    marginRight: 14,
  },
  BottomRight: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: 500,
  },
  Home: {
    position: 'absolute',
    marginTop: 680,
    alignSelf: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 14,
    height: '90%',
  },
  ModalSuccess:{
    backgroundColor: '#4F9636',
    height: '20%',
    borderRadius: 20,
    marginLeft:10,
    marginRight:10
  },
  ModalImageSuccess:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 54,
  },
  imageSuccessLeft:{
    width: 100,
    height:80,
    borderBottomLeftRadius: 8
  },
  imageSuccessRight:{
    width: 100,
    height:80,
    borderBottomRightRadius: 8
  },
  txtModalSuccess:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop:'10%',
    position: 'absolute',
  },
  txtModalContent:{
    fontSize: 20,
    color: 'yellow',
    fontWeight: '900',
    lineHeight: 24
  },
  txtModalTitle:{
    color: '#fff',
    fontSize:16
  },
  txtModalEnd:{
    fontSize:18,
    color:'#fff',
    fontWeight: '900',
    lineHeight: 24
  },
  btnCloes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconCloesOpenGift: {
    position: 'absolute',
    marginTop: 10,
  },
  bodyPopup: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: '30%',
  },
  bodyPopupRight: {
    marginTop: 100,
  },
  imagePopupBottom: {
    marginTop: '98%',
    alignSelf: 'flex-end',
  },
  Form: {
    position: 'absolute',
    marginTop: '30%',
    marginLeft: 20,
  },
  txtPopupContent: {
    color: '#005082',
    fontWeight: '900',
    fontSize: 18,
    letterSpacing: 1,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '10%',
  },
  txtPopupTitle: {
    color: '#005082',
    fontWeight: '900',
    fontSize: 18,
    position: 'absolute',
    marginTop: '25%',
    marginLeft: 20,
  },
  txtHoTen: {
    ...TXTINPUT,
    marginTop: 10,
    color: '#005082',
  },
  fromInputHoTen: {
    ...INPUT,
  },
  txtSDT: {
    ...TXTINPUT,
    marginTop: 10,
    color: '#005082',
  },
  fromInputSDT: {
    ...INPUT,
  },
  txtDiaChi: {
    ...TXTINPUT,
    marginTop: 10,
    color: '#005082',
  },
  fromInputDiaChi: {
    ...INPUT,
    paddingTop: 0,
    height: 80,
  },
  txtGhiChu: {
    ...TXTINPUT,
    marginTop: 10,
    color: '#005082',
  },
  fromInputGhiChu: {
    height: 80,
    paddingTop: 0,
    ...INPUT,
  },
  btnPopupDetail: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});
