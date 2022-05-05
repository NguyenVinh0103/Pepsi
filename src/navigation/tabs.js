import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailGift from '../Screens/DetailGift/index';
import MyDetailGift from '../Screens/MyDetailGift/index';


const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          marginBottom: 600,
          marginLeft: 46,
          marginRight: 12,
          elevation: 0,
          borderRadius: 12,
          height: 44,
          shadowColor: '#7fff00',
          ...styles.shadow,
          width: 300,
          height: 44
        },
      }}>
      <Tab.Screen
        name="DetailGift"
        component={DetailGift}
        options={{
          tabBarIcon: ({focused}) => (
            <View style = {{
              width:150,
              alignItems: 'center',
              borderBottomLeftRadius:8,
              borderTopLeftRadius:8,
              height: 44,
              backgroundColor : focused ? '#fff' : 'red',
              justifyContent: 'center',}}>
              <Text style = {{color: focused ? 'red' : '#fff', fontSize: 18 , fontWeight: '900', letterSpacing: 1}}>Đổi quà</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyDetailGift"
        component={MyDetailGift}
        options={{
          tabBarIcon: ({focused}) => (
            <View style = {{
              width:150,
              alignItems: 'center',
              borderTopRightRadius:8,
              borderBottomRightRadius:8,
              height: 44,
              backgroundColor : focused ? '#fff' : 'red',
              justifyContent: 'center',}}>
              <Text style = {{color: focused ? 'red' : '#fff', fontSize: 18 , fontWeight: '900', letterSpacing: 1}}>Quà của tôi</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.65,
    shadowRadius: 9.5,
    elevation: 9,
  },
});

export default Tabs;