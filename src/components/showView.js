import React, { Component } from "react";

class ShowView extends Component {
  renderShowCard(showItem, that) {
    let imgURL =
      showItem.show.image != null ? (
        <img
          style={{
            width: "200px",
            position: "absolute",
            top: "-5px",
            left: "5px",
          }}
          src={showItem.show.image.medium}
        ></img>
      ) : null;

    return (
      <div
        className="card mb-1 p-1 w-100 my-3 bg-light"
        style={{ minHeight: "300px" }}
      >
        {imgURL}
        <div className="card-body" style={{ marginLeft: "250px" }}>
          <h4>{showItem.show.name}</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: showItem.show.summary,
            }}
          ></p>
          <button
            className="btn btn-info"
            onClick={(event) => this.props.onViewEpisodes(showItem.show.id)}
          >
            View Episodes
          </button>
        </div>
      </div>
    );
  }

  render() {
    const showViewCards = this.props.showData.map((showItem) => {
      return this.renderShowCard(showItem, this);
    });

    return <div>{showViewCards}</div>;
  }
}

export default ShowView;
