import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../assets';

const Header = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
};

export { Header };

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 40,
		justifyContent: 'center'
	},
	headerText: {
		fontSize: 20,
		fontWeight: '700',
		fontFamily: 'Sora-Bold',
		color: COLORS.black
	}
});
