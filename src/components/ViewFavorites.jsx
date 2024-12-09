import { useState } from "react";
import { getMyFavorites } from "../services/favoriteService";
import { loggedInUserId } from "../services/authService";
import Display from "./DisplayFavorites";

export default function ViewFavorites({ user }) {
    const [favorites, setFavorites] = useState([]);
    const [displayVisible, setDisplayVisibility] = useState(false);
    const [removeVisable, setRemoveVisibility] = useState(false);

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
        }; 
        return console.log("Favorites Updated");
    };

    async function MyFavorites() {
        UpdateFavorites()
        setDisplayVisibility((prev) => !prev);
    };  

    return (
        <div>
            {user ? (
                <div>
                    <button onClick={MyFavorites}>View My Ratings</button>
                    <Display 
                    favorites={favorites} 
                    displayVisible={displayVisible} 
                    removeVisable={removeVisable}
                    setDisplayVisibility={setDisplayVisibility}
                    UpdateFavorites={UpdateFavorites}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>  
    )
}