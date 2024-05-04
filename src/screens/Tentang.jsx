import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Tentang = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Kami</Text>
      <Text style={styles.description}>
        Kami adalah perusahaan yang berfokus pada produk-produk kecantikan alami
        dan ramah lingkungan. Tujuan kami adalah memberikan produk berkualitas
        tinggi yang memperhatikan kesehatan kulit dan juga keberlanjutan
        lingkungan.
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Beranda')}
          style={styles.btn}>
          <Text style={styles.txt}>Ke Beranda</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorit')}
          style={styles.btn}>
          <Text style={styles.txt}>Ke Favorit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
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
