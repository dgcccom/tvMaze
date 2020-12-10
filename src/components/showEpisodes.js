import React, { Component } from "react";

class ShowEpisodes extends Component {
  renderShowDetails() {
    const currentShow = this.props.selectedShow.show;

    let imgURL =
      currentShow.image != null ? (
        <img
          style={{
            width: "250px",
          }}
          src={currentShow.image.medium}
        ></img>
      ) : null;

    return (
      <div>
        {imgURL}

        <h4>{currentShow.name}</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: currentShow.summary,
          }}
        ></p>
      </div>
    );
  }

  renderEpisodes() {
    const episodeList = this.props.episodes.map((episode) => {
      return (
        <div className="mb-2">
          <div className="font-weight-bold">
            Episode (Season: {episode.season} - Episode: {episode.number})
          </div>
          <div className="font-weight-bold font-italic">{episode.name}</div>
          <div>First Aired: {episode.airdate}</div>
          <hr></hr>
        </div>
      );
    });

    return <div className="float-left ml-2">{episodeList}</div>;
  }

  render() {
    return (
      <div>
        <div className="w-100 mt-3" style={{ height: "40px" }}>
          <button
            className="btn btn-info float-right"
            onClick={(event) => this.props.onCloseEpisodes()}
          >
            Return to Search Results
          </button>
        </div>
        <div className="w-100 mt-3">
          <div className="float-left pr-2" style={{ width: "300px" }}>
            {this.renderShowDetails()}
          </div>
          <div style={{ marginLeft: "300px" }}>{this.renderEpisodes()}</div>
        </div>
      </div>
    );
  }
}

export default ShowEpisodes;
