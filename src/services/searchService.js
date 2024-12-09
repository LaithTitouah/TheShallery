export async function fetchShowxxxx(query) {
    return fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
        .then(response => response.json())
        .then(data => {
            // Safely handle the case where data is null
            if (!data) {
                return {
                    name: "Unknown Show",
                    image: "https://static.tvmaze.com/uploads/images/medium_portrait/467/1168267.jpg",
                    showId: null,

                };
            }
            return {

                name: data.name || "Unknown Show", 
                image: data.image ? data.image.medium : null, 
                showId: data.id || null,


            };
        });
}

export async function fetchShowById(id) {
    return fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        return {
            name: data.name || "Unknown Show", 
            image: data.image ? data.image.medium : null, 
            summary: data.summary || "No summary available",

        };
        
      });
}

export async function fetchShow(query) {
    return fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())
        .then(data => {

            return data.map((item, index) => ({

                index: index,
                name: item.show.name || "Unknown Show",
                image: item.show.image ? item.show.image.medium : null,
                showId: item.show.id || null,

            }));
        });
}


