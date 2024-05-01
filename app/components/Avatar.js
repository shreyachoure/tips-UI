import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";

const Avatar = ({
	source = require("../assets/boy.png"),
	width = 60,
	height = 60,
	imageWidth = 35,
	imageHeight = 35,
	backgroundColor = colors.lavender,
	style = {},
}) => {
	return (
		<View
			style={[
				styles.imageContainer,
				{ width, height, borderRadius: width / 2, backgroundColor },

				style,
			]}
		>
			<Image
				resizeMode="contain"
				style={[
					styles.image,
					{
						width: imageWidth,
						height: imageHeight,
					},
				]}
				source={source}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		resizeMode: "contain",
	},
});

export default Avatar;
