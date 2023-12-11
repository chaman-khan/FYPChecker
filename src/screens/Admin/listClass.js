import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const ListOfClasses = () => {
  const DATA = [
    {
      id: 1,
      year: 2013,
    },
    {
      id: 2,
      year: 2014,
    },
    {
      id: 3,
      year: 2015,
    },
    {
      id: 4,
      year: 2016,
    },
    {
      id: 5,
      year: 2017,
    },
    {
      id: 6,
      year: 2018,
    },
    {
      id: 7,
      year: 2019,
    },
    {
      id: 8,
      year: 2020,
    },
    {
      id: 9,
      year: 2021,
    },
    {
      id: 10,
      year: 2022,
    },
    {
      id: 11,
      year: 2023,
    },
  ];
  const DATA1 = [
    {id: 1, name: 'Abid Rafiq', class: 'BSSE 7th'},
    {id: 2, name: 'Faisal Shehzad', class: 'BSSE 5th'},
    {id: 3, name: 'Hikmatullah', class: 'BSSE 3rd'},
    {id: 4, name: 'Ilyas', class: 'BSCS 7th'},
    {id: 5, name: 'John Doe', class: 'BSIT 7th'},
    {id: 6, name: 'Jane Doe', class: 'BSEE 4th'},
    {id: 7, name: 'Ahmed Ali', class: 'BBA 2nd'},
  ];
  const [showClasses, setShowClasses] = useState(false);
  return (
    <View>
      <View style={styles.topBar}>
        <Text style={styles.homeText}>ADD CLASS</Text>
      </View>
      <View>
        <View
          style={{
            width: '90%',
            height: 31,
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            borderColor: 'grey',
            borderWidth: 0.6,
            borderRadius: 24,
          }}>
          <TextInput />
          <Image source={require('../../Images/Search.png')} />
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={({item}) => {
              <TouchableOpacity
                style={{
                  width: '60%',
                  height: 56,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20
                }}
                onPress={() => setShowClasses(true)}>
                <Text>{item.year}</Text>
              </TouchableOpacity>;
            }}
          />
        </View>
      </View>
      {showClasses && (
        <View>
          <Image source={require('../../Images/threeDot.png')} />
          <FlatList
            data={DATA1}
            renderItem={({item}) => {
              <TouchableOpacity
                style={{
                  width: '70%',
                  height: 56,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5, borderRadius: 20
                }}
                onPress={() => setShowClasses(true)}>
                <Text style={{fontSize: 14, fontWeight: '600', color: 'black'}}>{item.class}</Text>
                <Text style={{fontWeight: '500'}}>{item.name}</Text>
              </TouchableOpacity>;
            }}
          />
        </View>
      )}
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
});
export default ListOfClasses;
