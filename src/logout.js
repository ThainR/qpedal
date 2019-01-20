import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import * as firebase from 'firebase';


class Logout extends Component {

constructor() {
super();
this.state ={

  email:'',
  pass:''
};

this.logout = this.logout.bind(this);
//this.handleChange = this.handleChange.bind(this);
}

logout(){
  firebase.auth().signOut();
  firebase.auth().onAuthStateChanged(firebaseUser => {

  if(firebaseUser){
  	console.log(firebaseUser);

  }else{
  	console.log('not loged in');
  	//window.location.href = 'Register.html';
  }

  });


}



render() {

  return (


        <button class="ui Button" onClick={this.logout}>Logout</button>


  );
}
}

export default Logout;
