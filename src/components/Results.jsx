import { useState, useEffect } from "react";
import { login } from "../services/authService";
import { saveFavorite } from "../services/favoriteService";

export default function Results({ user, shows, onFavoriteSaved }) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [selectedScore, setSelectedScore] = useState("");

  useEffect(() => {
    setSelectedScore("");
    setSaved(false);
  }, [shows]);

  async function save() {
    if (!selectedScore) {
      alert("Please select a score before saving!");
      return;
    }
    try {
      setSaving(true);
      await saveFavorite(shows.showId, selectedScore);
      setSaved(true);
      if (onFavoriteSaved) {
        onFavoriteSaved(); 
      }
    } catch (error) {
      alert("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function handleDropdownChange(event) {
    setSelectedScore(event.target.value);
  }

  function ButtonAndScore() {
    return (
      <>
        {!user ? (
          <p onClick={login} style={{ cursor: "pointer", color: "blue" }}>
            Login to Save
          </p>
        ) : saving ? (
          <p>Saving...</p>
        ) : saved ? (
          <p>Saved to Gallery!</p>
        ) : (
          <div>
            <button onClick={save} disabled={!selectedScore}>
              Save
            </button>
            <select value={selectedScore} onChange={handleDropdownChange}>
              <option value="">Select Score</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        )}
      </>
    );
  }

  return (
    <div>
      <h2>{shows.name}</h2>
      {shows.image ? (
        <img src={shows.image} alt={shows.name} />
      ) : (
        <p>No image available</p>
      )}
      <ButtonAndScore />
    </div>
  );
}
