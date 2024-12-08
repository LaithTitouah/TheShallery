import React, { useState } from "react";
import "./Search.css"; // Make sure to import your CSS file

export default function Search({ setter }) {
  const [term, setTerm] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  function submit(e) {
    e.preventDefault();
    setter(term);  // Pass the search term to the setter function in the parent component
    setTerm("");   // Clear the input field
    setShowOverlay(false);  
  }

  return (
    <>
      <button onClick={() => setShowOverlay(true)}>Search</button>

      {/* Overlay */}
      {showOverlay && (
        <>
          <div className="overlay">
            <div className="overlay-content">
              <h2>Search for a TV Show or Movie</h2>
              <form onSubmit={submit}>
                <input
                  type="text"
                  placeholder="Search for show..."
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
                <button type="submit">Submit</button>
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
