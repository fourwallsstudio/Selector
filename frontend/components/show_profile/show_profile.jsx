import React from 'react';
import javascript_time_ago from 'javascript-time-ago'
import { withRouter, Link } from 'react-router-dom'
import ShowProfileAside from './show_profile_aside';

class ShowProfile extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
    this.timeAgo = this.timeAgo.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleShow(this.props.showId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.showId !== newProps.showId ) {
      newProps.fetchSingleShow(newProps.showId);
    }
  }

  timeAgo() {
    const show_date = this.props.show.created_at;
    return javascript_time_ago.format(show_date);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteShow(this.props.show.id)
      .then( () => this.props.history.push('/home') );
  }

  handleEditClick(e) {
    e.preventDefault();
    this.props.history.push('/edit/${this.props.show.id}');
  }

  render() {
    if (!this.props.show) {
      return (
        <div>loading</div>
      )
    } else {
      const show = this.props.show;
      let userControls;

      if (this.props.currentUser.id === show.author_id) {
        userControls = <div className="show-user-controls-container">
                        <Link to={`/edit/${show.id}`} className="s-u-c-b edit">
                          <i className="fa fa-toggle-on fa-lg" aria-hidden="true"></i>
                          <h2>Edit</h2>
                        </Link>

                        <div className="s-u-c-b embed">
                          <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                          <h2>Embed</h2>
                        </div>

                        <div className="s-u-c-b stats">
                          <i className="fa fa-trophy fa-lg" aria-hidden="true"></i>
                          <h2>Stats</h2>
                        </div>

                        <div className="s-u-c-b boost">
                          <i className="fa fa-bullhorn fa-lg" aria-hidden="true"></i>
                          <h2>Boost</h2>
                        </div>

                        <div className="s-u-c-b share">
                          <i className="fa fa-upload fa-lg" aria-hidden="true"></i>
                          <h2>Share</h2>
                        </div>

                        <div className="s-u-c-b delete" onClick={ this.handleDelete }>
                          <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                          <h2>Delete</h2>
                        </div>
                      </div>;
      }
      return (
        <section className="show-profile-container">
          <div className="show-profile-header">
            <img className="background-photo" src={ show.image_url } />
            <div className="s-p-head-base">
            </div>
          </div>

          <div className="header-overlap">
            <div className="s-p-inside-header-box">
              <div className="s-p-head-items-box">
                <div className="play-circle-box">

                  <svg className="play-circle" viewBox="0 0 16 20">
                    <path d="M0,18V2C0,0.21,1.35-.51,3,0.38l11.73,8c1.66,0.89,1.66,2.33,0,3.21L3,19.61C1.36,20.49,0,19.77,0,18Z"/>
                  </svg>

                </div>

                <div className="s-p-head-items-right">
                  <h1>{ show.title }</h1>

                  <div className="s-p-h-infobar">
                    <div className="s-p-h-foot-left">
                      <div className="s-p-author-credit">
                        <p>by</p>
                        <Link to={ `/user/${show.author_id}` }>{ show.author_username }</Link>
                      </div>
                      <button className="s-p-h-follow-b">Follow</button>
                    </div>

                    <div className="s-p-h-foot-right">
                      <div className="s-p-h-b-r hp">
                        <i className="fa fa-headphones fa-lg" aria-hidden="true"></i>
                      </div>
                      <div className="s-p-h-b-r clock">
                        <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                      </div>
                      <div className="s-p-h-b-r cal">
                        <i className="fa fa-calendar fa-lg" aria-hidden="true"></i>
                        { this.timeAgo }
                      </div>
                    </div>
                  </div>
                </div>


                <div className="s-p-h-overlap-footer">
                  <div className="s-p-h-b fav">
                    <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                    Favorite
                  </div>
                  <div className="s-p-h-b repost">
                    <i className="fa fa-retweet fa-lg" aria-hidden="true"></i>
                    Add to
                  </div>
                  <div className="s-p-h-b share">
                    <i className="fa fa-upload fa-lg" aria-hidden="true"></i>
                    Repost
                  </div>
                  <div className="s-p-h-b add">
                    <i className="fa fa-music fa-lg" aria-hidden="true"></i>
                    Share
                  </div>
                </div>
              </div>

              <div className="show-image-box">
                <img src={ show.image_url } />
              </div>
            </div>



          </div>

          { userControls }

          <div className="s-p-main-container">
            <div className="s-p-about-container">
              <div className="s-p-about-head">
                <h2>About the show</h2>
              </div>

              <div className="s-p-about-head-under">

              </div>

              <div className="s-p-about">
                <div className="s-p-about-description">
                  <p>{ show.description }</p>
                </div>
              </div>

            </div>

            <ShowProfileAside show={ show } />
          </div>

        </section>
      )
    }
  }
}

export default withRouter(ShowProfile);
