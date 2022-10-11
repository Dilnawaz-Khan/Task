import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, CONSTANTS } from '../../assets';
import { VectorIcon } from './VectorIcon';

const ButtonCard = ({ onPress }) => {
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<VectorIcon name={'heart'} size={90} color={COLORS.purple} />
				<View style={styles.floatingContainer}>
					<VectorIcon name={'face-recognition'} size={20} color={COLORS.black} />
				</View>
			</View>
			<View style={styles.rightContainer}>
				<View style={styles.rightTitleContainer}>
					<Text style={styles.rightTitleTxt}>{CONSTANTS.WantMoreData}</Text>
				</View>
				<View style={styles.rightDesripContainer}>
					<Text style={styles.rightDesripTxt}>{CONSTANTS.PressThisButtonToAddThousandsBlocks}</Text>
				</View>
				<TouchableOpacity onPress={onPress} style={styles.btnContainer}>
					<Text>{CONSTANTS.DoIt}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export { ButtonCard };

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 130,
		backgroundColor: COLORS.whiteSmoke,
		borderRadius: 10,
		marginVertical: 10,
		flexDirection: 'row'
	},
	leftContainer: {
		width: '30%',
		height: '100%',
		backgroundColor: COLORS.whiteSmoke,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10
	},
	floatingContainer: {
		width: 32,
		height: 32,
		backgroundColor: COLORS.yellow,
		position: 'absolute',
		bottom: 42,
		right: 22,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	rightContainer: {
		width: '70%',
		height: '100%',
		backgroundColor: COLORS.whiteSmoke,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		padding: 5
	},
	rightTitleContainer: {
		width: '100%',
		height: '30%'
	},
	rightTitleTxt: {
		fontSize: 16,
		fontWeight: '700',
		color: COLORS.black,
		lineHeight: 24
	},
	rightDesripContainer: {
		width: '70%',
		height: '50%'
	},
	rightDesripTxt: {
		fontWeight: '400',
		fontSize: 15,
		color: COLORS.lightGray,
		lineHeight: 16,
		textAlign: 'left'
	},
	btnContainer: {
		width: 70,
		height: 40,
		backgroundColor: COLORS.yellow,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 4,
		right: 4
	}
});
