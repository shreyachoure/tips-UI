import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import TipsList from "../components/TipsList";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Card from "../components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DirectTips from "../components/DirectTips";

const ListHeader = () => {
	return (
		<View style={styles.container}>
			<AppText text="Tips" fontSize={30} style={{ fontWeight: "bold" }} />
			<Card>
				<DirectTips />
				<TouchableOpacity style={styles.withdrawContainer}>
					<MaterialCommunityIcons name="download" size={25} />
					<AppText text="Withdraw" />
				</TouchableOpacity>
			</Card>
			<AppText
				text="Last Tips"
				fontSize={26}
				style={{ fontWeight: "bold", marginTop: 15 }}
			/>
			<AppText
				text="You can see your tip history in this section."
				fontSize={16}
				style={{ color: colors.grayText, marginBottom: 15 }}
			/>
		</View>
	);
};

export default function TipsScreen() {
	return (
		<Screen>
			<TipsList
				ListHeaderComponent={ListHeader}

			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	withdrawContainer: {
		padding: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 5,
	},
});
