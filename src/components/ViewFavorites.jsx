import { useState } from "react";
import { getMyFavorites } from "../services/favoriteService";
import { login, logout, useAuthentication } from '../services/authService';
import './ViewFavorites.css';

export default function ViewFavorites() {
    const [favorites, setFavorites] = useState([]);
    const user = useAuthentication();
    const [displayVisible, setDisplayVisibility] = useState(false);

    
    function DisplayFavorites() {
        return displayVisible && (
            <>
                <div id="listoffavorites">
                <h2>----------------My Favorites----------------</h2>
                {favorites.length > 0 ? (
                    
                    favorites.map((fav) => (
                    <div key={fav.id}>
                        <img src={fav.image} alt={fav.name} />
                        <span>Rating: {fav.score}/10</span>
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

    async function UpdateFavorites() {
      async function fetchFavorites() {
        const favoriteShows = await getMyFavorites(); 
        favoriteShows.reverse()
        setFavorites(favoriteShows); 
      }
      fetchFavorites();
      setDisplayVisibility(true);

      return console.log("Favorites Updated");
    }; 

    return (
        <div>
            {user ? (
                <div>
                    <button onClick={UpdateFavorites}>ViewFavorites</button>
                    <DisplayFavorites />
                </div>
            ) : (
                <h3>Please Log In to view your favorites.</h3>
            )}
        </div>  
    )
}