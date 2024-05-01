import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";

import colors from "../config/colors";
import Avatar from "./Avatar";
import AppButton from "./AppButton";

const ProfileDisplay = () => {
	return (
		<View style={styles.profileContainer}>
			<View style={styles.flexContainer}>
				<Avatar />
				<View style={styles.profileInformation}>
					<AppText
						text="John Adams"
						fontSize={16}
						style={{ fontWeight: "bold" }}
					/>
					<AppText text="+19493514151" style={{ color: colors.grayText }} />
					<View style={styles.companyName}>
						<AppText text="Working at" style={{ color: colors.grayText }} />
						<AppText
							text="@Chapeca"
							style={{ color: colors.darkPinkText, fontWeight: "bold" }}
						/>
					</View>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton>
					<AppText text="Edit Profile" />
				</AppButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	companyName: {
		flexDirection: "row",
		gap: 2,
	},
	flexContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileContainer: {
		marginVertical: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	profileInformation: {
		marginLeft: 10,
	},
});

export default ProfileDisplay;
