import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';
import React, {useState,useRef, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {normalize, normalizeHorizontal} from '../../Helps';
import {
  BackgroundTopLeft,
  imagePlayGameRight,
  imageBottomPlayGame,
  btnBodyPlayGame,
  btnPlayGame,
  iconLogOut,
  iconBack,
  HomeIndicator,
  imageFlowerPlayGameLeft,
  imageFlowerPlaygameRight,
  imageFlowerPlayGameBottom,
  imageHomeLogo,
} from '../../Assets';

const Game = ({navigation}) => {
  // const insets = useSafeAreaInsets();
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: -80}}, // Back to zero
        navigation.navigate('Congratulation')
      ).start();
    },
  });

  

  return (
    // <View style={{marginTop: Math.max(insets.top,20)}}></View>

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
              <Text style={styles.txtHi}>Vuốt lên để chơi</Text>
              <Text style={styles.txtContent}>
                bạn còn{' '}
                <Text style={{fontWeight: '900', color: 'yellow'}}>3</Text> lượt
                chơi miễn phí
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image style={styles.iconLogOut} source={iconLogOut} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Image
        style={styles.imageFlowerPlaygameRight}
        source={imageFlowerPlaygameRight}
      />
      <View style={styles.FlowerBody}>
        <Image
          style={styles.imageFlowerPlayGameLeft}
          source={imageFlowerPlayGameLeft}
        />
        <Image
          style={styles.imageFlowerPlayGameBottom}
          source={imageFlowerPlayGameBottom}
        />
      </View>
      <View style={styles.Body}>
        <Image
          resizeMode="stretch"
          style={styles.btnBodyPlayGame}
          source={btnBodyPlayGame}
        />
        <Image
          resizeMode="stretch"
          style={styles.btnPlayGame}
          source={btnPlayGame}
        />
      </View>
      <Image
        resizeMode="stretch"
        style={styles.imageBottomPlayGame}
        source={imageBottomPlayGame}
      />

      <Animated.Image
        {...panResponder.panHandlers}
        resizeMode="stretch"
        source={imageHomeLogo}
        style={[pan.getLayout(), styles.imageHomeLogo]}
      />

        

      <Image style={styles.Home} source={HomeIndicator} />
    </LinearGradient>
  );
};

export default Game;

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
    marginLeft: 40,
    marginTop: 32,
  },
  contentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 36,
  },
  txtCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
    marginTop: 30,
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
  imageFlowerPlaygameRight: {
    width: 40,
    marginLeft: '90%',
    position: 'absolute',
    marginTop: 120,
  },
  FlowerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '75%',
  },
  imageFlowerPlayGameBottom: {
    marginTop: '20%',
  },
  Body: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnBodyPlayGame: {
    width: 400,
    height: 500,
    marginTop: '20%',
  },
  btnPlayGame: {
    width: 60,
    height: 40,
    position: 'absolute',
    marginTop: 520,
  },
  imageBottomPlayGame: {
    width: '100%',
    position: 'absolute',
    marginTop: '114%',
  },
  imageHomeLogo: {
    alignSelf: 'center',
    width: 200,
    height: 150,
  },

  Home: {
    position: 'absolute',
    marginTop: 680,
    alignSelf: 'center',
  },
});
