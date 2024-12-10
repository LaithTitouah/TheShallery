import { deleteFavorite } from "../services/favoriteService";
import Save from "./Save";
import {useAuthentication } from '../services/authService';
import "./css/ViewFavorites.css"


export default function Display({ favorites, displayVisible, removeVisable, setDisplayVisibility, updateFavorites }) {
    const user = useAuthentication();

    function DisplayFavorites() {
        return displayVisible && (
            <>
                <button onClick={() => setDisplayVisibility(false)}>Close Ratings</button>
                <div id="listoffavorites">
                <h2>----------------Favorites----------------</h2>
                {favorites.length > 0 ? (
                    
                    favorites.map((fav) => (
                    <div key={fav.id}>
                        <img src={fav.image} alt={fav.name} />
                        <div id="rating">
                            <p>Rating: {fav.score}/10</p>
                            {removeVisable ?
                            <Save user={user} shows={fav.id.split("_")[0]} updateFavorites={updateFavorites} inMy={removeVisable}/> : ""
                            }
                        </div>
                        <h3>{fav.name}</h3>
                        <p dangerouslySetInnerHTML={{ __html: fav.summary }}></p>
                        <p>
                            {removeVisable ?
                            <button onClick={() => deleteEntry(fav.id)}>Remove Entry Above</button> : ""
                            }
                        </p>
                    </div>
                    ))
                ) : (
                    <p>No favorites yet!</p>
                )}
                </div>
                <button onClick={() => setDisplayVisibility(false)}>Close Ratings</button>
            </>
            );
    };

    async function deleteEntry(id) {
        // console.log("Deleting favorite with id:", id);
        deleteFavorite({showId:id});
        updateFavorites();
    }

    return <DisplayFavorites />
}