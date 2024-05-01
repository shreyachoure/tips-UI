import { StyleSheet, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import Avatar from "./Avatar";
import Card from "./Card";
import StarComponent from "./StarComponent";

const ReviewItem = ({ name, date, image, review, stars = 5, rating }) => {
	return (
		<View>
			<Card>
				<View style={styles.reviewContainer}>
					<View style={styles.reviwerInfo}>
						<Avatar
							source={image}
							width={50}
							height={50}
							imageWidth={30}
							imageHeight={30}
							backgroundColor={colors.aquaMarineAvatarBackground}
						/>
						<View style={styles.name}>
							<AppText
								text={name}
								fontSize={14}
								style={{ fontWeight: "bold" }}
							/>
							<AppText text={date} />
						</View>
					</View>

					<StarComponent rating={rating} />

					<AppText
						text={review}
						style={{ color: colors.grayText, marginVertical: 10 }}
					/>
				</View>
			</Card>
		</View>
	);
};
const styles = StyleSheet.create({
	name: {
		marginLeft: 10,
	},
	reviwerInfo: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	reviewContainer: {
		width: "96%",
		marginVertical: 6,
		padding: 15,
		borderRadius: 10,
		backgroundColor: colors.greenBackground,
	},
});
export default ReviewItem;
