import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { firebase } from "../firebase";

export default function LogIn(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSignUpPress = () => {
		props.navigation.navigate("SignUp");
	};

	const onLoginPress = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				alert(error);
			});
	};
	return (
		<View>
			<Text>Log in</Text>
			<TextInput
				placeholder="E-mail"
				autoCapitalize="none"
				value={email}
				onChangeText={text => setEmail(text)}
			/>
			<TextInput
				placeholder="Password"
				autoCapitalize="none"
				value={password}
				onChangeText={text => setPassword(text)}
			/>
			<Button title="Log In" onPress={onLoginPress} />
			<Text>Don't have an Account?</Text>
			<Button title="Sign Up" onPress={onSignUpPress} />
		</View>
	);
}
