import React, {useState} from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import ManageCharges from './components/ManageCharges';

function App() {

  const clientId = "222469764990-fhqbepmetfinv9u1kft4mdv1hb50n5s5.apps.googleusercontent.com";
  const [isFbOrGoogle, setIsFbOrGoogle] = useState("");

  function checkLoginState(response){
    console.log(response)
    setIsFbOrGoogle("staff");
    // FB.login(function(response) {
    //   if (response.status === 'connected') {
    //     // Logged into your webpage and Facebook.
    //   } else {
    //     // The person is not logged into your webpage or we are unable to tell. 
    //   }
    //   console.log(response)
    // }, {
    //   scope: 'email', 
    //   return_scopes: true
    // });
  }

  const responseGoogle = (response) => {
    console.log(response.tokenObj.idpId);
    if(response.tokenObj.idpId === "google" || response.tokenObj.idpId == "google")
      setIsFbOrGoogle("admin");
  }

  return (
    <div className="App">
      {
        isFbOrGoogle ? 
        <ManageCharges /> 
        : (
          <>
            <h1>Login to Continue</h1>

            <FacebookLogin
              appId="126474889389236" 
              fields="name,email,picture"
              callback={checkLoginState}
            />
            {/* <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" 
              data-layout="default" data-auto-logout-link="false" 
              data-use-continue-as="false" scope="public_profile,email" onClick={checkLoginState}></div> */}
            <br />
            <br />

            <GoogleLogin
              clientId = {clientId} 
              buttonText="Continue with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </>
          )
        }
    </div>
  );
}

export default App;
