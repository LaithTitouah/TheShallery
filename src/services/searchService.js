export async function fetchShow(query) {
    query = encodeURIComponent(query);
    return fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
        .then(response => response.json())
        .then(data => {
            // Return an object with both name and image properties
            return {
                name: data.name,
                image: data.image.medium 
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