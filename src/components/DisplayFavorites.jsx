import { deleteFavorite } from "../services/favoriteService";
import Save from "./Save";
import {useAuthentication } from '../services/authService';


export default function Display({ favorites, displayVisible, removeVisable, setDisplayVisibility, updateFavorites }) {
    const user = useAuthentication();

    function DisplayFavorites() {
        return displayVisible && (
            <>
                <div>
                <button onClick={() => setDisplayVisibility(false)}>Close My Ratings</button>
                <h2>----------------My Favorites----------------</h2>
                {favorites.length > 0 ? (
                    
                    favorites.map((fav) => (
                    <div key={fav.id}>
                        <img src={fav.image} alt={fav.name} />
                        <div>
                            <p>Rating: {fav.score}/10</p>
                            {removeVisable ?
                            <Save user={user} shows={fav.id.split("_")[0]} updateFavorites={updateFavorites}/> : ""
                            }
                        </div>
                        <h3>{fav.name}</h3>
                        <p dangerouslySetInnerHTML={{ __html: fav.summary }}></p>
                        <p>
                            {removeVisable ?
                            <button onClick={() => Delete(fav.id)}>Remove Entry Above</button> : ""
                            }
                        </p>
                    </div>
                    ))
                ) : (
                    <p>No favorites yet!</p>
                )}
                <button onClick={() => setDisplayVisibility(false)}>Close My Ratings</button>
                </div>
            </>
            );
    };

    async function Delete(id) {
        // console.log("Deleting favorite with id:", id);
        deleteFavorite({showId:id});
        updateFavorites();
    }

    return <DisplayFavorites />
}