import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Card from "./Card";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Avatar from "./Avatar";

const QRinvite = () => {
	return (
		<View style={styles.cardContainer}>
			<Card>
				<Avatar style={styles.avatar} />
				<AppText
					text="Share Your QR"
					fontSize={18}
					style={{ fontWeight: "bold" }}
				/>
				<AppText
					text="Share your QR, get 5 star reviews and tips!"
					style={{ color: colors.grayText }}
				/>
				<TouchableOpacity style={styles.linkContainer}>
					<AppText
						text="https://qr.sima.co/John"
						style={{
							marginRight: 8,
							color: colors.darkPinkText,
							fontWeight: "bold",
						}}
					/>
					<MaterialCommunityIcons name="upload" size={20} />
				</TouchableOpacity>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	avatar: {
		marginVertical: 15,
	},
	card: {
		height: 200,
	},
	cardContainer: {
		marginVertical: 25,
	},

	linkContainer: {
		paddingTop: 15,
		paddingBottom: 20,
		flexDirection: "row",
		alignItems: "center",
	},
});
export default QRinvite;
