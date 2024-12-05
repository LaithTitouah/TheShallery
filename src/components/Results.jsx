import { useState } from "react";
import { login } from "../services/authService";
import { saveFavorite } from "../services/favoriteService";

export default function Results({ user, shows }) {
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [selectedScore, setSelectedScore] = useState(""); // State for dropdown selection

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
        setSelectedScore(event.target.value); // Updates the selected option
    }

    function ButtonAndScore() {
        return (
            <>
                {!user ? (
                    <p onClick={login} style={{ cursor: "pointer", color: "blue" }}>Login to Save</p>
                ) : saving ? (
                    <p>Saving...</p>
                ) : saved ? (
                    <p>Saved to Gallery!</p>
                ) : (
                    <div>
                        <button onClick={save}>Save</button>
                    </div>
                )}
                <select value={selectedScore} onChange={handleDropdownChange}>
                    <option value="">Select Score</option>
                    {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
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
