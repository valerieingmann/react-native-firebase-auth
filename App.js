import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

import { View, Text } from "react-native";
import { useAuth, userContext } from "./context";

const Stack = createStackNavigator();

export default function App() {
	// listens for changes in authentication
	const { initializing, user } = useAuth();

	// renders a loading page if still initializing
	if (initializing) {
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	}

	return (
		// wrap navigation in the userContext.Provider
		<userContext.Provider value={{ user }}>
			<NavigationContainer>
				<Stack.Navigator>
					{user ? (
						<>
							<Stack.Screen name="Home" component={Home} />
						</>
					) : (
						<>
							<Stack.Screen name="LogIn" component={LogIn} />
							<Stack.Screen name="SignUp" component={SignUp} />
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</userContext.Provider>
	);
}
