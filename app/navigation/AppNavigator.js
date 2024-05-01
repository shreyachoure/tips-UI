import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "../screens/WelcomeScreen";
import TipsScreen from "../screens/TipsScreen";
import QRScreen from "../screens/QRScreen";
import ReviewScreen from "../screens/ReviewScreen";
import ProfileScreen from "../screens/ProfileScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.black,
				tabBarInactiveTintColor: colors.grayText,
				tabBarStyle: {
					
					height: 90,
					backgroundColor: colors.lightGrayBackground,
					borderRadius: 25,
					padding: 10,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={WelcomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name={focused ? "home" : "home-outline"}
							size={25}
							color={focused ? `${colors.black}` : `${colors.grayText}`}
						/>
					),
				}}
			></Tab.Screen>
			<Tab.Screen
				name="Tips"
				component={TipsScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name={focused ? "wallet" : "wallet-outline"}
							size={25}
							color={focused ? `${colors.black}` : `${colors.grayText}`}
						/>
					),
				}}
			></Tab.Screen>
			<Tab.Screen
				name="QRCode"
				component={QRScreen}
				options={{
					tabBarLabel: () => null,
					tabBarIcon: () => (
						<View
							style={{
								borderRadius: 50,
								padding: 15,
								marginTop: -50,
								backgroundColor: colors.white,
							}}
						>
							<MaterialCommunityIcons name="qrcode" size={40} />
						</View>
					),
				}}
			></Tab.Screen>
			<Tab.Screen
				name="Reviews"
				component={ReviewScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name={focused ? "comment" : "comment-outline"}
							size={25}
							color={focused ? `${colors.black}` : `${colors.grayText}`}
						/>
					),
				}}
			></Tab.Screen>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name={focused ? "account" : "account-outline"}
							size={25}
							color={focused ? `${colors.black}` : `${colors.grayText}`}
						/>
					),
				}}
			></Tab.Screen>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({});

export default AppNavigator;
