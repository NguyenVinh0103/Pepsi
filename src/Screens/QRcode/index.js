import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
//   import {normalize, normalizeHorizontal} from '../../Helps';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Modal from 'react-native-modal';

import {
  BackgroundTopLeft,
  imagePlayGameRight,
  iconLogOut,
  iconBack,
  imageBottomLeft,
  imageBottomRight,
  flowerRight,
  flowerTop,
  imageBodyQRcode,
  imageQRcode,
  btnQRcode,
  HomeIndicator,
  btnCloes,
  imageBodyQRcodePopup,
} from '../../Assets';

const QRcode = ({navigation}) => {
  // const insets = useSafeAreaInsets();
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState(null);
  const [isModalOk, setModalOk] = useState(false);

  const onPressOk = () => {
    setModalOk(!isModalOk);
  };

  useEffect(() => {
    setResult(null);
  }, []);

  const onSuccess = e => {
    setResult(e);
    setScan(false);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
    if (e.data.substring(0, 4) === 'http://') {
      alert(e.data);
    }
  };
  return !scan ? (
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
              <Text style={styles.txtHi}>Quét mã</Text>
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
      <View style={styles.flowerBody}>
        <Image
          style={styles.imageBodyQRcode}
          resizeMode="contain"
          source={imageBodyQRcode}
        />
        <Image
          style={styles.imageFlowerBodyRight}
          resizeMode="contain"
          source={flowerRight}
        />
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
      <Image
        style={styles.imageQRcode}
        resizeMode="stretch"
        source={imageQRcode}
      />
      <TouchableOpacity onPress={() => setScan(true)} style={styles.btnQRcode}>
        <Image source={btnQRcode} />
      </TouchableOpacity>
      <Image style={styles.Home} source={HomeIndicator} />
    </LinearGradient>
  ) : (
    <QRCodeScanner
      onRead={onSuccess}
      ref={scanner}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>
            on your computer and scan the QR code.
          </Text>{' '}
        </Text>
      }
      bottomContent={
        <>
          <Modal
            isVisible={isModalOk}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={1000}
            animationOutTiming={1000}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#FCD54E', '#FDEA95', '#FBD239']}
              style={styles.modal}>
              <TouchableOpacity onPress={onPressOk} style={styles.btnCloesIcon}>
                <Image
                  resizeMode="stretch"
                  style={styles.btnCloes}
                  source={btnCloes}
                />
              </TouchableOpacity>

              <View style={styles.BodyPopup}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageBodyQRcodePopup}
                  source={imageBodyQRcodePopup}
                />
                <View style={styles.txtBodyPopup}>
                  <Text style={styles.txtTitle}>Bạn nhận được</Text>
                  <Text style={styles.txtContentPopUp}>5</Text>
                  <Text style={styles.txtTitle}>Lượt chơi</Text>
                  <Text style={styles.txtBottom}>
                    Bạn đang có <Text style={styles.txtBottomPop}>08</Text> lượt
                    chơi
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.btnPopUpTransLuotChoi}
                onPress={onPressOk}>
                <Text style={styles.txtTitleLuotChoi}>Scan Ngay</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnPopUpTransChoiNgay}
                onPress={() => navigation.navigate('Game')}>
                <Text style={styles.txtTitleLuotChoi}>Chơi ngay</Text>
              </TouchableOpacity>
            </LinearGradient>
          </Modal>
          <TouchableOpacity
            onPress={() => setScan(true)}
            style={styles.buttonTouchable}>
            <Text onPress={onPressOk} style={styles.buttonTextOk}>
              Ok !
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setScan(false)}
            style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Stop! Scan</Text>
          </TouchableOpacity>
        </>
      }
    />
  );
};

export default QRcode;

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
    marginLeft: 36,
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
    marginTop: 100,
  },
  imageFlowerTop: {
    width: 40,
  },
  flowerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageFlowerBodyRight: {
    marginTop: 120,
  },
  imageBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  bottomLeft: {
    width: 160,
    height: 180,
  },
  BottomRight: {
    width: 190,
    height: 190,
  },
  imageQRcode: {
    width: 300,
    height: 480,
    position: 'absolute',
    marginTop: '25%',
    marginLeft: '12%',
  },
  btnQRcode: {
    alignSelf: 'center',
    marginTop: 620,
    position: 'absolute',
  },
  Home: {
    position: 'absolute',
    marginTop: 680,
    alignSelf: 'center',
  },

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  modal: {
    height: '60%',
    borderRadius: 14,
  },
  btnCloesIcon: {
    marginLeft: 300,
    marginRight: 40,
    marginTop: 20,
    position: 'absolute',
  },
  btnCloes: {
    width: 40,
    height: 50,
    marginRight: 20,
    position: 'absolute',
  },
  imageBodyQRcodePopup: {
    width: 300,
    height: 270,
    marginTop: 20,
  },
  BodyPopup: {
    position: 'absolute',
    alignSelf: 'center',
  },
  txtBodyPopup: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  txtTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
  },
  txtContentPopUp: {
    color: '#005082',
    fontSize: 90,
    fontWeight: '900',
  },
  txtBottom: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 20,
  },
  txtBottomPop: {
    color: '#005082',
    fontSize: 20,
    fontWeight: '900',
  },
  btnPopUpTransLuotChoi: {
    position: 'absolute',
    marginTop: 290,
    width: 170,
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#D02027',
    borderRadius: 20,
  },
  txtTitleLuotChoi: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  btnPopUpTransChoiNgay: {
    position: 'absolute',
    marginTop: 340,
    width: 170,
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#D02027',
    borderRadius: 20,
  },
  txtTitleLuotChoi: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonTextOk: {
    marginTop: 50,
    fontSize: 21,
    color: 'rgb(0,122,255)',
    marginBottom: 10,
  },
});
