import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const StarComponent = ({ rating, stars = 5 }) => {
	return (
		<View style={styles.stars}>
			{[...Array(stars)].map((_, index) => (
				<MaterialCommunityIcons
					key={index}
					name={index < rating ? "star-outline" : "star"}
					color={colors.aquaMarineAvatarBackground}
					size={20}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	stars: {
		flexDirection: "row",
		marginVertical: 8,
	},
});
export default StarComponent;
