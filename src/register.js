import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Login from './login';

class Register extends Component {
  constructor(props) {
    super(props);
  this.state ={

    fName: '',
    lName:'',
    email:'',
    pass:'',
    passverif:'',
    showComponent: false
  };

  this.register = this.register.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.verify = this.verify.bind(this);
  this.onButtonClick = this.onButtonClick.bind(this);
}
    onButtonClick() {
    this.setState({
      showComponent: true,
    });
    }
    //register a  new user
    register(){

      const auth = firebase.auth();
  /*    const admin = require('firebase-admin');

      admin.initializeApp({
        credential: admin.credential.applicationDefault()
      });

      var db = admin.firestore();

*/

    if(this.state.pass === this.state.passverif){
      const promise = auth.createUserWithEmailAndPassword(this.state.email,this.state.pass);


      promise.catch(e => console.log(e.message));

      firebase.auth().onAuthStateChanged(firebaseUser => {

        if(firebaseUser){
          console.log('logged in');
          console.log(firebaseUser);
          console.log(this.state.fName);
          console.log(this.state.lName);
          console.log(firebaseUser.uid);

          var firestore = firebase.firestore();

          const database = firestore.collection("users").doc(firebaseUser.uid);
        //  const database = firestore.doc("users/" + firebaseUser.uid);
          database.set({
            first: this.state.fName,
            last:  this.state.lName

          }).then(function(){
            console.log("User added");

          }).catch(function (error){
              console.log("User not added");
              console.log(error);
          });

          this.verify();
          //window.location.href = 'index.html'
        }else{
          console.log('not logged in');

        }


      });

    }else {
      alert("Please make sure your passwords match.");
    }
  }

  /*    var user =	firebase.auth().currentUser;
      var newUser = db.collection('users').doc(user.id);

      var setUser = newUser.set({
        first: this.state.fName,
        last:  this.state.lName

      });

      .then(function(user){
        return firestore.collection('users').doc(user.id).set({
          firstName : this.state.fName,
          lastName: this.state.lName
        })
      });
      */



    //function to get values from text boxes
   handleChange({ target }) {
      this.setState({
        [target.name]: target.value
      });
    }

    verify(){
      var user =	firebase.auth().currentUser;
    	user.sendEmailVerification().then(function() {
    	  // Email sent.
    	}).catch(function(error) {
    	  // An error happened.
    	});
      console.log('verif sent');

    }

  render() {

    return (
        <div>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <div class="ui input">
            <input type="text" name="fName" placeholder="Please enter first name"
            value={ this.state.fName}
            onChange={ this.handleChange }
            />
            </div>
          </Form.Field>

          <Form.Field>
            <label>Last Name</label>
            <div class="ui input">
            <input type="text" name="lName" placeholder="Please enter lastName"
            value={ this.state.lName }
            onChange={ this.handleChange }
            />
            </div>
          </Form.Field>

          <Form.Field>
            <label>Email</label>
            <div class="ui input">
            <input type="email" name="email" placeholder="Please enter email"
            value={ this.state.email }
            onChange={ this.handleChange }
            />
            </div>
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <div class="ui input">
            <input type="password" name="pass" placeholder="Please enter password"
            value={ this.state.pass }
            onChange={ this.handleChange }
            />
            </div>
          </Form.Field>

          <Form.Field>
            <label>Password Verification</label>
            <div class="ui input">
            <input type="password" name="passverif" placeholder="Please re-enter password"
            value={ this.state.passverif }
            onChange={ this.handleChange }
            />
            </div>
          </Form.Field>

        <Button class="ui Button" onClick={this.register}>Register</Button>
        </Form>

        <Form>
        <div>
        <label>If you already have an account sign in here:</label>
        </div>


        <Button onClick={this.onButtonClick}>Login</Button>
  //     {this.state.showComponent ? <Login /> : null }

        </Form>
        </div>
    );
  }
}

export default Register;
