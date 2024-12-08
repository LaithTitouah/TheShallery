import React from 'react';

function TvShowList({ shows }) {
  // Check if shows is an array before calling map
  if (!Array.isArray(shows)) {
    return <div>No shows available</div>;  // Handle cases where `shows` is undefined or not an array
  }

  return (
    <div id="mainlist">
      <div className="column">Show Titles</div>
      <div className="column">Genre</div>
      <div className="column">Status</div>
      <div className="column">Seasons</div>
      <div className="column">Rating</div>

      {/* Dynamically render TV show rows */}
      {shows.map((show, index) => (
        <div key={index} className="row">
          <div className="column">{show.title}</div>
          <div className="column">{show.genre}</div>
          <div className="column">{show.status}</div>
          <div className="column">{show.seasons}</div>
          <div className="column">{show.rating}</div>
        </div>
      ))}
    </div>
  );
}

export default TvShowList;