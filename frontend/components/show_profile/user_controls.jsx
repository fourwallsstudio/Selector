import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const UserControls = (props) => (
  <div className="show-user-controls-container">
    <Link to={`/edit/${props.show.id}`} className="s-u-c-b edit">
      <i className="fa fa-toggle-on fa-lg" aria-hidden="true"></i>
      <h2>Edit</h2>
    </Link>

    <Link to={`/stats/${props.show.id}`} className="s-u-c-b stats">
      <i className="fa fa-trophy fa-lg" aria-hidden="true"></i>
      <h2>Stats</h2>
    </Link>

    <div className="s-u-c-b delete" onClick={ props.handleDelete }>
      <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
      <h2>Delete</h2>
    </div>

    <div className="s-u-c-b embed">
      <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
      <h2>Embed</h2>
    </div>


    <div className="s-u-c-b boost">
      <i className="fa fa-bullhorn fa-lg" aria-hidden="true"></i>
      <h2>Boost</h2>
    </div>

    <div className="s-u-c-b share">
      <i className="fa fa-upload fa-lg" aria-hidden="true"></i>
      <h2>Share</h2>
    </div>
  </div>
)

export default withRouter(UserControls);
