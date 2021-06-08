import React from 'react'
import FullInfo from './components/FullInfo'
import Main from './components/Main'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name="Main"
					component={Main}
					options={
						{
							title: 'Главная',
							headerStyle: {
								backgroundColor: '#111112',
								height: 70,
							},
							headerTitleStyle: {
								color: '#b88b59',
								textAlign: 'center',
								fontFamily: 'bold'
							},
							animationEnabled: false
						}
					}
				/>
				<Stack.Screen 
					name="FullInfo"
					component={FullInfo}
					options={
						{
							title: 'Статья',
							headerStyle: {
								backgroundColor: '#111112',
								height: 70,
							},
							headerTitleStyle: {
								color: '#b88b59',
								marginLeft: '25%',
								fontFamily: 'bold'
							},
							animationEnabled: false,
						}
					}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
