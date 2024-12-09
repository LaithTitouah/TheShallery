import React, { useState } from "react";
import Display from "./DisplayFavorites";
import { getMyFavorites } from "../services/favoriteService";
import "./Search.css"; // Make sure to import your CSS file

export default function ViewOther() {
  const [favorites, setFavorites] = useState([]);
  const [displayVisible, setDisplayVisibility] = useState(false);

  function Overlay({ setter }) {
    const [term, setTerm] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);

    function submit(e) {
      e.preventDefault();
      setter({ otherUser:term});  // Pass the search term to the setter function in the parent component
      setTerm("");   // Clear the input field
      setShowOverlay(false);  
    }

    return (
      <>
        <button onClick={() => setShowOverlay(true)}>Search Other User</button>

        {/* Overlay */}
        {showOverlay && (
          <>
            <div className="overlay">
              <div className="overlay-content">
                <h2>Visit Another User's Page</h2>
                <form onSubmit={submit}>
                  <input
                    type="text"
                    placeholder="Search via Email..."
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                </form>
                <button onClick={() => setShowOverlay(false)}>Close</button>
              </div>
            </div>
            <div className="blur-background"></div>
          </>
        )}
      </>
    );
  }

  async function searchOther({ otherUser }) {
    async function fetchFavorites() {
      console.log(otherUser)
      const favoriteShows = await getMyFavorites({ id:otherUser }); 
      favoriteShows.reverse()
      setFavorites(favoriteShows); 
    }
    fetchFavorites();
    console.log("This is NOT my page")
    setDisplayVisibility(true);
  }

  return (
    <>
      <Overlay setter={searchOther}/>
      <Display 
      favorites={favorites} 
      displayVisible={displayVisible} 
      removeVisable={false}
      setDisplayVisibility={setDisplayVisibility}
      />
    </>
  );
}
