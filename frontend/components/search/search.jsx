import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchVal: "",
      active: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  handleSearch(e) {
    let search = e.target.value;

    this.setState({
      searchVal: search
    })

    this.props.searchForUsers(search)
    this.props.searchForShows(search)
    this.props.searchForTags(search)
  }


  handleClick(e) {
    e.preventDefault();

    this.setState({
      active: true
    })

    this.props.history.push("/search");
  }

  handleClose(e) {
    e.preventDefault();

    this.setState({
      active: false
    })

    // this.props.history.push("/");
  }

  render() {
    let searchActive = "";

    if (this.state.active) { searchActive = "search-active" }

    return (
      <div className={`header-search-bar ${searchActive}`}>
        <input
          type="text"
          value={this.state.searchVal}
          placeholder="Search"
          onChange={ this.handleSearch }
          onClick={ this.handleClick }
          />
        <div className={`search-exit ${searchActive}`}
          onClick={ this.handleClose }>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default withRouter(Search);
