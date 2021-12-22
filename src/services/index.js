import axios from "axios";

import { apiKey, baseUrl } from "config/constants";

export const getMovieList = (search) => {
  return axios.get(`${baseUrl}/?apikey=${apiKey}&s=${search}`);
};

export const getMovieById = (id) => {
  return axios.get(`${baseUrl}/?apikey=${apiKey}&i=${id}`);
};
