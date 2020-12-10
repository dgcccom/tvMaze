import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchMaze extends Component {
  state = {
    searchText: "",
  };

  _input: ?HTMLInputElement;

  componentDidUpdate(prevProps, prevState) {
    this._input.focus();
  }

  onInputChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  search = (event) => {
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          autoFocus="true'"
          ref={(c) => (this._input = c)}
          onChange={(event) => this.onInputChange(event)}
          onKeyDown={(event) => {
            if (event.keyCode === 13) this.search();
          }}
          value={this.state.searchText}
          placeholder="Search"
        />

        <button className="btn btn-primary" onClick={(event) => this.search()}>
          Search <FontAwesomeIcon icon="search" />
        </button>
      </div>
    );
  }
}

export default SearchMaze;
