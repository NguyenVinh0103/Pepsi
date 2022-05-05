import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {normalize, normalizeHorizontal} from '../../Helps';
import auth from '@react-native-firebase/auth';

import {
  BackgroundTopLeft,
  BackgroundTopRight,
  btnBackgroundOTP,
  lon,
  btnLoginLeft,
  btnLoginRight,
  btnOTPRight,
  btnOTPLeft,
  flowerBottom,
  flowerRight,
  flowerTop,
  HomeIndicator,
  imageBottomLeft,
  imageBottomRight,
} from '../../Assets';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  // const insets = useSafeAreaInsets();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const lengthInput = 6;

  let textInput = useRef(null);

  // const [internalVal, setInternalVal] = useState("");

  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);

  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    if (confirmation) setConfirm(confirmation);
  };
  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      alert('Sign In Success');
      navigation.navigate('Home')
    } catch (error) {
      alert(JSON.stringify(error));
      console.log(JSON.stringify(error));
    }
  };

  if (!confirm) {
    return (
      // <View style={{marginTop: Math.max(insets.top,20)}}></View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#02A7F0', '#0063A7']}
        style={styles.linearGradient}>
        <KeyboardAwareScrollView style={{height: '100%'}}>
          <View style={styles.Top}>
            <View style={styles.BackgroundTop}>
              <Image
                style={styles.imageTopLeft}
                resizeMode="cover"
                source={BackgroundTopLeft}
              />
              <View style={styles.txtCenter}>
                <Text style={styles.txtHi}>Hey, mừng bạn đến với</Text>
                <Text style={styles.txtContent}>Pepsi Tết</Text>
              </View>
              <Image
                style={styles.imageTopRight}
                resizeMode="contain"
                source={BackgroundTopRight}
              />
            </View>
          </View>
          <Image
            style={styles.imageFlowerTop}
            resizeMode="contain"
            source={flowerTop}
          />

          <View style={styles.formDangKy}>
            <Text style={styles.txtDangKy}>Đăng nhập</Text>
            <Text style={styles.txtSDT}>Số điện thoại</Text>
            <TextInput
              style={styles.inputPhone}
              placeholder="Số điện thoại"
              placeholderTextColor="#2D2D2D"
              // onChangeText={value => setPhone(value)}
              // value={phone}
            />
          </View>

          <View style={styles.Flow}>
            <Image
              style={styles.imageFlowerBottom}
              resizeMode="contain"
              source={flowerBottom}
            />
            <Image style={styles.imageLon} resizeMode="contain" source={lon} />

            <Image
              style={styles.imageFlowerRight}
              resizeMode="contain"
              source={flowerRight}
            />
          </View>
          <TouchableOpacity
            onPress={() => signInWithPhoneNumber('+1 0789759016')}
            style={styles.btnCode}>
            <View style={styles.btnOTP}>
              <Image
                style={styles.imageOTPLeft}
                resizeMode="cover"
                source={btnOTPLeft}
              />
              <Text style={styles.txtOTP}> Lấy mã OTP</Text>
            </View>
            <Image
              style={styles.imageOTPRight}
              resizeMode="cover"
              source={btnOTPRight}
            />
          </TouchableOpacity>
          <View style={styles.imageBottom}>
            <Image
              style={styles.bottomLeft}
              resizeMode="cover"
              source={imageBottomLeft}
            />
            <Text style={styles.txtOr}> Hoặc </Text>
            <Image
              style={styles.BottomRight}
              resizeMode="cover"
              source={imageBottomRight}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.btnLogin}>
            <View style={styles.btnOTP}>
              <Image
                style={styles.imageOTPLeft}
                resizeMode="cover"
                source={btnLoginLeft}
              />
              <Text style={styles.txtLogin}> Đăng nhập</Text>
            </View>
            <Image
              style={styles.imageOTPRight}
              resizeMode="cover"
              source={btnLoginRight}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.Home}>
            <Image source={HomeIndicator} />
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#02A7F0', '#0063A7']}
      style={styles.linearGradient}>
      <View style={styles.Top1}>
        <View
          style={[
            styles.BackgroundTop1,
            {
              marginTop: insets.top,
            },
          ]}>
          <Image
            style={styles.imageTopLeft1}
            resizeMode="cover"
            source={BackgroundTopLeft}
          />
          <View style={styles.txtCenter1}>
            <Text style={styles.txtHi1}>Hey, mừng bạn đến với</Text>
            <Text style={styles.txtContent1}>Pepsi Tết</Text>
          </View>
          <Image
            style={styles.imageTopRight1}
            resizeMode="contain"
            source={BackgroundTopRight}
          />
        </View>
      </View>
      <Image
        style={styles.imageFlowerTop1}
        resizeMode="contain"
        source={flowerTop}
      />
      <View style={styles.formDangKy1}>
        <Text style={styles.txtDangKy1}>Xác minh OTP</Text>
        <Text style={styles.txtSDT1}>
          Nhập mã vừa được gửi về điện thoại của bạn
        </Text>
      </View>
      <View>
        <View style={styles.inputOTP1}>
          {Array(lengthInput)
            .fill()
            .map((data, index) => (
              <View
                key={index}
                style={[
                  styles.cellView1,
                  {
                    backgroundColor: index === code.length ? '#fff' : 'red',
                  },
                ]}>
                <Text style={styles.cellText1} onPress={() => textInput.focus()}>
                  {code && code.length > 0 ? code[index] : '-'}
                </Text>
              </View>
            ))}
        </View>
        <TextInput
          ref={input => (textInput = input)}
          onChangeText={text => setCode(text)}
          style={{
            position: 'absolute',
            marginLeft: 62,
            height: 60,
            fontSize: 0,
          }}
          value={code}
          maxLength={lengthInput}
          returnKeyType="done"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.Flow1}>
        <TouchableOpacity onPress={() => confirmCode()} style={styles.btnCode1}>
          <View style={styles.btnOTP1}>
            <Image
              style={styles.imageOTPLeft1}
              resizeMode="cover"
              source={btnOTPLeft}
            />
            <Text style={styles.txtOTP1}> Lấy mã OTP </Text>
          </View>
          <Image
            style={styles.imageOTPRight1}
            resizeMode="cover"
            source={btnOTPRight}
          />
        </TouchableOpacity>
        <Image
          style={styles.imageFlowerRight1}
          resizeMode="contain"
          source={flowerRight}
        />
      </View>
      <View style={styles.senCode1}>
        <Image
          style={styles.imageFlowerBottom1}
          resizeMode="contain"
          source={flowerBottom}
        />
        <TouchableOpacity style={styles.txtSend1}>
          <Text style={styles.txtCheckbox1}>
            Bạn chưa nhận được mã ?
            <Text style={styles.txtBold1}> Gửi lại mã </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageBottom1}>
        <Image
          style={styles.bottomLeft1}
          resizeMode="cover"
          source={imageBottomLeft}
        />
        <Image
          style={styles.BottomRight1}
          resizeMode="cover"
          source={imageBottomRight}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.Home}>
        <Image source={HomeIndicator} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BackgroundTop: {
    flexDirection: 'row',
  },
  imageTopLeft: {
    width: 96,
    height: 150,
  },
  imageTopRight: {
    width: 124,
    height: 150,
  },
  txtCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '18%',
  },
  txtHi: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 1,
  },
  txtContent: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '900',
    lineHeight: 36,
    marginTop: 12,
    letterSpacing: 2,
  },
  txtDangKy: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '900',
    letterSpacing: 2,
  },
  inputPhone: {
    width: '96%',
    backgroundColor: '#fff',
    paddingVertical: 6,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 16,
    borderRadius: 8,
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: 12,
    alignItems: 'center',
  },
  txtSDT: {
    color: '#fff',
    fontWeight: '900',
    lineHeight: 18,
    fontSize: 14,
    marginLeft: 16,
  },
  CheckBoxForm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 20,
  },
  checkBox: {
    backgroundColor: '#005082;',
  },
  txtCheckbox: {
    color: '#fff',
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 14,
    marginRight: 30,
  },
  txtBold: {
    color: 'yellow',
    fontWeight: 'bold',
    lineHeight: 18,
    fontSize: 14,
  },
  Flow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageFlowerRight: {
    width: 40,
    aspectRatio: 1,
    marginTop: 70,
  },
  imageFlowerBottom: {
    width: 50,
    aspectRatio: 1,
    marginTop: '25%',
  },
  imageLon: {
    width: 140,
    height: 150,
    alignSelf: 'center',
  },
  btnCode: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    // marginLeft:20,
    borderRadius: 12,
    borderColor: '#C5CEE0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#8E8E8E',
  },
  btnOTP: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageOTPLeft: {
    width: 60,
    height: 50,
  },
  imageOTPRight: {
    width: 60,
    height: 50,
  },
  txtOTP: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 22,
  },
  btnLogin: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#FBC926',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 566,
  },
  txtLogin: {
    color: '#0063A7',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 22,
    letterSpacing: 1,
  },
  txtOr: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
  },
  imageBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomLeft: {
    width: 160,
    height: 180,
    marginTop: 16,
  },
  BottomRight: {
    width: 190,
    height: 190,
    marginTop: 20,
  },
  Home: {
    position: 'absolute',
    marginTop: 680,
    alignSelf: 'center',
  },

  BackgroundTop1: {
    flexDirection: 'row',
  },
  imageTopLeft1: {
    width: 96,
    height: 150,
  },
  imageTopRight1: {
    width: 124,
    height: 150,
  },
  txtCenter1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '18%',
  },
  txtHi1: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 1,
  },
  txtContent1: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '900',
    lineHeight: 36,
    marginTop: 12,
    letterSpacing: 2,
  },
  txtDangKy1: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '900',
    letterSpacing: 2,
  },
  cellView1: {
    paddingVertical: 12,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  cellText1: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
  inputOTP1: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  txtSDT1: {
    color: '#fff',
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 14,
    marginLeft: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  txtCheckbox1: {
    color: '#fff',
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 14,
    marginTop: 12,
    marginLeft: 30,
  },
  txtBold1: {
    color: 'yellow',
    fontWeight: 'bold',
    lineHeight: 18,
    fontSize: 14,
  },
  Flow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageFlowerRight1: {
    width: 40,
    aspectRatio: 1,
    marginTop: 52,
  },
  imageFlowerBottom1: {
    width: 50,
    aspectRatio: 1,
  },
  btnCode1: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    // marginLeft:20,
    borderRadius: 12,
    borderColor: '#C5CEE0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#8E8E8E',
    marginLeft: 76,
  },
  senCode1: {
    flexDirection: 'row',
  },
  btnOTP1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageOTPLeft1: {
    width: 60,
    height: 50,
  },
  imageOTPRight1: {
    width: 60,
    height: 50,
  },
  txtOTP1: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 22,
  },
  btnLogin1: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#FBC926',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 566,
  },
  txtLogin1: {
    color: '#0063A7',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 22,
    letterSpacing: 1,
  },
  txtOr1: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
  },
  imageBottom1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomLeft1: {
    width: 160,
    height: 180,
    marginTop: 60,
  },
  BottomRight1: {
    width: 220,
    aspectRatio: 1,
    marginTop: 50,
  },
  Home1: {
    position: 'absolute',
    marginTop: 680,
    alignSelf: 'center',
  },
});
