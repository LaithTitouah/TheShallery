import { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import Results from './Results';
import Header from './Header';
import { login, logout, useAuthentication } from '../services/authService';
import { fetchShow, fetchShowById } from '../services/searchService';
import { getMyFavorites } from '../services/favoriteService';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tvShow, setTvShow] = useState('');
  const [tvShows, setTvShows] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const user = useAuthentication();
  

  useEffect(() => {
    async function fetchFavorites() {
      const favoriteShows = await getMyFavorites(); 
      favoriteShows.reverse()
      setFavorites(favoriteShows); 
    }

    fetchFavorites();
  }, []); 


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
      <div>
        <h2>----------------My Favorites----------------</h2>
        {favorites.length > 0 ? (
          
          favorites.map((fav) => (
            <div key={fav.id}>
              <img src={fav.image} alt={fav.name} />
              <p>Rating: {fav.score}/10</p>
              <h3>{fav.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: fav.summary }}></p>
            </div>
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </>
  );
}
