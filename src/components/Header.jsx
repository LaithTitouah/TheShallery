import { login, logout, useAuthentication } from "../services/authService";

export default function Header({ user }) {
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
        <h1>Shallery</h1>

    </>
  );
}