import { COLORS } from '../colors';

export const chartConfig = {
	backgroundColor: COLORS.background,
	backgroundGradientFrom: COLORS.background,
	backgroundGradientTo: COLORS.background,
	decimalPlaces: 0,
	color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
	labelColor: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
	propsForDots: {
		stroke: COLORS.black
	},
	propsForBackgroundLines: {
		strokeWidth: 1,
		stroke: '#e3e3e3',
		strokeDasharray: '0'
	}
};
