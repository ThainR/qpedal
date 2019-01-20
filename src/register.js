import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import * as firebase from 'firebase';
import 'firebase/firestore';


class Register extends Component {
  constructor() {
    super();
  this.state ={

    fName: '',
    lName:'',
    email:'',
    pass:'',
    passverif:''
  };

  this.register = this.register.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

    register(){

    /*const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const passverif = document.getElementById("passverif").value;
    */
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const timestamps = firebase.firestore();
    const settings = {
    timestampsInSnapshots: true
    };
    firestore.settings(settings);


  if(this.state.pass === this.state.passverif){
      const promise = auth.createUserWithEmailAndPassword(this.state.email,this.state.pass)
      .then(function(user){
        return firestore.collection('users').doc(user.id).set({
          firstName : this.state.fName,
          lastName: this.state.lName
        })
      });
      promise.catch(e => console.log(e.message));

      firebase.auth().onAuthStateChanged(firebaseUser => {

      if(firebaseUser){
        console.log(firebaseUser);
        //window.location.href = 'index.html'
      }else{
        console.log('not loged in');

      }

      });

    }else {
      alert("Please make sure your passwords match.");
    }
  }

  handleChange({ target }) {
      this.setState({
        [target.name]: target.value
      });
    }


  render() {

    return (

        <Form>
        <Form.Field>
          <label>First Name</label>
          <input type="text" name="fName" placeholder="Please enter first name"
          value={ this.state.fName}
          onChange={ this.handleChange }
          />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input type="text" name="lName" placeholder="Please enter lastName"
            value={ this.state.lName }
            onChange={ this.handleChange }
            />
            </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input type="email" name="email" placeholder="Please enter email"
            value={ this.state.email }
            onChange={ this.handleChange }
            />
            </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" name="pass" placeholder="Please enter password"
            value={ this.state.pass }
            onChange={ this.handleChange }
            />
          </Form.Field>
          <Form.Field>
            <label>Password Verification</label>
            <input type="password" name="passverif" placeholder="Please re-enter password"
            value={ this.state.passverif }
            onChange={ this.handleChange }
            />
          </Form.Field>

        <button class="ui Button" onClick={this.register}>Register</button>

        </Form>

    );
  }
}

export default Register;
