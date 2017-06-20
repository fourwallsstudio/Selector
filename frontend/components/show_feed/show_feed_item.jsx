import React from 'react';

const ShowFeedItem = () => {
  return (
    <div className="show-feed-item-container group">
      <div className="s-f-i-head">
        <div>user</div>
        <div>time_ago</div>
      </div>

      <div className="s-f-i-main">
        <div className="img-box"></div>
        <div className="play-box">
          <div className="play-arrow"></div>
          <div className="play-head">
            <div className="play-title">artist</div>
            <div className="tag">tag</div>
          </div>
          <div className="play-wave"></div>
          <div className="s-f-i-foot"></div>
        </div>
      </div>
    </div>
  )
};

export default ShowFeedItem;
