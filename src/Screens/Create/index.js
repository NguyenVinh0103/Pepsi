import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {normalize, normalizeHorizontal} from '../../Helps';

import {Formik, Form, Field} from 'formik';
import {SignupSchema} from '../../Constrains';

import {
  BackgroundTopLeft,
  BackgroundTopRight,
  btnBackgroundOTP,
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
  Alert,
} from '../../Assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Create = ({navigation}) => {
  // const insets = useSafeAreaInsets();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const onSubmitHandler = values => {
    Alert.alert('Login Success!', 'Data' + JSON.stringify(values));
  };
  const isFormValid = (isValid, touched) => {
    return isValid && Object.keys(touched).length !== 0;
  };

  return (
    // <View style={{marginTop: Math.max(insets.top,20)}}></View>

    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#02A7F0', '#0063A7']}
      style={styles.linearGradient}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
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
        <Formik
          initialValues={{phone: '', username: ''}}
          validationSchema={SignupSchema}
          onSubmit={onSubmitHandler}>
          {({handleChange, handleBlur, values, errors, touched, isValid}) => (
            <>
              <View style={styles.formDangKy}>
                <Text style={styles.txtDangKy}>Đăng Ký</Text>

                <TextInput
                  style={styles.inputPhone}
                  placeholder="Số điện thoại"
                  placeholderTextColor="#2D2D2D"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}></TextInput>
                {errors.phone && touched.phone ? (
                  <Text style={{color: 'red', marginLeft: 35}}>
                    {errors.phone}
                  </Text>
                ) : null}

                <TextInput
                  style={styles.inputUserName}
                  placeholder="Tên người dùng"
                  placeholderTextColor="#2D2D2D"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}></TextInput>
                {errors.username && touched.username ? (
                  <Text style={{color: 'red', marginLeft: 35}}>
                    {errors.username}
                  </Text>
                ) : null}
              </View>
              <View style={styles.CheckBoxForm}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                  style={styles.checkBox}
                  tintColors={{true: '#Fff', false: '#fff'}}
                />
                <Text style={styles.txtCheckbox}>
                  Tôi đã đọc và đồng ý với
                  <Text
                    onPress={() => navigation.navigate('DocEvent')}
                    style={styles.txtBold}>
                    {' '}
                    thể lệ chương trình{' '}
                  </Text>
                  Pepsi Tết
                </Text>
              </View>
              <View style={styles.Flow}>
                <Image
                  style={styles.imageFlowerBottom}
                  resizeMode="contain"
                  source={flowerBottom}
                />
                <Image
                  style={styles.imageFlowerRight}
                  resizeMode="contain"
                  source={flowerRight}
                />
              </View>
              <TouchableOpacity
                disabled={!isFormValid(isValid, touched)}
                onPress={() => navigation.navigate('OTP')}
                style={[
                  styles.btnCode,
                  {
                    backgroundColor: isFormValid(isValid, touched) ? 'red' : '#8E8E8E',
                  },
                ]}>
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
                onPress={() => navigation.navigate('Login')}
                style={styles.btnLogin}>
                <View style={styles.btnOTP}>
                  <Image
                    style={styles.imageOTPLeft}
                    resizeMode="cover"
                    source={btnLoginLeft}
                  />
                  <Text style={styles.txtLogin}> Đăng ký</Text>
                </View>
                <Image
                  style={styles.imageOTPRight}
                  resizeMode="cover"
                  source={btnLoginRight}
                />
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <Image style={styles.Home} source={HomeIndicator} />
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Create;

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
  inputUserName: {
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
    marginTop: 8,
  },
  imageFlowerBottom: {
    width: 50,
    aspectRatio: 1,
    marginTop: '8%',
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
    marginTop: 570,
  },
  txtLogin: {
    color: '#0063A7',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 22,
    letterSpacing: 2,
    paddingLeft: 6,
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
  },
  Home: {
    position: 'absolute',
    marginTop: 680,
    alignSelf: 'center',
  },
});
