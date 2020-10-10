import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// We will add code to these components in the next step. For now, they're empty!
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
