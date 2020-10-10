import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Home(props) {
	const { navigation } = props;
	return (
		<View>
			<Text>Home</Text>
			<Button title="Login" onPress={() => navigation.push("Login")} />
			<Button title="SignUp" onPress={() => navigation.push("SignUp")} />
		</View>
	);
}
