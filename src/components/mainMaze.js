import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

import SearchMaze from "./searchMaze";
import ShowView from "./showView";
import ShowEpisodes from "./showEpisodes";
import mazeAPI from "../services/mazeAPI";

class MainMaze extends Component {
  state = { showData: [], loading: false, episodes: [] };

  constructor(props) {
    super(props);
    this.mazeAPI = new mazeAPI();

    this.setState({ showData: [], showEpisodes: false, selectedShow: null });
  }

  onSearch = (searchText) => {
    this.setState({ searchText: searchText, loading: true });
    const searchShows = this.mazeAPI.searchShows(searchText);

    Promise.all([searchShows]).then(([searchShows]) => {
      let sortedData = searchShows.data.sort(
        (scoreA, scoreB) => scoreA.score > scoreB.score
      );

      this.setState({
        showData: sortedData,
        loading: false,
        showEpisodes: false,
      });
    });
  };

  onViewEpisodes = (showId) => {
    this.setState({ loading: true });

    const getEpisodes = this.mazeAPI.getEpisodes(showId);

    Promise.all([getEpisodes]).then(([episodes]) => {
      const selectedShow = this.state.showData.find(
        (item) => item.show.id === showId
      );

      this.setState({
        loading: false,
        showEpisodes: true,
        selectedShow: selectedShow,
        episodes: episodes.data,
      });
    });
  };

  render() {
    let spinner = null;
    if (this.state.loading) {
      spinner = (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    const currentView = this.state.showEpisodes ? (
      <ShowEpisodes
        selectedShow={this.state.selectedShow}
        episodes={this.state.episodes}
        onCloseEpisodes={() => {
          this.setState({ showEpisodes: false });
        }}
      ></ShowEpisodes>
    ) : (
      <ShowView
        showData={this.state.showData}
        onViewEpisodes={(showId) => {
          this.onViewEpisodes(showId);
        }}
      ></ShowView>
    );

    return (
      <div className="container">
        <div className="row justify-content-center align-items-center mt-5">
          <SearchMaze
            onSearch={(searchText) => this.onSearch(searchText)}
          ></SearchMaze>
          {spinner}
          {currentView}
        </div>
      </div>
    );
  }
}

export default MainMaze;
