import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash'
import { Link } from 'react-router-dom';
import { clearSearch } from '../../actions/search_actions';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)

  }

  shouldCompenentUpdate(nextProps) {
    if (values(this.props.showResults).length
      || values(this.props.userResults).length ) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUnmount() {
    this.props.clearSearch();
  }

  render () {

    let showResultFeed;
    let userResultFeed;

    if (values(this.props.showResults).length) {
      console.log("hit")
      showResultFeed = this.props.showResults.map( show => {
        return (
          <li key={ show.id } className="search-result-show-item">
              <Link to={`/show/${show.id}`}
                className="search-result-show-thumb">
                <img src={ show.image_url } />
              </Link>
            <h4>{show.title}</h4>
          </li>
        )
      })
    }

    if (values(this.props.userResults).length) {
      userResultFeed = this.props.userResults.map( user => {
        return (
          <li key={ user.id } className="search-result-user-item">
            <Link to={`/user/${user.id}`} className="search-result-user-thumb">
              <img src={ user.avatar_url } />
            </Link>
            <h4>{user.username}</h4>
          </li>
        )
      })
    }


    return (
      <section className="search-container">
        <div className="search-bg-img-box">
          <div className="search-mask"></div>

          <div className="search-results-container">

            <div className="search-results-shows-box">
              <div className="search-results-shows-head">
                <h2>Shows</h2>
              </div>
              <ul className="search-results-shows-feed">
                { showResultFeed }
              </ul>
            </div>

            <div className="search-results-users-box">
              <div className="search-results-users-head">
                <h2>Users</h2>
              </div>
              <ul className="search-results-users-feed">
                { userResultFeed }
              </ul>
            </div>

          </div>

        </div>
      </section>
    )

  }
}


const mapStateToProps = state => {
  return {
    userResults: state.search.userResults,
    showResults: state.search.showResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => dispatch(clearSearch())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
