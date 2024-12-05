export async function fetchShow(query) {
    return fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
        .then(response => response.json())
        .then(data => {
            // Safely handle the case where data is null
            if (!data) {
                return {
                    name: "Unknown Show",
                    image: "https://static.tvmaze.com/uploads/images/medium_portrait/467/1168267.jpg",
                    showId: null
                };
            }
            return {
                name: data.name || "Unknown Show", // Fallback if name is missing
                image: data.image ? data.image.medium : null, // Safely access image.medium
                showId: data.id || null // Fallback to null if id is missing
            };
        });
}

export async function fetchShowById(id){
    if (!id){
        return null;
    }
    id = encodeURIComponent(id);
    return fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .then((data) => {
        return data.summary;
    });

}