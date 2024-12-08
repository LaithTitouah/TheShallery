import React, { useState, useEffect } from "react";
import "./Search.css"; // Make sure to import your CSS file
import Search from "./Search";
import { fetchShow, fetchShowById } from '../services/searchService';
import ViewFavorites from './ViewFavorites';

export default function VisitOther() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchUser, setSearchUser] = useState('');

  return (
    <>
      <button onClick={() => setShowOverlay(true)}>View Other User</button>

      {/* Overlay */}
      {showOverlay && (
        <>
          <div className="overlay">
            <div className="overlay-content">
              <h2>Visit Another User's Page</h2>
              <Search setter={setSearchUser} text={"Search via Email..."} />
                {console.log(searchUser)}
              <ViewFavorites user={searchUser} />
              <button onClick={() => setShowOverlay(false)}>Close</button>
            </div>
          </div>
          <div className="blur-background"></div>
        </>
      )}
    </>
  );
}
