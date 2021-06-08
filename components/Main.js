import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, StyleSheet, Modal } from 'react-native';
import { gStyles } from '../styles/globalStyles'
import { Ionicons } from '@expo/vector-icons'
import Form from './Form';

 
export default function Main({ navigation }) {
    const [news, setNews] = useState([
      { name: 'React Native', anons: 'Уроки React Native для начинающих / Разработка приложения с нуля', img: 'https://itproger.com/img/courses/1615637098.jpg', full: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi velit, consectetur a tincidunt ac, congue ut velit. Mauris id pharetra sem. Morbi a est efficitur, commodo odio a, accumsan sapien. Duis faucibus finibus mi, rutrum pellentesque odio dapibus vel. Nulla neque orci, sagittis sed nunc sit amet, dapibus laoreet nisi. Donec ornare, massa eu mattis commodo, purus mi aliquam neque, vel dignissim nulla erat ac turpis. In elit nibh, elementum ut mauris a, posuere pulvinar nulla. Maecenas laoreet eros in mollis facilisis. Nam venenatis semper quam, laoreet semper nunc semper quis. Google is cool!', key: '1' },
      { name: 'Flutter & Dart', anons: 'Изучение Flutter и Dart для начинающих', img: 'https://itproger.com/img/courses/1620476899.jpg', full: 'Apple is cool', key: '2' },
      { name: 'Go', anons: 'Изучения языка Golang / Создание веб сайта на Go', img: 'https://itproger.com/img/courses/1606232997.jpg', full: 'Facebook is cool', key: '3' }
    ])

    const [modalWindow, setModalWindow] = useState(false)

    const addArticle = (article) => {
      setNews((list) => {
        article.key = String(new Date().getTime())
        return [
          article,
          ...list
        ]
      })
      setModalWindow(false)
    }

    return (
      <ScrollView style={ gStyles.mbc }>
        <View style={ gStyles.main }>
          <Modal visible={modalWindow}>
            <View style={ styles.main }>
              <Ionicons name='close-circle' size={34} color='#b88b59' style={styles.iconAdd} onPress={() => setModalWindow(false)} />
                <Text style={ styles.header }>Форма добавления статей</Text>

                <Form addArticle={addArticle} />
            </View>
            
          </Modal>

          <Ionicons name='add-circle' size={34} color='#b88b59' style={styles.iconAdd} onPress={() => setModalWindow(true)} />
        
          <FlatList data={ news } renderItem={({item}) => (
            <TouchableOpacity style={ styles.card } onPress={ () => navigation.navigate('FullInfo', item) }>
                <Image source={ {uri: item.img} } style={styles.img} />
              <Text style={ styles.title }>{ item.name }</Text>
              <Text style={ styles.anons }>{ item.anons }</Text>
            </TouchableOpacity>
          )} />
          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: 30
  },
  iconAdd: {
    textAlign: 'center',
    padding: 10,
    marginBottom: 30
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 8
  },
  title: {
    color: '#b88b59',
    fontFamily: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20
  },
  anons: {
    color: '#fff',
    fontFamily: 'regular',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20
  },
  card: {
    borderRadius: 8,
    backgroundColor: '#292929',
    padding: 10,
    paddingBottom: 20,
    marginBottom: 30
  },
  main: {
    flex: 1,
    backgroundColor: '#19191a',

  },
  header: {
    marginBottom: 30,
    fontFamily: 'bold',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
})
