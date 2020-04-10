import React, { Component } from 'react';
import '../LoginPage.css';
import GoogleLogin from 'react-google-login';

class Gmail extends Component {

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="Gmail">
        <GoogleLogin
          clientId="903553020968-hias98fifmunqoeq3o4da5jj8sjgl53v.apps.googleusercontent.com"
          buttonText="Sign in with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </div>
    );
  }
}

export default Gmail;