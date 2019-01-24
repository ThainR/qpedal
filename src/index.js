import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import Register from './register';
import Login from './login';
import Logout from './logout';

var config = {
	apiKey: "AIzaSyCF4Zj0RDr0SaG912XgXrkSzCfirmvS6kE",
	authDomain: "test-7723d.firebaseapp.com",
	databaseURL: "https://test-7723d.firebaseio.com",
	projectId: "test-7723d",
	storageBucket: "test-7723d.appspot.com",
	messagingSenderId: "323075239553"
	};
	firebase.initializeApp(config);



ReactDOM.render(<Register/>, document.getElementById('root'));







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
