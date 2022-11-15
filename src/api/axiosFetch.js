import axios from "axios";

export const axiosFetch = axios.create({
  baseURL: "https://fakestoreapi.com",
});
