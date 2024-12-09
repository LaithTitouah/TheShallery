import { useState } from "react";
import { getMyFavorites } from "../services/favoriteService";
import { loggedInUserId } from "../services/authService";
import Display from "./DisplayFavorites";

export default function ViewFavorites({ user }) {
    const [favorites, setFavorites] = useState([]);
    const [displayVisible, setDisplayVisibility] = useState(false);
    const [removeVisable, setRemoveVisibility] = useState(false);

    async function updateFavorites() {
        async function fetchFavorites() {
            console.log(user.email)
            const favoriteShows = await getMyFavorites({ id:user.email }); 
            favoriteShows.reverse()
            setFavorites(favoriteShows); 
        }
        fetchFavorites();
        if (user.uid == loggedInUserId()) {
            console.log("This is my page")
            setRemoveVisibility(true);
        }; 
        return console.log("Favorites Updated");
    };

    async function myFavorites() {
        updateFavorites()
        setDisplayVisibility((prev) => !prev);
    };  

    return (
        <div>
            {user ? (
                <div>
                    <button onClick={myFavorites}>View My Ratings</button>
                    <Display 
                    favorites={favorites} 
                    displayVisible={displayVisible} 
                    removeVisable={removeVisable}
                    setDisplayVisibility={setDisplayVisibility}
                    updateFavorites={updateFavorites}
                    />
                </div>
            ) : (
                <p>Log-in to start adding to your list!</p>
            )}
        </div>  
    )
}