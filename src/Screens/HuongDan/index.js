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
  flowerBottom,
  flowerRight,
  flowerTop,
  imageBottomRight,
  imageHuongDanRight,
  imageBodyHuongDanTop,
  imageBodyHuongDanBottom,
  HomeIndicator,
} from '../../Assets';

const BoSuuTap = ({navigation}) => {
  const [isModalDoiNgay, setModalDoiNgay] = useState(false);

  const onPressPlayGame = () => {
    setModalDoiNgay(!isModalDoiNgay);
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
              <Text style={styles.txtHi}>Hướng dẫn</Text>
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

      <View style={styles.txt}>
        <Image
          style={styles.imageFlowerBottom}
          resizeMode="contain"
          source={flowerBottom}
        />
        <Image
          style={styles.imageHuongDanRight}
          resizeMode="contain"
          source={imageHuongDanRight}
        />
      </View>
      <Image
        style={styles.BottomRight}
        resizeMode="cover"
        source={imageBottomRight}
      />
      <View style={styles.BodyHuongDan}>
        <Image
          style={styles.imageBodyHuongDanTop}
          resizeMode="contain"
          source={imageBodyHuongDanTop}
        />
        <Text style={styles.txtBody}>
          <Text style={{color: '#fff' , fontWeight: '900', fontSize: 16}}>Bước 1:</Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius in pulvinar feugiat rutrum libero volutpat.{' '}
        </Text>
        <Image
          style={styles.imageBodyHuongDanBottom}
          resizeMode="contain"
          source={imageBodyHuongDanBottom}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image style={styles.Home} source={HomeIndicator} />
      </TouchableOpacity>
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
  txt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageFlowerBottom: {
    marginTop: 150,
  },
  BottomRight: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: '86%',
  },
  Home: {
    alignSelf: 'center',
    marginTop: '45%',
    position: 'absolute',
  },
  BodyHuongDan:{
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '18%',
  },
  txtBody:{
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: 250,
      marginTop: 10,
      marginBottom: 10
  }
});
