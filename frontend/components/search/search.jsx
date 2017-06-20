import React from 'react';

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      searchVal: ""
    }
  }

  update() {
    return e => this.setState({ searchVal: e.target.value })
  }

  render() {
    return (
      <div className="header-search-bar">
        <input
          type="text"
          value={this.state.searchVal}
          placeholder="Search"
          onChange={this.update()}
          />
      </div>
    )
  }
}

export default Search;
