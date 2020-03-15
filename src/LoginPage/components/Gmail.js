import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
 
const responseGoogle = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    isSignedIn={true}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
  
);

    <GoogleLogout
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>