import axios from "axios";

const apikey = "8e465ff28280979967a70c1462d19f7f";

export const getMoviesList = async () => {
    const movie = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=${apikey}'
    );

    return movie.data.results;
} 