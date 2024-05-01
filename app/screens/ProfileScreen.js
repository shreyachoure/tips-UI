import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ProfileDisplay from "../components/ProfileDisplay";
import ProfileOptions from "../components/ProfileOptions";
import AppText from "../components/AppText";
import Button from "../components/Button";
import colors from "../config/colors";
import QRinvite from "../components/QRinvite";
export default function ProfileScreen() {
	return (
		<Screen>
			<View style={styles.container}>
				<ProfileDisplay />
				<ProfileOptions />
				<View style={styles.inviteContainer}>
					<AppText text="Affiliate" fontSize={14} style={styles.heading} />
					<Button style={styles.button}>
						<AppText
							text="Add your co-workers and friends!"
							style={styles.text}
						/>
					</Button>
				</View>
				<QRinvite />
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.aquaBackground,
		justifyContent: "center",
		borderWidth: 1,
		borderColor: colors.aqua,
	},
	container: {
		padding: 15,
	},

	inviteContainer: {
		marginVertical: 15,
	},
	heading: {
		fontWeight: "bold",
		paddingLeft: 15,
		paddingBottom: 10,
	},
	text: {
		padding: 10,
	},
});
