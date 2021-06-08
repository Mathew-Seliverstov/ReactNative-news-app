import React from 'react';
import { gStyles } from '../styles/globalStyles'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function FullInfo({ route }) {
    return (
      <ScrollView style={ gStyles.mbc }>
        <View style={ styles.main }>
          <Image source={ {uri: route.params.img} } style={styles.img} />

          <Text style={ styles.title }>{ route.params.name }</Text>
          <Text style={ styles.full }>{ route.params.full }</Text>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  main: {
    borderRadius: 8,
    backgroundColor: '#292929',
    padding: 10,
    paddingBottom: 20,
    margin: 10
  },
  img: {
    width: '100%', 
    height: 200,
    borderRadius: 8
  },
  title: {
    fontSize: 28,
		color: '#b88b59',
		fontFamily: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  full: {
    color: '#fff',
    fontFamily: 'light',
    fontSize: 18,
    padding: 10,
    lineHeight: 24
  }
})
