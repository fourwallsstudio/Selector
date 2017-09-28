import ShowFeed from './show_feed';
import { connect } from 'react-redux';
import { fetchAllShows } from '../../actions/show_actions';
import { createQueueItem } from '../../actions/queue_actions';
import { startPreview, stopPreview } from '../../actions/preview_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';
import { selectFilteredShows, selectShowsByTag, selectUser } from '../../reducers/selecters';
import { createNewPlay, updatePlayStatus, changePlayerOrder } from '../../actions/player_actions';


const mapStateToProps = (state, ownProps) => {
  const { queue, player, preview, tags } = state
  const { filter } = ownProps
  const shows = filter === 'tag'
    ? selectShowsByTag(state)
    : selectFilteredShows(state, ownProps)

  return {
    currentUser: selectUser(state, state.session.currentUser),
    tags: tags.entities,
    shows,
    queue,
    player,
    filter,
    preview,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllShows: filter => dispatch(fetchAllShows(filter)),
    createQueueItem: q => dispatch(createQueueItem(q)),
    startPreview: src => dispatch(startPreview(src)),
    stopPreview: src => dispatch(stopPreview(src)),
    createNewPlay: (show, currentUser) => dispatch(createNewPlay(show, currentUser)),
    updatePlayStatus: status => dispatch(updatePlayStatus(status)),
    changePlayerOrder: (queue, idx) => dispatch(changePlayerOrder(queue, idx)),
    createFavorite: fav => dispatch(createFavorite(fav)),
    deleteFavorite: fav => dispatch(deleteFavorite(fav)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFeed);
