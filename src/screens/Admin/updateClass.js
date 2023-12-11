import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const UpdateClass = () => {
  return (
    <View>
      <View style={styles.topBar}>
        <Text style={styles.homeText}>UPDATE CLASS</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.txt}>Class Name</Text>
        <View style={styles.input}>
          <Image source={require('../../Images/Name.png')} />
          <TextInput placeholder="" style={{fontSize: 16}} />
        </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.txt}>Manager Name</Text>
        <View style={styles.input}>
          <Image source={require('../../Images/Manager.png')} />
          <TextInput placeholder="" style={{fontSize: 16}} />
        </View>
      </View>
      <View
        style={{
          width: '40%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>UPDATE CLASS</Text>
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
    borderRadius: '30 30 0 0',
  },
  homeText: {
    fontSize: 24,
    fontFamily: 'Arial Rounded MT Bold',
    color: 'white',
  },
  input: {
    width: '90%',
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    borderWidth: 0.1,
    borderColor: theme.colors.grey,
    borderRadius: 1,
    marginVertical: 7,
    paddingHorizontal: 15,
  },
  view: {
    gap: 5,
    marginVertical: 15,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
});
export default UpdateClass;
