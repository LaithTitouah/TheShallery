import Save from "./Save";

export default function Results({ user, shows }) {
  if (!shows) {
    return null;
  }

  return (
    <div id="results">
      {shows.length > 0 ? (
        shows.map(show => (
          <div key={show.index} id="result">
              {show.image ? (
                  <img src={show.image} alt={show.name} />
              ) : (
                  <p>No image available</p>
              )}
              <h2>{show.name}</h2>
              <Save user={user} shows={show.showId}/>
          </div>
        ))
      ) : (
        <p>Error! No show found with similar title.</p>
      )}
    </div>
  );
}
