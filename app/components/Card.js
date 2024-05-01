import { StyleSheet, View, Text } from "react-native";
import React from "react";

import colors from "../config/colors";

const Card = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		width: "100%",
		backgroundColor: colors.lightGrayBackground,
		shadowColor: "#404040",
		shadowOpacity: 0.1,
		shadowOffset: { width: 2, height: 4 },
		ShadowRadius: 5,
		alignItems: "center",
		borderRadius: 10,
	},
});
export default Card;
