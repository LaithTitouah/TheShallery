

import { useState, useEffect } from "react";
import { saveFavorite } from "../services/favoriteService";

export default function Results({ user, shows }) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [selectedScore, setSelectedScore] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    setSelectedScore("");
    setDropdownVisible(false);
    setSaved(false);
    setSaving(false);
  }, [shows]);

  async function save() {
    try {
      setSaving(true);
      await saveFavorite(shows.showId, selectedScore);
      setSaved(true);
    } catch (error) {
      alert("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function handleDropdownChange(event) {
    setSelectedScore(event.target.value);
  }

  if (!shows) {
    return null;
  }

  return (
    <div>
      <h2>{shows.name}</h2>
      {shows.image ? (
        <img src={shows.image} alt={shows.name} />
      ) : (
        <p>No image available</p>
      )}

      {/* Toggle Dropdown and Button */}
      <button onClick={() => setDropdownVisible((prev) => !prev)}>
        {dropdownVisible ? "Hide Options" : "Rate this Show"}
      </button>

      {dropdownVisible && (
        <div>
          <select value={selectedScore} onChange={handleDropdownChange}>
            <option value="" disabled>
              Select a score
            </option>
            {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
          </select>

          <button onClick={save} disabled={saving || !selectedScore}>
            {saving ? "Saving..." : "Save"}
          </button>

          {saved && <p>Score saved successfully!</p>}
        </div>
      )}
    </div>
  );
}
