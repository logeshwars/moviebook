import React from 'react'
import "./LoginContainer.css"
function LoginContainer() {
  return (
    <div
      className="login"
      style={{ backgroundImage: "url('images/batman.jpg')" }}
    >
      <div className="logoContainer">
        <img src="images/logo.png" alt="logo" />
        <h3>Movie Book</h3>
      </div>
      <div className="loginBody">
        <div className="loginHead">
          <h3>Login</h3>
          <h3>Sign up</h3>
        </div>
        <p className="getLogin">Get login to access your account.</p>
        <form method="post" action="">
          <div className="inputField">
            <input type="text" name="" placeholder="Email Address" />
            <i className="bi bi-envelope-fill"></i>
          </div>
          <div className="inputField">
            <input type="password" name="" placeholder="Password" />
            <i className="bi bi-file-lock2-fill"></i>
          </div>
          <div className="remeberMe">
            <input type="radio"></input>
            <label>Remember Me</label>
          </div>
          <div className="loginBtnCon">
            <button className="loginBtn">Login</button>
            <a href="#" className="loginForget">
              Forget password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginContainer