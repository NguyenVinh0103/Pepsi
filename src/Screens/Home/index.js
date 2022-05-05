import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {normalize, normalizeHorizontal} from '../../Helps';
import Modal from 'react-native-modal';

import {
  iconLogOut,
  imageHomeBodyLeft,
  imageHomeBodyRight,
  HomeIndicator,
  imageHomeBottom,
  imagePopUpLuotChoiBottomLeft,
  imagePopUpLuotChoiBottomRight,
  imagePopUpLuotChoiLeft,
  imageBodyPopupLuotChoi,
  imageHomeLogo,
  imageHomeRight,
  imageHomeTopCenter,
  imageHomeTopLeft,
  imageHomeTrong,
  imageFlowerTopBody,
  imageFlowerBottomBody,
  btnPlay,
  btnQuetMa,
  btnDetailGift,
  btnBoSuuTap,
  btnCloes,
  imagePopUpPlayLeft,
  imagePopUpPlayBody,
  imagePopUpLogOutTopRight,
  imagePopUpLogOutBottomLeft,
  imagePopUpLogOutBottomRight,
  btnLogOut,
  btnCancle,
  btnPopUpPlay,
  BtnPlayHomeLeft,
  BtnPlayHomeRight,
} from '../../Assets';

const Home = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [isModalLogOut, setModalLogOut] = useState(false);
  const [isModalPlayGame, setModalPlayGame] = useState(false);
  const [isModalLuotChoi, setModalLuotChoi] = useState(false);
  const [LuotChoi, setLuotChoi] = useState('3');
  console.log(insets);
  const onPressLogOut = () => {
    setModalLogOut(!isModalLogOut);
  };

  const onPressLuotchoi = () => {
    if (LuotChoi > 0) {
      onPressPlayGame();
    } else {
      onPressLuotChoi();
    }
  };

  const onPressPlayGame = () => {
    setModalPlayGame(!isModalPlayGame);
    // setLuotChoi('3')
  };

  const onPressLuotChoi = () => {
    setModalLuotChoi(!isModalLuotChoi);
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#02A7F0', '#0063A7']}
      style={styles.linearGradient}>
      <View style={styles.Top}>
        <View style={styles.imageTopLeft}>
          <Image
            resizeMode="contain"
            style={styles.ImageHomeTopLeft}
            source={imageHomeTopLeft}
          />
          <Image
            resizeMode="contain"
            style={styles.ImageHomeTopCenter}
            source={imageHomeTopCenter}
          />
        </View>
        <View style={styles.TopRight}>
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
                  <TouchableOpacity onPress={() => navigation.navigate('Create')}>
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

          <Image
            resizeMode="contain"
            style={styles.imageHomeRight}
            source={imageHomeRight}
          />
        </View>
      </View>
      <Image style={styles.imageHomeLogo} source={imageHomeLogo} />
      <View style={styles.imageBody}>
        <Image
          resizeMode="contain"
          style={styles.imageHomeBodyLeft}
          source={imageHomeBodyLeft}
        />
        <View style={styles.imageBodyLeft}>
          <Image
            resizeMode="contain"
            style={styles.imageFlowerTopBody}
            source={imageFlowerTopBody}
          />
          <Image
            resizeMode="contain"
            style={styles.imageFlowerBottomBody}
            source={imageFlowerBottomBody}
          />
        </View>
        <Image
          resizeMode="contain"
          style={styles.imageHomeBodyRight}
          source={imageHomeBodyRight}
        />
      </View>

      <Image
        resizeMode="stretch"
        style={styles.imageHomeBottom}
        source={imageHomeBottom}
      />
      <Modal
        isVisible={isModalLuotChoi}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={1000}
        animationOutTiming={1000}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#02A7F0', '#0063A7']}
          style={styles.modalLuotChoi}>
          <TouchableOpacity onPress={onPressLuotChoi} style={styles.btnCloes}>
            <Image
              resizeMode="stretch"
              style={styles.imagePopUpLuotChoiLeft}
              source={imagePopUpLuotChoiLeft}
            />
            <View style={styles.txtPopupLuotchoi}>
              <Text style={styles.textPopupLuotchoiContent}>
                Bạn đã hết lượt
              </Text>
              <Text style={styles.textPopupLuotchoiTitle}>
                Hãy Scan thêm mà trên bill
              </Text>
              <Text style={styles.textPopupLuotchoiTitle}>
                mua nước hoặc combo Pepsi
              </Text>
              <Text style={styles.textPopupLuotchoiTitle}>
                để nhận thêm lượt chơi
              </Text>
            </View>

            <Image
              resizeMode="stretch"
              style={styles.iconCloesLuotChoi}
              source={btnCloes}
            />
          </TouchableOpacity>

          <View style={styles.imagePopupBottomLuotChoi}>
            <Image
              resizeMode="stretch"
              style={styles.imagePopUpLuotChoiBottomLeft}
              source={imagePopUpLuotChoiBottomLeft}
            />
            <Image
              resizeMode="stretch"
              style={styles.imagePopUpLuotChoiBottomRight}
              source={imagePopUpLuotChoiBottomRight}
            />
          </View>

          <Image
            resizeMode="contain"
            style={styles.imageBodyPopupLuotChoi}
            source={imageBodyPopupLuotChoi}
          />

          <TouchableOpacity
            style={styles.btnPopUpTransLuotChoi}
            onPress={() => navigation.navigate('QRcode')}>
            <Text style={styles.txtTitleLuotChoi}>Scan Ngay</Text>
          </TouchableOpacity>
        </LinearGradient>
      </Modal>

      <Modal
        isVisible={isModalPlayGame}
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
            <Text style={styles.textPopUp}>BẠN MUỐN SỬ DỤNG LƯỢT CHƠI NÀO</Text>
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

          <TouchableOpacity
            style={styles.btnPopUpPlay}
            onPress={() => navigation.navigate('Game')}>
            <Image
              resizeMode="contain"
              style={styles.btnBackGroundPlay}
              source={btnPopUpPlay}
            />
            <View style={styles.txtPlay}>
              <Text style={styles.txtTitlePlay}>Lượt chơi miễn phí</Text>
              <Text style={styles.txtContentPlay}>
                Bạn còn{' '}
                <Text style={{fontWeight: 'bold', color: 'yellow'}}>3</Text>{' '}
                lượt chơi
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPopUpTrans}
            onPress={onPressPlayGame}>
            <Image
              resizeMode="contain"
              style={styles.btnBackGroundTrans}
              source={btnPopUpPlay}
            />
            <TouchableOpacity style={styles.txtTrans}>
              <Text style={styles.txtTitleTrans}>Lượt chơi quy đổi</Text>
              <Text style={styles.txtContentTrans}>
                Bạn còn{' '}
                <Text style={{fontWeight: 'bold', color: 'yellow'}}>3</Text>{' '}
                lượt chơi
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </LinearGradient>
      </Modal>

      <View style={styles.btn}>
        <Text
          onPress={() => navigation.navigate('HuongDan')}
          style={styles.txtTitle}>
          {' '}
          Hướng dẫn
        </Text>
        <TouchableOpacity style={styles.btnPlayHome} onPress={onPressLuotchoi}>
          <View style={styles.btnImageHome}>
            <Image
              resizeMode="contain"
              style={styles.BtnPlayHomeLeft}
              source={BtnPlayHomeLeft}
            />
            <Image
              resizeMode="contain"
              style={styles.btnBackGroundPlay}
              source={btnPopUpPlay}
            />
            <Image
              resizeMode="contain"
              style={styles.BtnPlayHomeRight}
              source={BtnPlayHomeRight}
            />
          </View>
          <View style={styles.txtPlay}>
            <Text style={styles.txtTitlePlay}>Chơi ngay</Text>
            <Text style={styles.txtContentPlay}>
              Bạn còn{' '}
              <Text style={{fontWeight: 'bold', color: 'yellow'}}>
                {LuotChoi}
              </Text>{' '}
              lượt chơi
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('QRcode')}>
          <Image
            resizeMode="contain"
            style={styles.btnQuetMa}
            source={btnQuetMa}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('BoSuuTap')}>
          <Image
            resizeMode="contain"
            style={styles.btnBoSuuTap}
            source={btnBoSuuTap}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Image
            resizeMode="contain"
            style={styles.btnDetailGift}
            source={btnDetailGift}
          />
        </TouchableOpacity>
      </View>

      <Image
        resizeMode="contain"
        style={styles.imageHomeTrong}
        source={imageHomeTrong}
      />
      <View style={styles.Home}>
        <TouchableOpacity>
          <Image source={HomeIndicator} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageTopLeft: {
    flexDirection: 'row',
  },
  ImageHomeTopLeft: {
    width: 300,
    height: 400,
  },
  ImageHomeTopCenter: {
    position: 'absolute',
    marginLeft: 68,
    width: 150,
    height: 110,
  },
  TopRight: {
    marginLeft: 4,
  },
  iconLogOut: {
    width: 60,
    aspectRatio: 1,
    marginRight: 20,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 30,
  },
  imageHomeRight: {
    width: 80,
    aspectRatio: 1,
  },
  imageHomeLogo: {
    position: 'absolute',
    marginLeft: '20%',
    marginTop: '30%',
    width: 200,
    height: 180,
  },
  Home: {
    position: 'absolute',
    marginTop: 684,
    alignSelf: 'center',
  },
  imageBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: '85%',
  },
  imageBodyLeft: {
    position: 'absolute',
  },
  imageHomeBodyLeft: {
    width: 180,
    height: 270,
  },
  imageHomeBodyRight: {
    width: 240,
    height: 200,
    marginLeft: 50,
  },
  imageFlowerBottomBody: {
    marginTop: 50,
  },
  txtTitle: {
    color: '#FFDD00',
    marginTop: 24,
    fontSize: 20,
    marginLeft: '25%',
    fontWeight: 'bold',
  },
  btn: {
    position: 'absolute',
    marginLeft: '18%',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '72%',
  },
  btnQuetMa: {
    width: 250,
    height: 60,
  },
  btnBoSuuTap: {
    width: 250,
    height: 60,
  },
  btnDetailGift: {
    width: 250,
    height: 60,
  },
  imageHomeBottom: {
    width: 390,
    aspectRatio: 1,
    position: 'absolute',
    marginTop: '82%',
  },
  imageHomeTrong: {
    alignSelf: 'center',
    marginTop: '60%',
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
  btnCloes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  iconCloes: {
    width: 36,
    aspectRatio: 1,
    marginRight: 20,
  },
  imagePopUpPlayLeft: {
    width: 50,
    aspectRatio: 1,
  },
  textPopUp: {
    marginTop: 50,
    fontSize: 20,
    width: 200,
    textAlign: 'center',
    color: '#D02027',
    fontWeight: '900',
    lineHeight: 26,
  },
  imagePopUpPlayBody: {
    width: 100,
    height: 220,
    marginLeft: '72%',
  },
  btnPopUpPlay: {
    borderWidth: 1,
    position: 'absolute',
    marginTop: '38%',
    width: '66%',
    height: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#D02027',
    backgroundColor: '#D02027',
    borderRadius: 8,
  },
  btnBackGroundPlay: {
    width: 120,
    alignSelf: 'center',
  },
  txtPlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtTitlePlay: {
    fontWeight: '900',
    fontSize: 18,
    color: '#fff',
    lineHeight: 22,
  },
  txtContentPlay: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '900',
    lineHeight: 14,
  },

  btnPopUpTrans: {
    borderWidth: 1,
    position: 'absolute',
    marginTop: 220,
    width: 236,
    height: 64,
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#D02027',
    backgroundColor: '#D02027',
    borderRadius: 8,
  },
  btnBackGroundTrans: {
    width: 120,
    alignSelf: 'center',
  },
  txtTrans: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtTitleTrans: {
    fontWeight: '900',
    fontSize: 18,
    color: '#fff',
    lineHeight: 22,
  },
  txtContentTrans: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '900',
    lineHeight: 14,
  },
  btnPlayHome: {
    borderWidth: 1,
    // position: 'absolute',
    marginTop: 10,
    width: 230,
    height: 60,
    marginRight: 16,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#D02027',
    backgroundColor: '#D02027',
    borderRadius: 8,
    borderColor: 'yellow',
  },
  btnImageHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BtnPlayHomeLeft: {
    borderTopLeftRadius: 4,
  },
  BtnPlayHomeRight: {
    marginTop: 24,
    borderBottomRightRadius: 4,
  },
  txtPopupLuotchoi: {
    alignSelf: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  iconCloesLuotChoi: {
    marginRight: 20,
    marginTop: 10,
  },
  textPopupLuotchoiContent: {
    fontSize: 18,
    color: 'yellow',
    fontWeight: '900',
    lineHeight: 22,
    letterSpacing: 1,
  },
  textPopupLuotchoiTitle: {
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
  },
  imagePopupBottomLuotChoi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagePopUpLuotChoiBottomLeft: {
    marginTop: 126,
    borderBottomLeftRadius: 4,
  },
  imageBodyPopupLuotChoi: {
    position: 'absolute',
    marginTop: '26%',
    alignSelf: 'center',
  },
  modalLuotChoi: {
    borderRadius: 14,
    height: '50%',
  },
  txtTitleLuotChoi: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  btnPopUpTransLuotChoi: {
    borderWidth: 1,
    position: 'absolute',
    marginTop: 270,
    width: 170,
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: 'yellow',
    backgroundColor: '#D02027',
    borderRadius: 20,
  },
});
