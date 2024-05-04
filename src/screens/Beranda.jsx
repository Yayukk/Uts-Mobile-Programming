import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import IconMenu from '../component/IconMenu';

const Data = [
  {id: 1, label: 'SkinCare'},
  {id: 2, label: 'Tas'},
  {id: 3, label: 'Sepatu'},
  {id: 4, label: 'Kemeja'},
  {id: 5, label: 'Mukenah'},
];

const Beranda = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.judul}>Selamat Datang</Text>
      </View>
      <View>
        <FlatList
          data={Data}
          renderItem={({item}) => <IconMenu label={item.label} />}
          horizontal={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorit')}
          style={styles.btn}>
          <Text style={styles.txt}>Ke Favorit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  judul: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'pink',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
