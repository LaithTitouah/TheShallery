import { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import Results from './Results';
import Header from './Header';
import TvShowList from './TvShowList';
import { login, logout, useAuthentication } from "../services/authService";
import { fetchShowById, fetchShow } from "../services/searchService"


export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tvShow, setTvShows] = useState("")
  const user = useAuthentication();

  useEffect(() => {
    if (searchTerm) {
    fetchShow(searchTerm).then(setTvShows);
    }
}, [searchTerm]);
  return (
    <>
      <Header/>
      <h1>PlayScore</h1>
      <Search setter={setSearchTerm} /> {/* when setter is called, put setSearchTerm into it and put it as the search */}
      <Results shows={tvShow}/>
      <TvShowList />
    </>
  );
}
