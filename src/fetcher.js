import axios from "axios";

const apiKey = "3a992d70036cb43c0da60b7f5bea1918";
let imgUrl = "https://image.tmdb.org/t/p/w154/";
// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

export const fetchPopularMovies = async () => {
  try {
    let resp = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    resp.data.results.forEach(
      (movie) => (movie.url = imgUrl + movie.poster_path)
    );
    return resp.data;
  } catch (error) {
    return error;
  }
};
export const fetchGenres = async () => {
  try {
    let resp = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    );
    return resp.data;
  } catch (error) {
    return error;
  }
};

export const searchMovies = async (keyword, year) => {
  try {
    let apiString;
    if (keyword && year)
      apiString = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&year=${year}&page=1`;
    else
      apiString = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&page=1`;

    let resp = await axios.get(apiString);
    resp.data.results.forEach(
      (movie) => (movie.url = imgUrl + movie.poster_path)
    );
    return resp.data;
  } catch (error) {
    return error;
  }
};
