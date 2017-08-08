import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';
import UserProfileAside from './user_profile_aside';
import ShowFeedContainer from '../show_feed/show_feed_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
    this.props.fetchUserFollowings(this.props.userId)
  }

  handleFollow(e) {
    e.preventDefault();
    if (e.target.value === "follow") {
      this.props.createFollowing(
        {
          follower_id: this.props.currentUser.id,
          following_id: this.props.userId
        }
      )
    } else {
      this.props.deleteFollowing(
        {
          follower_id: this.props.currentUser.id,
          following_id: this.props.userId
        }
      )
    }
  }

  render() {

    if (!this.props.user) {
      return <h1>Loading...</h1>;

    } else {
      const user = this.props.user
      let updateOrFollow;

      if (user.id === this.props.currentUser.id) {
        updateOrFollow = <Link className="update-user-image"
          to={`/user/${user.id}/settings`} >Update cover image</Link>;

      } else if (this.props.currentUser.followings_ids.includes(user.id)) {
        updateOrFollow = <button className="u-p-follow-b"
          onClick={ this.handleFollow } value="unfollow">Unfollow</button>;

      } else {
        updateOrFollow = <button className="u-p-follow-b"
          onClick={ this.handleFollow } value="follow">Follow</button>;
      }

      return (
        <section className="user-profile-container">
          <div className="user-profile-header">
            <img className="user-profile-background-photo" src={ user.avatar_url } />
            <div className="u-p-head-items-box">
              <div className="avatar-box">
                <img src={ user.avatar_url } />
              </div>
              <div className="u-p-title-box">
                <h1>{ user.username }</h1>
                { updateOrFollow }

              </div>
            </div>
          </div>

          <div className="u-p-head-base">
          </div>

          <div className="u-p-main-container-background">
            <div className="u-p-main-container">

              <UserProfileAside
                user={ user }
                users={ this.props.users }
                followings={ this.props.followings } />

              <ShowFeedContainer filter={ user.id }/>
            </div>
          </div>

        </section>
      )
    }
  }
}

export default UserProfile;
