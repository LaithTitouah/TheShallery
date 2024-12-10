import {
    login,
    logout,
    loggedInUserDisplayName,
  } from "../services/authService";
  
  export function SignIn() {
    return <div onClick={login}>Sign In</div>;
  }
  
  export function SignOut() {
    return (
      <div>
        Hello, {loggedInUserDisplayName()}&nbsp;
        <span onClick={logout}>Sign Out</span>
      </div>
    );
  }
