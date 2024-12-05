import { useState } from "react";
import { saveFavorite } from "../services/favoriteService";

export default function Results({ shows }) {
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    async function save() {
        try {
            setSaving(true);
            await saveFavorite(shows.showId);
            setSaved(true);
        } catch (error) {
            console.error("Error during save:", error);
            alert("Failed to save. Please try again.");
        } finally {
            setSaving(false);
        }
    }

    return (
        <div>
            <h2>{shows.name}</h2> 
            {shows.image ? (
                <img src={shows.image} alt={shows.name} /> 
            ) : (
                <p>No image available</p> 
            )}
            <button onClick={save}>Save</button>
            
        </div>
    )
}