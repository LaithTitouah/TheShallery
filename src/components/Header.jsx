import React, { useState } from 'react';
import Overlay from './SearchOverlay';
import { login, logout, useAuthentication } from '../services/authService';
import './Header.css';

const Header = () => {
  const user = useAuthentication();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <header>
      <section id="headersection1">
        <h1>Shallery!!</h1>
        <div id="sign-in">
          {user ? (
            <>
              <p className="welcome">Welcome, {user.displayName}!</p>
              <button onClick={logout} className="auth-button signout">Sign Out</button>
            </>
          ) : (
            <button onClick={login} className="auth-button signin">Sign In with Google</button>
          )}
        </div>
      </section>
      <section id="headersection2">
          <h2>Please click this button to add shows to your shallist:</h2>
          <button onClick={() => setShowOverlay(!showOverlay)}>{showOverlay ? 'Hide Overlay' : 'Show Overlay'}</button>
        {showOverlay && <Overlay user={user} />}
      </section>
    </header>
  );
};

export default Header;















