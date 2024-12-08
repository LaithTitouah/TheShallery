import { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import Results from './Results';
import Header from './Header';
import { login, logout, useAuthentication } from '../services/authService';
import { fetchShow, fetchShowById } from '../services/searchService';
import { getMyFavorites } from '../services/favoriteService';
import ViewFavorites from './ViewFavorites';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tvShow, setTvShow] = useState('');
  const [tvShows, setTvShows] = useState([]);
  const user = useAuthentication();

  useEffect(() => {
    if (searchTerm) {
      fetchShow(searchTerm).then(setTvShow);
    }
  }, [searchTerm]);


  return (
    <>
      <Header user={user} />
      <Search setter={setSearchTerm} />
      <Results user={user} shows={tvShow} tvShows={tvShows} />
      <ViewFavorites />
    </>
  );
}
