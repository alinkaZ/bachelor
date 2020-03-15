import React, {Component} from 'react'
import {ReactDOM} from 'react-dom';
//import {GoogleLogin} from 'react-google-login';
import {GoogleLogout} from 'react-google-login';
import { GoogleLogin } from 'react-google-login-component';
import GoogleButton from 'react-google-button';

class Gmail extends Component{
 
  constructor (props, context) {
    super(props, context);
  }
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  
 
  render () {
    return (
      <div>
        <GoogleLogin className = 'customBtn' socialId="903553020968-hias98fifmunqoeq3o4da5jj8sjgl53v.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>

    <GoogleButton
                onClick={() => { console.log('Google button clicked') 
            }}
            ></GoogleButton>
      </div>

            /*<GoogleLogout
            clientId="903553020968-hias98fifmunqoeq3o4da5jj8sjgl53v.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
            >
            </GoogleLogout>*/
    );
  }
}
 
export default Gmail;
/*export default class Facebook extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseGoogle = response => {
    //console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
    })
}

ReactDOM.render(
    <div className="Gmail">
         <GoogleLogin>
            clientId="903553020968-hias98fifmunqoeq3o4da5jj8sjgl53v.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            isSignedIn={true}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
         </GoogleLogin>

     
    </div>
)
}*/


  

