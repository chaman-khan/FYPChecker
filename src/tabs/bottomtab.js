import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Donor_Notification from '../../screens/Local_Donor/Notification/Notification';
import Donor_Category from '../../screens/Local_Donor/Category/Category';
import Donor_Setting from '../../screens/Local_Donor/Setting/Setting';
import Donor_Request from '../../screens/Local_Donor/Request/request';
import Home from '../screens/Admin/home';
import AddClass from '../screens/Admin/addClass';
import ListOfClasses from '../screens/Admin/listClass';
import About from '../screens/Admin/about';
import { theme } from '../constants/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.primary,
        inactiveTintColor: 'gray', // Set your desired inactive color
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'relative',
          borderTopWidth: 0,
          height: 50,
          elevation: 5,
        },
        // tabBarLabelStyle: {
        //   fontSize: 10,
        //   fontWeight: '600',
        //   fontFamily: 'Poppins',
        // },
        tabBarItemStyle: {
          paddingVertical: 2,
          paddingHorizontal: 20,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let Screen_name = route.name;
          if (Screen_name === 'Home') {
            iconName = require('../Images/Frame.png');
          } else if (Screen_name === 'AddClass') {
            iconName = require('../Images/Classroom.png');
          } else if (Screen_name === 'ListOfClasses') {
            iconName = require('../Images/List View.png');
          } else if (Screen_name === 'About') {
            iconName = require('../Images/About.png');
          }
          return (
            <Image
              source={iconName}
              size={size}
              tintColor={color}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
            // <Ionicons
            //   name={iconName}
            //   size={size}
            //   color={color}
            //   style={{height: 30, width: 30}}
            // />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddClass"
        component={AddClass}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ListOfClasses"
        component={ListOfClasses}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
