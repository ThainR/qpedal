import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import * as firebase from 'firebase';


class Verify extends Component {
  constructor() {
    super();
//  this.state ={

  };

  this.verify = this.verify.bind(this);
  this.handleChange = this.handleChange.bind(this);
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

        <Form>

            <label>Please check your inbox for the verification email.</label>
            <label>If you did not receive the email please click resend.</label>


          <Button class="ui Button" onClick={this.verify}>Resend</Button>
        </Form>

    );
  }
}

export default Verify;
