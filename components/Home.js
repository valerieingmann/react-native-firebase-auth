import React from "react";
import { Text, View, Button } from "react-native";
import { firebase } from "../firebase";

export default function Home() {
	const signOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				console.log("User is signed out");
			})
			.catch(error => alert(error));
	};
	return (
		<View>
			<Text>Home</Text>
			<Button title="Sign Out" onPress={signOut} />
		</View>
	);
}
