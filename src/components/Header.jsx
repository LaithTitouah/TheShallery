import Overlay from './SearchOverlay';
import { login, logout, useAuthentication } from '../services/authService';
import './Header.css';

const Header = () => {
const user = useAuthentication(); 
  
    return (
      <header>
        <section id = "headersection1">
          <div>
            <h1>Welcome to Shallery!!</h1>
          </div>
          <div id= "sign-in">
            {user ? (
              <>
                <p className="welcome">Welcome, {user.displayName}</p>
                <button className="auth-button.signin" onClick={logout}>Sign Out</button>
              </>
            ) : (
              <button className="auth-button signin" onClick={login}>Sign In with Google</button>
            )}
          </div>
        </section>
        <section id = "headersection2">
          <h2>Display Your TV Taste!</h2>
        </section>
        <section id ="headersection3">
            <span><Overlay user={user} /></span>
        </section>
        
      </header>
    );
  };
export default Header;