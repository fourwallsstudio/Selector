import React from 'react';
import { Link } from 'react-router-dom';

const ShowFeedItem = ({ show }) => {
  return (
    <li id={ show.id } className="show-feed-item-container group">
      <div className="s-f-i-head">
        <div>user</div>
        <div>time_ago</div>
      </div>

      <div className="s-f-i-main">
        <div className="img-box">
          <img src={ show.image_url } />
        </div>
        <div className="play-box">
          <div className="play-arrow">
            <svg>
              <path d="M0,18V2C0,0.21,1.35-.51,3,0.38l11.73,8c1.66,0.89,1.66,2.33,0,3.21L3,19.61C1.36,20.49,0,19.77,0,18Z"/>
            </svg>
          </div>
          <div className="play-head">
            <Link to={`/show/${show.id}`} className="play-title">{ show.title }</Link>
            <div className="play-tag">#tag</div>
            <div className="author_credit">by
              <Link to={`/user/${show.author_id}`}>{ show.author_username }</Link>
            </div>
          </div>

          <div className="play-wave"></div>

          <div className="s-f-i-foot">
            <div className="s-f-i-foot-left">
              <div className="s-f-i-b fav">
                <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
              </div>
              <div className="s-f-i-b repost">
                <i className="fa fa-retweet fa-lg" aria-hidden="true"></i>
              </div>
              <div className="s-f-i-b share">
                <i className="fa fa-upload fa-lg" aria-hidden="true"></i>
              </div>
              <div className="s-f-i-b add">
                <i className="fa fa-music fa-lg" aria-hidden="true"></i>
              </div>
            </div>

            <div className="s-f-i-foot-right">
              <div className="s-f-i-b-r hp">
                <i className="fa fa-headphones" aria-hidden="true"></i>
              </div>
              <div className="s-f-i-b-r clock">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
              <div className="s-f-i-b-r cal">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </div>
            </div>


          </div>
        </div>
      </div>
    </li>
  )
};

export default ShowFeedItem;
