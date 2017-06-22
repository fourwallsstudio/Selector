import React from 'react';

const ShowFeedItem = ({ show }) => {
  return (
    <li className="show-feed-item-container group">
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
            <div className="play-title">{show.title}</div>
            <div className="tag">tag</div>
          </div>
          <div className="play-wave"></div>
          <div className="s-f-i-foot"></div>
        </div>
      </div>
    </li>
  )
};

export default ShowFeedItem;
