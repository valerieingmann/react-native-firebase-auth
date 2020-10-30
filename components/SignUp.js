import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { firebase } from "../firebase";

export default function SignUp(props) {
	// useState is a React Hook that lets you add React state to functional components. Here we set the deafault values of email and password to empty strings, and initialize functions that will allow us to change these values.
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLoginPress = () => {
		props.navigation.navigate("LogIn");
	};

	//
	const onSignUpPress = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				alert(error);
			});
	};

	return (
		<View>
			<Text>Sign Up for an Account</Text>
			<TextInput placeholder="E-mail" autoCapitalize="none" onChangeText={text => setEmail(text)} />
			<TextInput
				placeholder="Password"
				autoCapitalize="none"
				onChangeText={text => setPassword(text)}
			/>

			<Button title="Create Account" onPress={onSignUpPress} />
			<View>
				<Text>Already have an account? </Text>
				<Button title="Login" onPress={onLoginPress} />
			</View>
		</View>
	);
}
