import { useState } from "react";
import "./Search.css"; // Make sure to import your CSS file

export default function Search( { setter }) {
    const [term, setTerm] = useState("");

    function submit(e) {
        e.preventDefault();
        setter(term) // Take the imputed term and invoke the setter (put in the setSearchTerm)
        setTerm("")
    }

    return (
        <form onSubmit={submit}> 
            <input 
            type="text" 
            placeholder="Search for show..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            />
        </form>
    );
}