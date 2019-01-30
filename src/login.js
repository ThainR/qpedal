
import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Home from "./Home.js";


class Login extends Component {
  constructor() {
    super();
  this.state ={

    email:'',
    pass:''
  };

  this.login = this.login.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

  login(){


    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(this.state.email,this.state.pass);
    promise.catch(e => console.log(e.message));
    firebase.auth().onAuthStateChanged(firebaseUser => {

      if(firebaseUser){
        console.log(firebaseUser);
        //window.location.href = 'index.html'
        var user =	firebase.auth().currentUser;
        if(user.emailVerified){
          	console.log("verified");

        }else{
            firebase.auth().signOut();
            alert("Please verify your email");

        }
      }else{
        console.log('not loged in');

      }

    });
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

            <Button>
              <Link style={{display: 'block', height: '100%'}} to="/home">Login</Link>
            </Button>
            <button class="ui Button" onClick={this.login}>
              <Link style={{display: 'block', height: '100%'}} onClick={this.login} to="/home">Login</Link>
            </button>


          </Form>
    );
  }
}

export default withRouter(Login);
