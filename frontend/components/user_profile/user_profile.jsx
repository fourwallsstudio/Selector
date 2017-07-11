import React from 'react';
import UserProfileAside from './user_profile_aside';
import ShowFeedContainer from '../show_feed/show_feed_container';
import { Link } from 'react-router-dom';
import { values } from 'lodash';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
    this.props.fetchUser(this.props.currentUserId)
    this.props.fetchUserFollowings(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId)
      this.props.fetchUser(nextProps.userId);

    // if (this.props.currentUser && this.props.currentUser.followers_ids.length
    //   !== nextProps.currentUser.followers_ids.length) {
    //     this.props.fetchUser(nextProps.userId)
    //   }
  }


  handleFollow(e) {
    e.preventDefault();
    if (e.target.value === "follow") {
      this.props.createFollowing({
        follower_id: this.props.currentUser.id,
        following_id: this.props.userId
      })
    } else {
      this.props.deleteFollowing({
        follower_id: this.props.currentUser.id,
        following_id: this.props.userId
      })
    }
  }

  render() {

    if (!this.props.user) {
      return (
        <h1>Loading</h1>
      )
    } else {
      const user = this.props.user
      let updateOrFollow;
      console.log(user)

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
              <UserProfileAside user={ user } followings={ this.props.followings } />

              <ShowFeedContainer filter={ user.id }/>
            </div>
          </div>

        </section>
      )
    }
  }
}

export default UserProfile;

// <button className="user-profile-feed-play-all">
//   <svg viewBox="0 0 11 12" >
//     <path d="M1.003,0 C0.407,0 0,0.413 0,1.13 L0,10.871 C0,11.585 0.413,12 1.01,12 C1.254,12 1.529,11.931 1.819,11.784 L9.745,6.919 C10.744,6.413 10.744,5.593 9.745,5.087 L1.819,0.217 C1.525,0.07 1.248,0 1.003,0 M1.5,1.782 L8.37,6.003 L1.5,10.22 L1.5,1.782 M1.501,1.104 L1.504,1.104 L1.501,1.104"/>
//   </svg>
//   <p>Play all</p>
// </button>
