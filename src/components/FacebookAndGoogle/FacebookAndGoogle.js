import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

class FacebookAndGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facebookLoginSuccessful: false,
      googleLoginSuccessful: false,
      fullName: "",
      email: "",
      profilePicture: "",
    };
  }

  responseFacebook = (response) => {
    let name = response.name;
    let email = response.email;
    let pic = response.picture.data.url;
    this.setState({
      fullName: name,
      email: email,
      profilePicture: pic,
      facebookLoginSuccessful: true,
    });
    console.log(this.state);
  };

  responseGoogle = (response) => {
    let name = response.profileObj.name;
    let email = response.profileObj.email;
    let pic = response.profileObj.imageUrl;
    this.setState({
      fullName: name,
      email: email,
      profilePicture: pic,
      facebookLoginSuccessful: true,
    });
    console.log(this.state);
  };

  componentClicked = () => {
    console.log("Clicked!");
  };

  getForm = () => {
    console.log("getForm");
    return (
      <form method="post" className="mt-5">
        <h1>Sign Up</h1>

        <fieldset>
          <label htmlFor="mail">Email:</label>
          <input type="email" id="mail" name="user_email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="user_password" />
        </fieldset>

        <button type="submit">Sign Up</button>
        <FacebookLogin
          appId="255214162170721"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          onClick={this.componentClicked}
          cssClass="fb btn"
        />
        <GoogleLogin
          clientId="439028130958-5krmm73hu38p16shofu19265lsp3310t.apps.googleusercontent.com"
          buttonText="Login With Google   "
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="google btn"
        />
      </form>
    );
  };

  getUserDetails = () => {
    console.log("UserDetails");
    return (
      <div className="card w-25">
        <img
          className="card-img-top"
          src={this.state.profilePicture}
          alt={this.state.fullName}
        />
        <div className="card-body">
          <h5 className="card-title">{this.state.fullName}</h5>
          <p className="card-text">
            <strong>Email :{this.state.email}</strong>
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {console.log(
          this.state.facebookLoginSuccessful || this.state.googleLoginSuccessful
        )}
        {this.state.facebookLoginSuccessful || this.state.googleLoginSuccessful
          ? this.getUserDetails()
          : this.getForm()}
      </React.Fragment>
    );
  }
}

export default FacebookAndGoogle;
