import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import ReviewItem from "./ReviewItem";

const reviews = [
	{
		id: 1,
		name: "Amy Evergreen",
		date: "16.04.2024",
		image: require("../assets/woman.png"),
		rating: 3,
		review:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	},
	{
		id: 2,
		name: "Amy Evergreen",
		date: "16.04.2024",
		image: require("../assets/boy.png"),
		rating: 4,
		review:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	},
	{
		id: 3,
		name: "Amy Evergreen",
		date: "16.04.2024",
		image: require("../assets/boy.png"),
		rating: 5,
		review:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	},
	{
		id: 4,
		name: "Amy Evergreen",
		date: "16.04.2024",
		image: require("../assets/boy.png"),
		rating: 5,
		review:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	},
	{
		id: 5,
		name: "Amy Evergreen",
		date: "16.04.2024",
		image: require("../assets/boy.png"),
		rating: 5,
		review:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	},
];
const ReviewList = ({ ListHeaderComponent }) => {
	return (
		<View>
			<FlatList
				data={reviews}
				keyExtractor={(review) => review.id.toString()}
				renderItem={({ item }) => (
					<>
						<ReviewItem
							name={item.name}
							date={item.date}
							review={item.review}
							image={item.image}
							star={item.rating}
						/>
					</>
				)}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={ListHeaderComponent}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});
export default ReviewList;
