import { useState } from "react";
import { getMyFavorites } from "../services/favoriteService";
import { loggedInUserId } from "../services/authService";
import { deleteFavorite } from "../services/favoriteService";

export default function ViewFavorites({ user }) {
    const [favorites, setFavorites] = useState([]);
    const [displayVisible, setDisplayVisibility] = useState(false);
    const [removeVisable, setRemoveVisibility] = useState(false);

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
                        <p>Rating: {fav.score}/10</p>
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
    }

    async function UpdateFavorites() {
        async function fetchFavorites() {
            console.log(user.uid)
            const favoriteShows = await getMyFavorites({ id:user.uid }); 
            favoriteShows.reverse()
            setFavorites(favoriteShows); 
        }
        fetchFavorites();
        if (user.uid == loggedInUserId()) {
            console.log("This is my page")
            setRemoveVisibility(true);
        } else {
            console.log("This is NOT my page")
            setRemoveVisibility(true);
        };
        setDisplayVisibility(true);

        return console.log("Favorites Updated");
    }; 

    async function Delete(id) {
        // console.log("Deleting favorite with id:", id);
        deleteFavorite({showId:id});
        UpdateFavorites();
    }

    return (
        <div>
            {user ? (
                <div>
                    <button onClick={UpdateFavorites}>View My Ratings</button>
                    <DisplayFavorites />
                </div>
            ) : (
                <></>
            )}
        </div>  
    )
}