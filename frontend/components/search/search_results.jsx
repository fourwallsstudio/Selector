import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash'
import { Link, withRouter } from 'react-router-dom';
import { clearSearch } from '../../actions/search_actions';
import { fetchShowsByTag } from '../../actions/show_actions';
import { updateCurrentTag } from '../../actions/tag_actions';
import { updateFilter } from '../../actions/filter_actions';
import MustBeLoggedIn from '../errors_notices/must_be_logged_in';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)

    this.handleClickTag = this.handleClickTag.bind(this);
  }

  shouldCompenentUpdate(nextProps) {
    if (values(this.props.showResults).length ||
      values(this.props.userResults).length ||
      values(this.props.tagResults).length) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUnmount() {
    this.props.clearSearch();
  }

  handleClickTag(e) {
    e.preventDefault();
    this.props.updateCurrentTag(e.currentTarget.value)
    this.props.fetchShowsByTag(e.currentTarget.value)
      .then( () => {
        this.props.updateFilter('tag')
        this.props.history.push('/home')
      })
  }

  render () {
    let tagResultFeed;
    let showResultFeed;
    let userResultFeed;
    if (values(this.props.tagResults).length) {
      tagResultFeed = this.props.tagResults.map( tag => {
        return (
          <li key={ tag.id } className="search-result-tag-item"
            onClick={ this.handleClickTag }
            value={ tag.id } >
            <p>{ tag.genre }</p>
          </li>
        )
      })
    }


    if (values(this.props.showResults).length) {
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

    if (!this.props.currentUser) {

      return <MustBeLoggedIn />

    } else {

      return (
        <section className="search-container">
          <div className="search-bg-img-box">
            <div className="search-mask"></div>

            <div className="search-results-container">

              <div className="search-results-tags-box">
                <div className="search-results-tags-head">
                  <h2>Tags</h2>
                </div>
                <ul className="search-results-tags-feed">
                  { tagResultFeed }
                </ul>
              </div>

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
}


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    userResults: state.search.userResults,
    showResults: state.search.showResults,
    tagResults: state.search.tagResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => dispatch(clearSearch()),
    fetchShowsByTag: (filter, tagId) => dispatch(fetchShowsByTag(filter, tagId)),
    updateCurrentTag: tagId => dispatch(updateCurrentTag(tagId)),
    updateFilter: filter => dispatch(updateFilter(filter))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults));
