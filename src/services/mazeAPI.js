import * as axios from "axios";

export default class mazeAPI {
  constructor() {
    this.baseURL = "https://api.tvmaze.com";
  }

  mazeAPI = () => {
    return axios.create({
      baseURL: this.baseURL,
    });
  };

  searchShows = (show) => {
    return this.mazeAPI().get("/search/shows", { params: { q: show } });
  };

  getEpisodes = (showId) => {
    return this.mazeAPI().get(`/shows/${showId}/episodes`);
  };
}
