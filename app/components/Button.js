import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../config/colors";

const Button = ({ children, style = {} }) => {
	return (
		<TouchableOpacity style={[styles.buttonContainer, style]}>
			{children}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		backgroundColor: colors.grayBackground,
		width: "100%",
		height: 40,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "flex-start",
		marginBottom: 7,
	},
});

export default Button;
