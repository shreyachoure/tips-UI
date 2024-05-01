import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import ListItem from "./ListItem";
import AppText from "./AppText";
import colors from "../config/colors";
import AppButton from "./AppButton";
const tipsData = [
	{
		id: 1,
		name: "Amy Evergreen",
		companyName: "Chapeca",
		image: require("../assets/boy.png"),
		tip: 3.45,
	},
	{
		id: 2,
		name: "Amy Evergreen",
		companyName: "Chapeca",
		image: require("../assets/boy.png"),
		tip: 3.45,
	},
	{
		id: 3,
		name: "Amy Evergreen",
		companyName: "Chapeca",
		image: require("../assets/boy.png"),
		tip: 3.45,
	},
	{
		id: 4,
		name: "Amy Evergreen",
		companyName: "Chapeca",
		image: require("../assets/boy.png"),
		tip: 3.45,
	},
	{
		id: 5,
		name: "Amy Evergreen",
		companyName: "Chapeca",
		image: require("../assets/boy.png"),
		tip: 3.45,
	},
];
const TipsList = ({ ListHeaderComponent }) => {
	return (
		<>
			<FlatList
				data={tipsData}
				keyExtractor={(tip) => tip.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						name={item.name}
						companyName={item.companyName}
						tip={item.tip}
						image={item.image}
					/>
				)}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={ListHeaderComponent}
				ListFooterComponent={() => <View style={{ height: 50 }} />}
			/>
		</>
	);
};

export default TipsList;
