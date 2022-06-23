import axios from "axios";

const apiKey = "3a992d70036cb43c0da60b7f5bea1918";
let imgUrl = "https://image.tmdb.org/t/p/w500/";
// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

export const fetchPopularMovies = async () => {
  try {
    let resp = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    console.log(resp.data);
    resp.data.results.forEach(
      (movie) => (movie.url = imgUrl + movie.poster_path)
    );
    return resp.data;
  } catch (error) {
    return error;
  }
};
