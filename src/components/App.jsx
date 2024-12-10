import { useState, useEffect } from "react";
import { getMyFavorites } from "./services/favoritesService";
import Results from "./components/Results";

export default function App({ user }) {
  const [favorites, setFavorites] = useState([]);
  const [currentShow, setCurrentShow] = useState(null);

  useEffect(() => {
    refreshFavorites();
  }, []);

  async function refreshFavorites() {
    const data = await getMyFavorites();
    setFavorites(data);
  }

  return (
    <div>
      <h1>Favorites List</h1>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>
            {fav.showId} - Score: {fav.score}
          </li>
        ))}
      </ul>
      {currentShow && (
        <Results user={user} shows={currentShow} onFavoriteSaved={refreshFavorites} />
      )}
    </div>
  );
}
