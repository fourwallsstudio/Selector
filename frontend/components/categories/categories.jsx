import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { updateCurrentTag } from '../../actions/tag_actions';
import { fetchShowsByTag } from '../../actions/show_actions';
import { updateFilter } from '../../actions/filter_actions';
import MustBeLoggedIn from '../errors_notices/must_be_logged_in';


class Categories extends React.Component {
  constructor(props) {
    super(props)

    this.handleClickTag = this.handleClickTag.bind(this);
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

  render() {
    let bigTags = "";

    if (this.props.tags) {
      bigTags = values(this.props.tags).map( tag => {
        return (
          <li key={ tag.id }
            className="categories-tag"
            value={ tag.id }
            onClick={ this.handleClickTag } >
            <p>{ tag.genre }</p>
          </li>
        )
      })
    }

    if (!this.props.currentUser) {

      return <MustBeLoggedIn />

    } else {

      return (
        <div>
          <div className="categories-head">
            <h2>Categories</h2>
          </div>
          <ul className="categories-container">
            { bigTags }
          </ul>
        </div>
      )
    }
  }
}


const mapStateToProps = state => {
  return {
    tags: state.tags.entities,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentTag: tag => dispatch(updateCurrentTag(tag)),
    fetchShowsByTag: tag => dispatch(fetchShowsByTag(tag)),
    updateFilter: filter => dispatch(updateFilter(filter))
  }
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories))
