import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const Data = [
  {id: 1, label: 'SkinCare'},
  {id: 2, label: 'Tas'},
  {id: 3, label: 'Sepatu'},
  {id: 4, label: 'Kemeja'},
  {id: 5, label: 'Mukenah'},
];

const Favorit = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Favorit</Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Tentang')}
        style={styles.btn}>
        <Text style={styles.txt}>Ke Tentang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Favorit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  item: {
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  itemText: {
    fontSize: 18,
    color: 'black',
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
