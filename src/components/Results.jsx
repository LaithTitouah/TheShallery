export default function Results({ shows }) {

    return (
        <div>
            <h2>{shows.name}</h2> 
            {shows.image ? (
                <img src={shows.image} alt={shows.name} /> 
            ) : (
                <p>No image available</p> 
            )}
            <button>Save</button>
            
        </div>
    )
}