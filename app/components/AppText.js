import { StyleSheet, View, Text } from "react-native";
import React from "react";

const AppText = ({
	text,
	fontSize = 12,
	lineheight = fontSize * 1.6,
	style = {},
}) => {
	return (
		<View>
			<Text
				style={[
					styles.text,
					{ fontSize: fontSize, lineHeight: lineheight },
					style,
				]}
			>
				{text}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
	},
});

export default AppText;
