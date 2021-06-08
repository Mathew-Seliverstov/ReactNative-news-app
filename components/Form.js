import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik'

export default function Form({ addArticle }) {
	const defImg = 'https://img5.goodfon.ru/wallpaper/nbig/3/e6/zviozdnye-voiny-serial-mandalorets-the-mandalorian-baby-yoda.jpg'
    return (
      <ScrollView style={ styles.main }>
				<ScrollView>
					
				</ScrollView>
        <Formik 
					initialValues={{name: '', anons: '', full: '', img: defImg}} 
					onSubmit={
						(values, action) => {
							addArticle(values)
							action.resetForm()
						}
					}
				>
					{(props) => (
						<View style={styles.main}>
							<TextInput style={styles.input} value={props.values.name} placeholder='Введите название' onChangeText={props.handleChange('name')} />
							<TextInput style={styles.input} value={props.values.anons} multiline placeholder='Введите анонс' onChangeText={props.handleChange('anons')} />
							<TextInput style={styles.input} value={props.values.full} multiline placeholder='Введите статью' onChangeText={props.handleChange('full')} />
							<TextInput style={styles.input} value={props.values.img} placeholder='Введите URL картинки' onChangeText={props.handleChange('img')} />
							<TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
								<Text style={styles.text}>Добавить</Text>
							</TouchableOpacity>
						</View>
					)}
				</Formik>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
	main: {
		borderRadius: 8,
    backgroundColor: '#292929',
    padding: 10,
    paddingBottom: 20,
	},
	input: {
		backgroundColor: '#404040',
		marginBottom: 10,
		padding: 10,
		fontFamily: 'regular',
		color: '#fff',
		fontSize: 14,
		lineHeight: 20,
		borderRadius: 8
	},
	button: {
		backgroundColor: '#b88b59',
		alignItems: 'center',
		width: '50%',
		marginLeft: '25%',
		padding: 8,
		borderRadius: 8,
		marginTop: 20
	},
	text: {
		fontFamily: 'bold',
		color: '#000',
		fontSize: 16
	}
})
