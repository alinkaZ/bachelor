import React, { Component } from 'react';
import '../LoginPage.css';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {

    render() {
  
      const responseFacebook = (response) => {
        console.log(response);
      }
  
      return (
        <div className="Facebook">
  
        <FacebookLogin
          appId="705944473566726"
          fields="name,email,picture"
          textButton="Sign in with Facebook"
          callback={responseFacebook}
        />
  
        </div>
      );
    }
  }
  
  export default Facebook;
