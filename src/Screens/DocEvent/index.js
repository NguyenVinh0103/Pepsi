import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {normalize, normalizeHorizontal} from '../../Helps';

import {
  BackgroundTopRight,
  flowerRight,
  flowerTop,
  HomeIndicator,
  iconBack,
} from '../../Assets';

const DocEvent = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#02A7F0', '#0063A7']}
      style={styles.linearGradient}>
      <View style={styles.content}>
        <View style={styles.Top}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.iconContent}
              resizeMode="contain"
              source={iconBack}
            />
          </TouchableOpacity>

          <Text style={styles.txtHi}>Thể lệ chương trình</Text>
        </View>
        <Image
          style={styles.imageTopRight}
          resizeMode="stretch"
          source={BackgroundTopRight}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.txt1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam.
          Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et
          sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu
          lobortis et turpis. Duis id parturient sit et faucibus cursus. A
          maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam
          nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus
          elementum risus aliquam nunc in. Sapien nunc ornare fermentum non
          laoreet nec turpis sit turpis.
        </Text>

        <Text style={styles.txt2}>
          Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat
          dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus
          erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar
          sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis
          porta tortor congue. Nunc, elementum leo maecenas neque
          ultrices.Pellentesque enim id quis porta tortor congue. Nunc,
          elementum leo maecenas neque ultrices.Pellentesque enim id quis porta
          tortor congue
        </Text>
        <Text style={styles.txt3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam.
          Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et
          sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu
          lobortis et turpis. Duis id parturient sit et faucibus cursus. A
          maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam
          nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus
          elementum risus aliquam nunc in. Sapien nunc ornare fermentum non
          laoreet nec turpis sit turpis.
        </Text>
        <Text style={styles.txt4}>
          Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat
          dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus
          erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar
          sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis
          porta tortor congue. Nunc, elementum leo maecenas neque
          ultrices.Pellentesque enim id quis porta tortor congue. Nunc,
          elementum leo maecenas neque ultrices.Pellentesque enim id quis porta
          tortor congue. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue
          fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas
          volutpat sapien neque et sit mauris quis. Neque consectetur egestas
          nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et
          faucibus cursus. A maecenas nec enim consectetur non, donec vitae.
          Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo
          elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc
          ornare fermentum non laoreet nec turpis sit turpis
        </Text>
      </ScrollView>
      <View>
        <View style={styles.imageFlower}>
          <Image
            style={styles.imageFlowerLeft}
            resizeMode="contain"
            source={flowerTop}
          />
          <Image
            style={styles.imageFlowerRight}
            resizeMode="contain"
            source={flowerRight}
          />
        </View>
        <Image
          style={styles.imageFlowerBottom}
          resizeMode="contain"
          source={flowerTop}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image style={styles.Home} source={HomeIndicator} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DocEvent;

const TXT = {
  fontSize: 12,
  fontWeight: '400',
  lineHeight: 15,
  color: '#fff',
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContent: {
    width: 30,
    aspectRatio: 1,
    marginLeft: 36,
  },
  imageTopRight: {
    width: 90,
    height: 200,
  },
  txtHi: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
    lineHeight: 22,
    letterSpacing: 1,
    marginLeft: 20,
    marginTop: 4,
  },
  txt1: {
    ...TXT,
  },
  txt2: {
    ...TXT,
    marginTop: 20,
  },
  txt3: {
    ...TXT,
    marginTop: 20,
  },
  txt4: {
    ...TXT,
    marginTop: 20,
  },
  scrollView: {
    position: 'absolute',
    marginTop: '34%',
    height: '76%',
    width: 300,
    marginHorizontal: 60,
  },
  imageFlower: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageFlowerRight: {
    marginTop: '30%',
  },
  imageFlowerBottom: {
    marginTop: '50%',
  },
  Home: {
    position: 'absolute',
    marginTop: 680,
    alignSelf: 'center',
  },
});
