import { useState } from "react";
import { getMyFavorites } from "../services/favoriteService";
import { loggedInUserId } from "../services/authService";

export default function ViewFavorites({ user }) {
    const [favorites, setFavorites] = useState([]);
    const [displayVisible, setDisplayVisibility] = useState(false);
    const [removeVisable, setRemoveVisibility] = useState(false);
    
    function DisplayFavorites() {
        return displayVisible && (
            <>
                <div>
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
                            <button>Remove Entry Above</button> : ""
                            }
                        </p>
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
        if (user.uid == loggedInUserId()) {
            console.log("This is my page")
            setRemoveVisibility(true);
        };
        setDisplayVisibility(true);

        return console.log("Favorites Updated");
    }; 

    return (
        <div>
            {user ? (
                <div>
                    <button onClick={UpdateFavorites}>View My Ratings</button>
                    <DisplayFavorites />
                </div>
            ) : (
                <h3>Please Log In to view your Ratings.</h3>
            )}
        </div>  
    )
}