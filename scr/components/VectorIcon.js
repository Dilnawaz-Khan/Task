import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const VectorIcon = ({ name, size, color }) => {
	return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export { VectorIcon };
