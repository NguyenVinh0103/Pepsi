import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {normalize, normalizeHorizontal} from '../../Helps';
import Modal from 'react-native-modal';

import {
  iconLogOut,
  BackgroundTopLeft,
  imageBackGroundLeft,
  CongRight,
  CongLeft,
  FlowerS,
  FloS,
  imageFlowerCongTop,
  FlowCongLeft,
  FlowCongRight,
  item1,
  item2,
  item3,
  S,
  HomeIndicator,
  imageHomeBottom,
  imageHomeTrong,
  imagePopUpLogOutTopRight,
  imagePopUpLogOutBottomLeft,
  imagePopUpLogOutBottomRight,
  btnLogOut,
  btnCancle,
  imageFlowerBtn,
  btnConfigOk,
  flowerBottomConfig,
  flowerBottomConfig2,
} from '../../Assets';

const gifts = [item1, item2, item3];

const Congratulation = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [isModalLogOut, setModalLogOut] = useState(false);
  const [isModalPlayGame, setModalPlayGame] = useState(false);

  const onPressLogOut = () => {
    setModalLogOut(!isModalLogOut);
  };
  const onPressPlayGame = () => {
    setModalPlayGame(!isModalPlayGame);
  };

  const [gift,setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
    console.log(gifts[index])
  }
  useEffect(() => {
    randomGift();
  }, []);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#02A7F0', '#0063A7']}
      style={styles.linearGradient}>
      <Image
        resizeMode="contain"
        style={styles.imageBackGroundLeft}
        source={imageBackGroundLeft}
      />
      <View style={styles.Top}>
        <Image
          resizeMode="contain"
          style={styles.BackgroundTopLeft}
          source={BackgroundTopLeft}
        />
        <TouchableOpacity onPress={onPressLogOut}>
          <Image
            resizeMode="contain"
            style={styles.iconLogOut}
            source={iconLogOut}
          />
          <Modal
            isVisible={isModalLogOut}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={1000}
            animationOutTiming={1000}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#FCD54E', '#FDEA95', '#FBD239']}
              style={styles.modal}>
              <TouchableOpacity style={styles.btnModal}>
                <Text style={styles.txtHeaderModal}>
                  Bạn có chắc chắn muốn
                  <Text style={styles.bold}>{' đăng xuất'}</Text> không
                </Text>
                <Image
                  resizeMode="stretch"
                  style={[styles.imagePopUpLogOutTopRight, {opacity: 0.4}]}
                  source={imagePopUpLogOutTopRight}
                />
              </TouchableOpacity>
              <View style={styles.btnPopUpLogout}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Image
                    resizeMode="contain"
                    style={styles.btnLogOut}
                    source={btnLogOut}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressLogOut}>
                  <Image
                    resizeMode="contain"
                    style={styles.btnCancle}
                    source={btnCancle}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.imageBottomPopUp}>
                <Image
                  resizeMode="stretch"
                  style={styles.imagePopUpLogOutBottomLeft}
                  source={imagePopUpLogOutBottomLeft}
                />
                <Image
                  resizeMode="stretch"
                  style={styles.imagePopUpLogOutBottomRight}
                  source={imagePopUpLogOutBottomRight}
                />
              </View>
            </LinearGradient>
          </Modal>
        </TouchableOpacity>
      </View>
      <View style={styles.background}>
        <Image
          resizeMode="contain"
          style={styles.CongRight}
          source={CongRight}
        />
        <Image
          resizeMode="contain"
          style={styles.imageFlowerCongTop}
          source={imageFlowerCongTop}
        />
      </View>
      <View style={styles.body}>
        <View>
          <Image resizeMode="contain" style={styles.FlowerS} source={FlowerS} />
          <Image
            resizeMode="contain"
            style={styles.CongLeft}
            source={CongLeft}
          />
        </View>
        <View style={styles.sRight}>
          <Image resizeMode="contain" style={styles.S} source={S} />
          <Image resizeMode="contain" style={styles.FloS} source={FloS} />
        </View>
      </View>
      <Image resizeMode="contain" style={styles.item1} source={gift} />
      <View style={styles.Flow}>
        <Image
          resizeMode="contain"
          style={styles.FlowCongLeft}
          source={FlowCongLeft}
        />
        <View style={styles.txt}>
          <Text style={styles.txtChucMung}>Chúc mừng bạn đã nhận được</Text>
          <Text style={styles.txthi}>
            1 lon 7Up Lộc <Text style={{color: 'white'}}>ứng với</Text> 50 coins{' '}
          </Text>

          <View style={styles.Flower}>
            <Image
              resizeMode="contain"
              style={styles.flowerBottomConfig}
              source={flowerBottomConfig}
            />
            <Image
              resizeMode="contain"
              style={styles.flowerBottomConfig2}
              source={flowerBottomConfig2}
            />
          </View>
        </View>
        <Image
          resizeMode="contain"
          style={styles.FlowCongRight}
          source={FlowCongRight}
        />
      </View>

      <Image
        resizeMode="stretch"
        style={styles.imageHomeBottom}
        source={imageHomeBottom}
      />
      <Image
        resizeMode="contain"
        style={styles.imageHomeTrong}
        source={imageHomeTrong}
      />
      <View style={styles.btnOk}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            resizeMode="contain"
            style={styles.btnConfigOk}
            source={btnConfigOk}
          />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.imageFlowerBtn}
          source={imageFlowerBtn}
        />
      </View>
      <View style={styles.Home}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={HomeIndicator} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Congratulation;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBackGroundLeft: {
    width: 400,
    aspectRatio: 1,
    position: 'absolute',
  },
  iconLogOut: {
    width: 60,
    aspectRatio: 1,
    marginRight: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
  },
  item1: {
    position: 'absolute',
    marginTop: '10%',
    width: 110,
    aspectRatio: 1,
    marginLeft: '34%',
  },
  background: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CongRight: {
    marginTop: 4,
  },
  imageFlowerCongTop: {
    width: 80,
    height: 140,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CongLeft: {
    marginTop: 10,
  },
  S: {
    width: 80,
  },
  FloS: {
    position: 'absolute',
    marginLeft: 20,
    marginTop: 60,
  },
  FlowerS: {
    marginLeft: 40,
  },
  Flow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FlowCongLeft: {
    marginLeft: 60,
    position: 'absolute',
  },
  txt: {
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '25%',
    height: 30,
  },
  txtChucMung: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
  },
  txthi: {
    color: 'yellow',
    fontWeight: '900',
  },
  Home: {
    position: 'absolute',
    marginTop: 684,
    alignSelf: 'center',
  },
  imageHomeBottom: {
    width: 390,
    height: 280,
    position: 'absolute',
    marginTop: '112%',
  },
  imageHomeTrong: {
    alignSelf: 'center',
    marginTop: '8%',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 14,
    height: '50%',
  },
  btnModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtHeaderModal: {
    color: '#0063A7',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    width: 180,
    marginLeft: 90,
    textAlign: 'center',
  },
  bold: {
    fontWeight: '900',
  },
  imagePopUpLogOutTopRight: {
    width: 80,
    height: 120,
  },
  btnPopUpLogout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogOut: {
    width: 200,
    height: 80,
  },
  btnCancle: {
    width: 200,
    height: 80,
  },
  imageBottomPopUp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  imagePopUpLogOutBottomLeft: {
    width: 150,
    height: 128,
    marginTop: '60%',
  },
  imagePopUpLogOutBottomRight: {
    width: 86,
    height: 100,
    marginTop: '40%',
    marginLeft: 116,
  },
  btnOk: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '110%',
    alignItems: 'center',
    marginRight: 28,
    position: 'absolute',
    alignSelf: 'center',
  },
  imageFlowerBtn: {
    position: 'absolute',
    marginLeft: 220,
  },
  Flower: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 80,
  },
  flowerBottomConfig: {
    marginRight: 260,
  },
  flowerBottomConfig2: {
    marginTop: 44,
  },
});
