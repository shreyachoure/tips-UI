import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DirectTips from "../components/DirectTips";
import QRinvite from "../components/QRinvite";
import Avatar from "../components/Avatar";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Reviews from "../components/Reviews";

const ListHeader = () => {
	return (
		<View style={styles.container}>
			<View>
				<AppText
					text="Welcome, John."
					fontSize={30}
					style={{ fontWeight: "bold" }}
				/>
			</View>
			<View style={styles.profile}>
				<View style={styles.infoContainer}>
					<Avatar width={50} height={50} imageWidth={30} imageHeight={30} />
					<AppText
						text="Member Since: April 2024"
						fontSize={11}
						style={{ color: colors.grayText, marginLeft: 11 }}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<AppButton
						style={styles.appButton}
						onPress={() => console.log("clicked")}
					>
						<AppText text="Reviews" />
					</AppButton>
					<AppButton
						style={styles.appButton}
						onPress={() => console.log("clicked")}
					>
						<AppText text="Tips" />
					</AppButton>
				</View>
			</View>
			<Card>
				<DirectTips />
				<View style={styles.lowerContainer}>
					<TouchableOpacity style={styles.withdrawContainer}>
						<MaterialCommunityIcons name="history" size={25} />
						<AppText text="History" />
					</TouchableOpacity>
					<TouchableOpacity style={styles.withdrawContainer}>
						<MaterialCommunityIcons name="download" size={25} />
						<AppText text="Withdraw" />
					</TouchableOpacity>
				</View>
			</Card>
			<QRinvite />
			<View style={styles.infoContainer}>
				<View>
					<AppText
						text="5 Star Reviews"
						fontSize={22}
						style={{ fontWeight: "bold" }}
					/>
					<AppText
						text="Ask customer to give you"
						style={{ color: colors.grayText }}
					/>
				</View>
				<AppButton style={styles.button} onPress={() => console.log("Clicked")}>
					<AppText text="See All" />
				</AppButton>
			</View>
		</View>
	);
};
function WelcomeScreen() {
	return (
		<Screen>
			<Reviews ListHeaderComponent={ListHeader} />
		</Screen>
	);
}
const styles = StyleSheet.create({
	appButton: {
		width: 70,
		marginLeft: 10,
	},
	buttonContainer: {
		flexDirection: "row",
	},
	container: {
		padding: 15,
	},
	infoContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	lowerContainer: {
		flexDirection: "row",
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 15,
		justifyContent: "space-between",
	},
	withdrawContainer: {
		padding: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 5,
	},
});
export default WelcomeScreen;
