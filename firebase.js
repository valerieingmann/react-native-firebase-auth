import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCy3mtV--h4OHeq1HFePU0bajmDdW4RJZY",
	authDomain: "tutorial-f40ce.firebaseapp.com",
	databaseURL: "https://tutorial-f40ce.firebaseio.com",
	projectId: "tutorial-f40ce",
	storageBucket: "tutorial-f40ce.appspot.com",
	messagingSenderId: "1085526165484",
	appId: "1:1085526165484:web:b4b4edfaa83329ccb562c9"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };
