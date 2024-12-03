import './App.css';
import { login, logout, useAuthentication } from "../services/authService";

function App() {
  const user = useAuthentication();

  return (
    <>
      <header>
        <div>
          {user ? (
            <>
              <p>Welcome, {user.displayName}</p>
              <button onClick={logout}>Sign Out</button>
            </>
          ) : (
            <button onClick={login}>Sign In with Google</button>
          )}
        </div>
      </header>
      <h1>PlayScore</h1>
      <button>Hi</button>
    </>
  );
}

export default App;
