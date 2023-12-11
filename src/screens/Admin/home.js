import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../constants/theme';

const Home = () => {
  return (
    <View>
      <View style={styles.topBar}>
        <Text style={styles.homeText}>HOME</Text>
      </View>
      <View style={{width: '85%', alignSelf: 'center'}}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text
          style={styles.text}>
          Have a nice day.
        </Text>
        <View
          style={{...styles.btnView, marginTop: 70}}>
          <Text style={{fontSize: 24, fontFamily: 'Roboto'}}>Add Class</Text>
        </View>
        <View style={styles.btnView}>
          <Text>Check Class List</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: 71,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    marginBottom: 50,
    borderRadius: '30 30 0 0'

  },
  welcomeText: {
    color: theme.colors.primary,
    fontSize: 40,
    fontFamily: 'Poppins',
    fontWeight: '600',
    textAlign: 'center',
  },
  homeText: {
    fontSize: 24,
    fontFamily: 'Arial Rounded MT Bold',
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: '#2E3A59',
    textAlign: 'center',
    marginVertical: 20,
  },
  btnView: {
    width: '100%',
    alignSelf: 'center',
    height: 78,
    backgroundColor: '#F4F6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
});

export default Home;
