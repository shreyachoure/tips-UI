import { StyleSheet, View, Text } from "react-native";
import React from "react";
import AppText from "./AppText";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./Button";

const ProfileOptions = () => {
	return (
		<View style={styles.container}>
			<AppText
				text="Options"
				fontSize={14}
				style={{ fontWeight: "bold", paddingLeft: 15 }}
			/>
			<View style={styles.optionsContainer}>
				<Button>
					<MaterialCommunityIcons
						style={styles.icon}
						name="account-outline"
						size={30}
					/>
					<AppText text="Profile" fontSize={14} />
				</Button>
				<Button>
					<MaterialCommunityIcons
						style={styles.icon}
						name="delete-outline"
						size={30}
					/>
					<AppText text="Delete Profile" fontSize={14} />
				</Button>
				<Button>
					<MaterialCommunityIcons style={styles.icon} name="logout" size={30} />
					<AppText text="Log Out" fontSize={14} />
				</Button>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		marginTop: 15,
	},
	optionsContainer: {
		marginVertical: 15,
	},
	icon: {
		marginLeft: 15,
		marginRight: 15,
	},
});
export default ProfileOptions;
