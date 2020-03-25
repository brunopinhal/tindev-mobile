import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Main() {
    return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}/>
			<View style={styles.cardsContainer}>
					<View style={[styles.card, { zIndex:3 }]}>
						<Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/59781844?v=4'}}/>
						<View style={styles.footer}>
							<Text style={styles.name}>Bruno Pinhal</Text>
							<Text style={styles.bio} numberOfLines={3} >🔰 In love with JS && React</Text>
						</View>
					</View>
					<View style={[styles.card, { zIndex:2 }]}>
						<Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/59781844?v=4'}}/>
						<View style={styles.footer}>
							<Text style={styles.name}>Bruno Pinhal</Text>
							<Text style={styles.bio} numberOfLines={3} >🔰 In love with JS && React</Text>
						</View>
					</View>
					<View style={[styles.card, { zIndex:1 }]}>
						<Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/59781844?v=4'}}/>
						<View style={styles.footer}>
							<Text style={styles.name}>Bruno Pinhal</Text>
							<Text style={styles.bio} numberOfLines={3} >🔰 In love with JS && React</Text>
						</View>
					</View>
			</View>
			
			<View>

			</View>
    </SafeAreaView>
    );   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
		},
		logo: {
			marginTop: 30,
		},
		cardsContainer: {
			flex: 1,
			alignSelf: 'stretch',
			justifyContent: 'center',
			maxHeight: 500,
		},
		card : {
			borderWidth: 1,
			borderColor: '#ddd',
			borderRadius: 8,
			margin: 30,
			overflow: 'hidden',
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		},
		avatar: {
			flex: 1,
			height: 300,
		},
		footer: {
			backgroundColor: '#fff',
			paddingHorizontal: 20,
			paddingVertical: 15,
		},
		name: {
			fontSize: 16,
			fontWeight: 'bold',
			color: '#333',
		},
		bio: {
			fontSize: 14,
			color: '#999',
			marginTop: 5,
			lineHeight: 18,
		},
});