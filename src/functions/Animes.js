import axios from "axios";

export const getAnimes = async () =>
  await axios.get(`https://api.jikan.moe/v3/top/anime/1/upcoming`);
