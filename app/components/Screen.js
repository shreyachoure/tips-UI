import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import constants from "expo-constants";
import colors from "../config/colors";

function Screen({ children }) {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 15,
		paddingTop: constants.statusBarHeight + 10,
		backgroundColor: colors.mainBackground,
	},
});
export default Screen;
