import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { COLORS, CONSTANTS, chartConfig } from '../../assets';
import { LineChart } from 'react-native-chart-kit';
import { VectorIcon } from './';

const LineCharts = ({ data }) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<VectorIcon name={'clock-outline'} size={20} color={COLORS.lightGray} />
				<Text style={styles.titleTxt}>{CONSTANTS.TotalTrackTime}</Text>
			</View>
			<LineChart
				data={{
					labels: data.months,
					datasets: data.hours
				}}
				segments={3}
				width={380}
				height={200}
				yAxisLabel=''
				yAxisSuffix='h'
				withInnerLines={false}
				transparent
				yAxisInterval={1}
				chartConfig={chartConfig}
				bezier
				withShadow={false}
				style={{
					borderRadius: 16,
					backgroundColor: COLORS.whiteSmoke
				}}
			/>
		</View>
	);
};

export { LineCharts };

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 250,
		padding: 4,
		marginVertical: 10
	},
	titleContainer: {
		flexDirection: 'row',
		width: '100%',
		height: 40,
		alignItems: 'center'
	},
	titleTxt: {
		fontSize: 16,
		fontWeight: '600',
		color: COLORS.black,
		paddingLeft: 5
	}
});
