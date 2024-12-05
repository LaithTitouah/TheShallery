import { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import Results from './Results'
import { login, logout, useAuthentication } from "../services/authService";
import { fetchShow } from "../services/searchService"


export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tvShow, setTvShows] = useState("");
  const user = useAuthentication();

  useEffect(() => {
    if (searchTerm) {
    fetchShow(searchTerm).then(setTvShows);
    }


}, [searchTerm]);
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
      <h1>Shellery</h1>
      <Search setter={setSearchTerm} /> 
      <Results user = {user} shows={tvShow}/>
    </>
  );
}
