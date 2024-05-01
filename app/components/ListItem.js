import { StyleSheet, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import Avatar from "./Avatar";

const ListItem = ({ name, companyName, image, tip }) => {
	return (
		<View style={styles.profileContainer}>
			<View style={styles.flexContainer}>
				<Avatar souce={image} />
				<View style={styles.profileInformation}>
					<AppText text={name} fontSize={16} style={{ fontWeight: "bold" }} />
					<AppText
						text={`@${companyName}`}
						style={{ color: colors.darkPinkText, fontWeight: "bold" }}
					/>
				</View>
			</View>

			<View style={styles.tipContainer}>
				<AppText
					text={`$${tip}`}
					fontSize={20}
					style={{ fontWeight: "bold" }}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	flexContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileContainer: {
		marginHorizontal: 10,
		padding: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: colors.lightGrayBackground,
		shadowColor: "#808080",
		shadowOpacity: 0.2,
		shadowOffset: { width: 2, height: 3 },
		ShadowRadius: 5,
		borderRadius: 20,
	},

	profileInformation: {
		paddingLeft: 10,
	},
});
export default ListItem;
