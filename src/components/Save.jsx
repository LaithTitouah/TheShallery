import { useState, useEffect } from "react";
import { saveFavorite } from "../services/favoriteService";

export default function Save({ user, shows, UpdateFavorites }) {
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
        await saveFavorite(shows, parseInt(selectedScore));
        setSaved(true);
      
      } finally {
        setSaving(false);
        UpdateFavorites();
      }
    }
  
    function handleDropdownChange(event) {
      setSelectedScore(event.target.value);
    }
    
    function ButtonScore() {
        return (
        dropdownVisible && (
            
            <div>
            <select value={selectedScore} onChange={handleDropdownChange}>
                <option value="" disabled>
                Select a score
                </option>
                {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                    {i + 1}
                </option>
                ))}
            </select>

            <button onClick={save}>
                {saving ? "Saving..." : "Save"}
            </button>
            {saved && <p>{shows.summary}</p>}
            </div>
        )
        );
    };

    return (
        <div>
        {user ? (
          <div>
            <button id="savebutton" onClick={() => setDropdownVisible((prev) => !prev)}>
              {dropdownVisible ? "Hide Options" : "Rate"}
            </button>
            {<ButtonScore />}
          </div>

          ) : (
            <h3>Please Log In to rate your show.</h3>
        )}
      </div>  
    );
};