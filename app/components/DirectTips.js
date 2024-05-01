import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const DirectTips = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cashContainer}>
				<MaterialCommunityIcons name="cash" size={25} color={colors.aqua} />
				<AppText text="Direct Tips" fontSize={16} />
			</View>

			<AppText text="$324.60" fontSize={30} style={{ fontWeight: "bold" }} />
			<AppText text="Monthly total: $400.00" style={{ color: colors.aqua }} />
		</View>
	);
};

const styles = StyleSheet.create({
	cashContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
		marginBottom: 10,
	},
	container: {
		width: "98%",
		margin: 3,
		padding: 15,
		borderRadius: 10,
		backgroundColor: colors.aquaBackground,
	},
});

export default DirectTips;
