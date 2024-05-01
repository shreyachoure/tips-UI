import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";

const AppButton = ({ children, style = {}, onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.editProfileButton, style]}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	editProfileButton: {
		width: 100,
		height: 30,
		backgroundColor: colors.grayBackground,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default AppButton;
