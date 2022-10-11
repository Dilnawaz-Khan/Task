import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, CONSTANTS } from '../../assets';

const Card = ({ duration, title }) => {
	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: title == CONSTANTS.Today ? COLORS.lightYellow : COLORS.lightBlue }
			]}
		>
			<Text style={styles.durationTxt}>{duration}</Text>
			<Text style={styles.titleTxt}>{title}</Text>
		</View>
	);
};

export { Card };

const styles = StyleSheet.create({
	container: {
		width: '47%',
		height: 80,
		justifyContent: 'center',
		paddingLeft: 10,
		borderRadius: 10
	},
	durationTxt: {
		fontSize: 20,
		fontWeight: '600',
		color: COLORS.black
	},
	titleTxt: {
		fontSize: 13,
		fontWeight: '400',
		color: COLORS.lightGray
	}
});
