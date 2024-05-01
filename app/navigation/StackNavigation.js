import { createStackNavigator } from "@react-navigation/stack";
import ReviewScreen from "../screens/ReviewScreen";
import TipsScreen from "../screens/TipsScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="ReviewScreen" component={ReviewScreen} />
			<Stack.Screen name="TipsScreen" component={TipsScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigation;
