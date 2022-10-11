import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Header, LineCharts, Card, ButtonCard } from '../components';
import { CONSTANTS, COLORS } from '../../assets';
const Dashboard = () => {
	const [ chartData, setChartData ] = useState({
		months: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
		hours: [
			{
				data: [ 100, 200, 300, 400 ]
			}
		]
	});
	const [ block, setBlock ] = useState({
		id: 0,
		startDate: new Date(),
		endDate: new Date(),
		breakLength: 10,
		createAt: 'Jan'
	});
	const [ todayHrs, setTodayHrs ] = useState('200h');
	const [ thisWeekHrs, setThisWeekHrs ] = useState('120h 30min');

	const generateData = () => {
		let tempBlock = [];
		for (var i = 0; i < 1000; i++) {
			tempBlock.push({
				id: i,
				startDate: new Date(),
				endDate: new Date(),
				breakLength: 10,
				createAt: 'Jan'
			});
		}
		setTodayHrs('400h');
		setThisWeekHrs('220h 35min');
	};

	return (
		<View style={styles.mainContainer}>
			<Header title={CONSTANTS.HEADER_TITLE} />
			<LineCharts data={chartData} />
			<View style={styles.cardsContainer}>
				<Card duration={todayHrs} title={CONSTANTS.Today} />
				<Card duration={thisWeekHrs} title={CONSTANTS.ThisWeek} />
			</View>
			<ButtonCard onPress={generateData} />
		</View>
	);
};

export { Dashboard };

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: COLORS.background,
		padding: 10
	},
	cardsContainer: {
		flexDirection: 'row',
		width: '98%',
		justifyContent: 'space-between',
		alignItems: 'center'
		// marginHorizontal: 20
	}
});
